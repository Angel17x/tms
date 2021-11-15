"use strict";
var CardTradeMode = {
	CardTradeMode_ONLY_INSERT_CARD: 1,
	CardTradeMode_ONLY_SWIPE_CARD: 2,
	CardTradeMode_SWIPE_INSERT_CARD: 5,
	CardTradeMode_UNALLOWED_LOW_TRADE: 4,
	CardTradeMode_SWIPE_TAP_INSERT_CARD: 3,
	CardTradeMode_SWIPE_TAP_INSERT_CARD_UNALLOWED_LOW_TRADE: 6,
	CardTradeMode_ONLY_TAP_CARD: 7,
	CardTradeMode_SWIPE_TAP_INSERT_CARD_NOTUP: 8,
	CardTradeMode_SWIPE_TAP_INSERT_CARD_NOTUP_UNALLOWED_LOW_TRADE: 9,
	CardTradeMode_TAP_INSERT_CARD: 11,
	CardTradeMode_TAP_INSERT_CARD_NOTUP: 10,
	CardTradeMode_SWIPE_TAP_INSERT_CARD_DOWN: 12
},
   EMVDataOperation = {
		CLEAR: 0,
		ADD: 1,
		DELETE: 2,
		ATTAINLIST: 3,
		UPDATE: 4,
		GETEMV: 5
	},
TransactionType = {};

function anlycPosInfo() {
    var e = upPLength();
    var t = 0 , n = getUpPByte(t++), r = hex2Ascii(r = byteArray2Hex(getUpPBytes(t, n)));
    t += n;
    var o = getUpPByte(t++), a = hex2Ascii(a = byteArray2Hex(getUpPBytes(t, o)));
    t += o;
    var s = getUpPByte(t++), i = byteArray2Hex(getUpPBytes(t, s)), u = "";
    3 < (i = hex2Ascii(i)).length && (u = i.substr(3, s),
    i = i.substr(0, 3)),
    t += s;
    var l = getUpPByte(t++);
    console.log("batteryLevelLen:" + l);
    var c = byteArrayToInt(getUpPBytes(t, l)) + " mV";
    t += l;
    var y = getUpPByte(t++)
      , g = "00" == (g = byteArray2Hex(getUpPBytes(t, y))) ? "false" : "true";
    t += y;
    var C = getUpPByte(t++)
      , n = "00" == (n = byteArray2Hex(getUpPBytes(t, C))) ? "false" : "true";
    t += C;
    o = getUpPByte(t++),
    s = "00" == (s = byteArray2Hex(getUpPBytes(t, o))) ? "false" : "true";
    t += o;
    l = getUpPByte(t++),
    y = "00" == (y = byteArray2Hex(getUpPBytes(t, l))) ? "false" : "true";
    t += l;
    C = getUpPByte(t++),
    o = "00" == (o = byteArray2Hex(getUpPBytes(t, C))) ? "false" : "true",
    l = "";
    (t += C) < e && (m = getUpPByte(t++),
    l = byteArray2Hex(getUpPBytes(t, m)),
    t += m),
    console.log("dataEncryptionMode: " + l);
    var m = "";
    t < e && (d = getUpPByte(t++),
    m = "00" == (m = byteArray2Hex(getUpPBytes(t, d))) ? "false" : "true",
    t += d);
    l = "";
    t < e && (p = getUpPByte(t++),
    l = "00" == (l = byteArray2Hex(getUpPBytes(t, p))) ? "false" : "true",
    t += p);
    var p, d = "";
    return t < e && (p = getUpPByte(t++),
    100 < (e = getUpPBytes(t, p)[0]) ? e = 100 : e < 0 && (e = 0),
    d = e.toString(10),
    d += "%",
    t += p),
    {
        isSupportedTrack1: s,
        isSupportedTrack2: y,
        isSupportedTrack3: o,
        bootloaderVersion: r,
        firmwareVersion: a,
        isUsbConnected: n,
        isCharging: g,
        batteryLevel: c,
        hardwareVersion: i,
        SUB: u,
        updateWorkKeyFlag: m,
        keyboardflag: l,
        batteryPercentage: d
    }
}

function anlycPosId() {
    var e = upPLength(),
        t = 0,
        r = getUpPByte(t++),
        n = byteArray2Hex(getUpPBytes(t, r));
    t += r;
    var o = getUpPByte(t++),
        r = byteArray2Hex(getUpPBytes(t, o));
    t += o, console.log("posId:" + r);
    o = getUpPByte(t++), byteArray2Hex(getUpPBytes(t, o));
    t += o;
    o = getUpPByte(t++), byteArray2Hex(getUpPBytes(t, o));
    (t += o) < e && (a = getUpPByte(t++), byteArray2Hex(getUpPBytes(t, a)), t += a, a = getUpPByte(t++), byteArray2Hex(getUpPBytes(t, a)), t += a);
    var a = "";
    t < e && (s = getUpPByte(t++), a = byteArray2Hex(getUpPBytes(t, s)), t += s);
    var s;
    t < e && (s = getUpPByte(t++), byteArray2Hex(getUpPBytes(t, s)), t += s, s = getUpPByte(t++), byteArray2Hex(getUpPBytes(t, s)), t += s, s = getUpPByte(t++), byteArray2Hex(getUpPBytes(t, s)), t += s, s = getUpPByte(t++), byteArray2Hex(getUpPBytes(t, s)), t += s, s = getUpPByte(t++), byteArray2Hex(getUpPBytes(t, s)), t += s);
    return t < e && (e = getUpPByte(t++), byteArray2Hex(getUpPBytes(t, e)), t += e), {
        posId: r,
        csn: a,
        psamId: n
    }
}
TransactionType.GOODS = 1, 
TransactionType.SERVICES = 2, 
TransactionType.CASH = 3, 
TransactionType.CASHBACK = 4, 
TransactionType.INQUIRY = 5, 
TransactionType.TRANSFER = 6, 
TransactionType.ADMIN = 7, 
TransactionType.CASHDEPOSIT = 8,
TransactionType.PAYMENT = 9, 
TransactionType.PBOCLOG = 10, 
TransactionType.SALE = 11, 
TransactionType.PREAUTH = 12, 
TransactionType.ECQ_DESIGNATED_LOAD = 16, 
TransactionType.ECQ_UNDESIGNATED_LOAD = 17, 
TransactionType.ECQ_CASH_LOAD = 18, 
TransactionType.ECQ_CASH_LOAD_VOID = 19, 
TransactionType.ECQ_INQUIRE_LOG = 10, 
TransactionType.REFUND = 20, 
TransactionType.SALES_NEW = 21,
TransactionType.LEGACY_MONEY_ADD = 22, 
TransactionType.NON_LEGACY_MONEY_ADD = 23, 
TransactionType.BALANCE_UPDATE = 24, 
TransactionType.UPDATE_PIN = 240;
var CmdId = {
    CMDID_WAITING: 35,
    CMDID_QUERY: 34,
    CMDID_PART_DATA: 54,
    CMDID_OLD: 0,
    CMDID_RESET: 32,
    CMDID_PROCESS: 33,
    CMDID_COMPLETED: 36,
    CMDID_TIMEOUT: 37,
    CMDID_DESTRUCT: 38,
    CMDID_CRCERROR: 39,
    CMDID_USERCANCEL: 40,
    CMDID_MACERROR: 41,
    CMDID_ICC_INIT_ERROR: 48,
    CMDID_ICC_POWER_ON_ERROR: 49,
    CMDID_ICC_TRADE_ERROR: 50,
    CMDID_EMV_TRANS_TERMINATE: 51,
    CMDID_EMV_TRANS_DENIAL: 52,
    CMDID_NOT_AVAILABLE: 53,
    CMDID_COMPLETED_ENCRY: 136,
    CMDID_EMV_APP_CFG_ERROR: 55,
    CMDID_EMV_CAPK_CFG_ERROR: 56,
    CMDID_WR_DATA_ERROR: 57,
    CMDID_NO_UPDATE_WORK_KEY: 64,
    CMDID_INPUT_PIN_ING: 65,
    CMDID_MAG_TO_ICC_TRADE: 66,
    CMDID_SEND_IC_CARDNO: 67,
    CMDID_EMV_TRANS_CARD_BLOCKED_OR_EMV_APPS: 68,
    CMDID_EMV_TRANS_SELECT_APP_FAILED: 69,
    CMDID_EMV_TRANS_CAPK_FAILED: 70,
    CMDID_EMV_TRANS_FALLBACK: 71,
    CMDID_EMV_TRANS_TERMINATE_NFC: 72,
    CMDID_CARD_REMOVED: 81,
    CMDID_MSR_DATA_READY: 82,
    CMDID_EMV_KERNEL_PC: 73,
    CMDID_CHECK_HAVE_CARD: 137
};

function CommandDownlink(e, t, r) {
    packCmmandDownlink(33, e, t, r, new Array)
}
function CommandDownlink2(e, t, r, n) {
    packCmmandDownlink(33, e, t, r, n)
}
function CommandDownlink3(e, t, r, n, o) {
    packCmmandDownlink(e, t, r, n, o)
}
function CommandDownlink4(e, t, r, n) {
    packCmmandDownlink(e, t, r, n, new Array)
}
function getDownPByte(e) {
    return getPByte(e)
}
function getDownPBytes() {
    return getPBytes()
}
function packCmmandDownlink(e, t, r, n, o) {
    packet(o.length), setCmdID(e), setCmdCode(t), setCmdSubCode(r), setTimeOut(n), setDataField(o), buildCRC()
}
function commandCode() {
    return getCmdCode()
}
function subCommandCode() {
    return getCmdSubCode()
}
function getResult() {
    return getResultCode()
}
function commandID() {
    return getCmdID()
}
function upPLength() {
    var e = new Array;
    return e[0] = getPByte(3), e[1] = getPByte(4), byteArrayToInt(e)
}
function getUpPByte(e) {
    return getDataFieldByte(e)
}
function getUpPBytes(e, t) {
    for (var r = new Array, n = 0; n < t; n++) r[n] = getDataFieldByte(e + n);
    return r
}
function getAllBytes() {
    return getPBytes()
}
function validCRC() {
    return validPCRC()
}
function packageCommandUplink(e) {
    var t = hexStr2Bytes(e.substring(10, e.length));
    packet(e.length / 2 - 5),
    setCmdID(CmdId.CMDID_COMPLETED),
    setCmdCode(parseInt(e.substring(0, 2), 16)),
    setCmdSubCode(parseInt(e.substring(2, 4), 16)),
    setTimeOut(0),
    setDataField(t),
    buildCRC()
}
var pinStr, pinMode, mTradeAmount, mCurrencyCode, mCashbackAmount, mTradeType, DoTrade = function(e) {
    writeObj(e),
    mListener = e,
    console.log("DoTrade init" + mListener),
    writeObj(this)
}
//me quede aqui
,EmvOption = {
        START: 0,
        START_WITH_FORCE_ONLINE: 1,
        START_WITH_FORCE_PIN: 2,
        START_WITH_FORCE_ONLINE_FORCE_PIN: 3
    },
    DoTradeMode = {
        COMMON: 0,
        CHECK_CARD_NO_IPNUT_PIN: 1,
        IS_DEBIT_OR_CREDIT: 2
    },
    TransactionResult = {
        APPROVED: "APPROVED",
        TERMINATED: "TERMINATED",
        DECLINED: "DECLINED",
        CANCEL: "CANCEL",
        CAPK_FAIL: "CAPK_FAIL",
        NOT_ICC: "NOT_ICC",
        SELECT_APP_FAIL: "SELECT_APP_FAIL",
        DEVICE_ERROR: "DEVICE_ERROR",
        CARD_NOT_SUPPORTED: "CARD_NOT_SUPPORTED",
        MISSING_MANDATORY_DATA: "MISSING_MANDATORY_DATA",
        CARD_BLOCKED_OR_NO_EMV_APPS: "CARD_BLOCKED_OR_NO_EMV_APPS",
        INVALID_ICC_DATA: "INVALID_ICC_DATA",
        FALLBACK: "FALLBACK",
        NFC_TERMINATED: "NFC_TERMINATED",
        CARD_REMOVED: "CARD_REMOVED",
        TRADE_LOG_FULL: "TRADE_LOG_FULL",
        TRANSACTION_NOT_ALLOWED_AMOUNT_EXCEED: "TRANSACTION_NOT_ALLOWED_AMOUNT_EXCEED"
    },
    mDoTradeMode = DoTradeMode.COMMON,
    mCardTmode = CardTradeMode.CardTradeMode_SWIPE_TAP_INSERT_CARD,
    mAmountIcon = "",
    cDisplayStr = "",
    mFormatId = "",
    mBatchId = "",
    mAmountPoint = "",
    mSaveLogFlag = "",
    mIsSupportCashBack = !1,
    FINA_CONFIRM = "03",
    BATCH_DC = "04",
    OFFLINE_ADVICE = "05",
    ONLINE_ADVICE = "06",
    REVERSAL = "07",
    EMV_TRANS_ACCEPT = "01",
    EMV_TRANS_DENIAL = "02",
    EMV_TRANS_GOONLINE = "03";

function setAmountPoint(e) {
    mAmountPoint = e ? "01" : "00"
}

function sendPin(e) {
    pinMode = "00", pinMode = "" == (pinStr = e) || null == pinStr ? "00" : "01", console.log("sendPin==" + pinStr + " pinMode==" + pinMode), EMVCvmSetPin(e)
}

function isSavelog(e) {
    mSaveLogFlag = e ? "01" : "00"
}

function setAmount(e, t, r, n) {
    console.log("setAmount:" + e + "setAcashbackAmount:" + t), mTradeAmount = e, mCashbackAmount = t, mCurrencyCode = r, console.log("transactionType :" + n), mTradeType = toHex(n).substr(2, 2), console.log("setAmount tradeType: " + mTradeType)
}
var datas, encMode, AmountType = {
    MONEY_TYPE_NONE: 1,
    MONEY_TYPE_RMB: 2,
    MONEY_TYPE_DOLLAR: 3,
    MONEY_TYPE_CUSTOM_STR: 4
};

function setAmountIcon(e, t) {
    console.log("setAmountIcon:" + e + "setAcashbackAmount:" + t);
    var r = "";
    if (e == AmountType.MONEY_TYPE_NONE) r = "01";
    else if (e == AmountType.MONEY_TYPE_RMB) r = "02";
    else if (e == AmountType.MONEY_TYPE_DOLLAR) r = "03";
    else if (e == AmountType.MONEY_TYPE_CUSTOM_STR) return void(null != (mAmountIcon = t) && "" != t && (mAmountIcon = byteArray2Hex(getUTF8Bytes(t.trim()))));
    this.amountIcon = r
}

function setDoTradeMode(e) {
    mDoTradeMode = e
}

function setFormatId(e) {
    mFormatId = e
}

function setBatchId(e) {
    mBatchId = e
}

function setCardTmodeMode(e) {
    mCardTmode = e
}

function checkAmount(e, t) {
    var r = !0;
    if (null != e && "" != e && 0 != e.length) {
        if ("FFFFFFFF" == e) return posInputAmountFlag = !0, console.log("===========tradeAmount:" + e), r;
        if ("00000000" == e) return this.tradeAmount = "", r;
        if (console.log("amount format" + t), "05" == t || "18" == t) {
            if (e.startsWith("0") && 1 < e.length) return mListener.onError("INPUT_INVALID"), console.log("For inquiry cannot input non-zero number startwith 0"), r = !1
        } else if (e.startsWith("0")) return mListener.onError("INPUT_INVALID"), console.log("Can't input number which is startwith a 0"), r = !1; - 1 != e.indexOf(".") && (console.log("amount format error，have a point"), mListener.onError("INPUT_INVALID_FORMAT"), r = !1)
    } else "05" != t && "18" != t && (mListener.onError("INPUT_INVALID"), console.log("Can't input null"), r = !1);
    return r
}

function doTrade(e, t) {
    10 <= e || (checkAmount(mTradeAmount, mTradeType) ? EmvPolCard(mTradeAmount, t, mAmountIcon, e, mCardTmode, mTradeType, mCurrencyCode, cDisplayStr) : (mListener.onError("Input invalid"), alert("input error")))
}

function EmvPolCard(e, t, r, n, o, a, s, i) {
    var u = 0,
        l = new Array,
        c = new Array,
        y = new Array,
        A = new Array,
        d = new Array,
        g = new Array,
        C = new Array,
        m = new Array,
        p = new Array,
        D = new Array,
        R = 0;
    isEmpty(r) || (R = (l = hexStr2Bytes(r.trim())).length);
    var _ = 0;
    isEmpty(e) || (_ = (c = getUTF8Bytes(e.trim())).length);
    var E = getFormatDateyyyyMMddHHmmss(),
        f = 0;
    isEmpty(E) || (f = (y = hexStr2Bytes(E.trim())).length);
    var T = 0,
        P = i;
    isEmpty(P) || (T = (A = hexStr2Bytes(P.trim())).length);
    var I = 0;
    isEmpty(mFormatId) || (I = (d = hexStr2Bytes(mFormatId.trim())).length);
    var S = 0;
    isEmpty(mBatchId) || (S = (g = hexStr2Bytes(mBatchId.trim())).length);
    r = 0;
    isEmpty(mAmountPoint) || (r = (C = hexStr2Bytes(mAmountPoint.trim())).length);
    e = 0;
    isEmpty(mSaveLogFlag) || (e = (m = hexStr2Bytes(mSaveLogFlag.trim())).length);
    E = 0;
    isEmpty("00") || (E = (p = hexStr2Bytes("00".trim())).length);
    i = (D = hexStr2Bytes("313431323137")).length, P = new Array(1 + _ + 1 + 1 + R + 1 + 1 + f + 1 + 1 + 1 + 1 + 1 + 1 + 2 + 1 + T + 8 + 1 + I + 1 + S + 1 + r + 1 + e + 1 + E + 1 + i);
    P[u++] = _, arrCopyArr(c, 0, P, u, _), u += _, o == CardTradeMode.CardTradeMode_ONLY_INSERT_CARD ? P[u++] = 1 : o == CardTradeMode.CardTradeMode_ONLY_SWIPE_CARD ? P[u++] = 2 : o == CardTradeMode.CardTradeMode_SWIPE_TAP_INSERT_CARD ? P[u++] = 3 : o == CardTradeMode.CardTradeMode_UNALLOWED_LOW_TRADE ? P[u++] = 4 : o == CardTradeMode.CardTradeMode_SWIPE_INSERT_CARD ? P[u++] = 5 : o == CardTradeMode.CardTradeMode_SWIPE_TAP_INSERT_CARD_UNALLOWED_LOW_TRADE ? P[u++] = 6 : o == CardTradeMode.CardTradeMode_ONLY_TAP_CARD ? P[u++] = 7 : o == CardTradeMode.CardTradeMode_SWIPE_TAP_INSERT_CARD_NOTUP ? P[u++] = 8 : o == CardTradeMode.CardTradeMode_SWIPE_TAP_INSERT_CARD_NOTUP_UNALLOWED_LOW_TRADE ? P[u++] = 9 : o == CardTradeMode.CardTradeMode_TAP_INSERT_CARD ? P[u++] = 11 : o == CardTradeMode.CardTradeMode_TAP_INSERT_CARD_NOTUP ? P[u++] = 10 : o == CardTradeMode.CardTradeMode_SWIPE_TAP_INSERT_CARD_DOWN ? P[u++] = 12 : P[u++] = 3, P[u++] = R, arrCopyArr(l, 0, P, u, R), u += R, mDoTradeMode == DoTradeMode.CHECK_CARD_NO_IPNUT_PIN ? P[u++] = 1 : mDoTradeMode == DoTradeMode.IS_DEBIT_OR_CREDIT ? P[u++] = 3 : P[u++] = 0, P[u++] = f, arrCopyArr(y, 0, P, u, f), u += f, P[u++] = 0, P[u++] = 0, P[u++] = n, P[u++] = 0, P[u++] = 1, isEmpty(a) && (a = "01"), P[u++] = hexStr2Bytes(a)[0], 3 == (s = isEmpty(s) ? "0156" : s).length && (s = "0" + s), P[u++] = hexStr2Bytes(s)[0], P[u++] = hexStr2Bytes(s)[1], P[u++] = T, arrCopyArr(A, 0, P, u, T), u += T, P[u++] = I, arrCopyArr(d, 0, P, u, d.length), u += I, P[u++] = S, arrCopyArr(g, 0, P, u, g.length), u += S, P[u++] = r, arrCopyArr(C, 0, P, u, C.length), u += r, P[u++] = e, arrCopyArr(m, 0, P, u, m.length), u += e, P[u++] = E, arrCopyArr(p, 0, P, u, p.length), u += E, P[u++] = i, arrCopyArr(D, 0, P, u, D.length), u += i, arrCopyArr(calMac(P, P.length - 8), 0, P, u, 8), u += 8, mListener.onRequestWaitingUser(), CommandDownlink2(22, 32, t, P);
    P = getDownPBytes();
    startSession(new Uint8Array(P).buffer, onReceiveDateListener, 15)
}

function EMVCvmSetPin(e) {
    var t = 0,
        r = new Array(512);
    r[t++] = hexStr2Bytes(pinMode)[0], r = ("" == e || null == e ? r[t++] = 0 : (e = getUTF8Bytes(e), r[t++] = e.length, arrCopyArr(e, 0, r, t, e.length), t += e.length), r[t++] = 1, r[t++] = 0, arrCopyArr(r, 0, r = new Array(t), 0, t), CommandDownlink2(22, 52, 60, r), getDownPBytes()), startSession(new Uint8Array(r).buffer, onReceiveDateListener, 15)
}

function onReceiveDateListener(e) {
    if (console.log("onReceiveDateListener----------" + e + "commid----------" + e.substring(6, 8)), "01" == e.substring(18, 20) && "1620" == e.substring(8, 12)) {
        mListener.onDoTradeResult(DoTradeResult.ICC, null), CommandDownlink2(22, 48, 60, EMVStart(EmvOption.START));
        var t = getDownPBytes();
        console.log(byteArray2Hex(t)), startSession(new Uint8Array(t).buffer, onReceiveDateListener, 5)
    } else if ("00" == e.substring(18, 20) && "1620" == e.substring(8, 12)) checkCardResult(DoTradeResult.MCR, e);
    else if ("03" == e.substring(18, 20) && "1620" == e.substring(8, 12)) checkCardResult(DoTradeResult.NFC_ONLINE, e);
    else if ("04" == e.substring(18, 20) && "1620" == e.substring(8, 12)) checkCardResult(DoTradeResult.NFC_OFFLINE, e);
    else if ("05" == e.substring(18, 20) && "1620" == e.substring(8, 12)) mListener.onDoTradeResult(DoTradeResult.NFC_DECLINED, null);
    else if ("24" == e.substring(6, 8) && "1634" == e.substring(8, 12)) {
        var r = parseInt(e.substring(14, 18), 16);
        continueEmvProcess(n = e.substring(18, 18 + 2 * r))
    } else if ("32" == e.substring(6, 8) && "1634" == e.substring(8, 12)) mListener.onRequestSetPin();
    else if ("24" == e.substring(6, 8) && "1630" == e.substring(8, 12)) {
        var r = parseInt(e.substring(14, 18), 16),
            n = e.substring(18, 18 + 2 * r);
        if (console.log("1630 dataStra==" + n), console.log("receive  len" + r), "02" == e.substring(12, 14)) {
            var o = new Array,
                a = 0,
                s = parseInt(n.substring(a, a + 2), 16);
            console.log("appCount = " + s), a += 2;
            for (var i = 0; i < s; i++) {
                a += 2, a += 2;
                var u = parseInt(n.substring(a, a + 2), 16);
                a += 2;
                var l = hex2Ascii(n.substring(a, a + 2 * u));
                a += 2 * u, o.push(l)
            }
            mListener.onRequestSelectEmvApp(o)
        } else "31" == e.substring(12, 14) || "32" == e.substring(12, 14) ? mListener.onRequestSetPin() : continueEmvProcess(n)
    } else "241640" == e.substring(6, 12) && (console.log("online result===" + e), r = parseInt(e.substring(14, 18), 16), console.log("le==+++" + r), n = bufData + e.substring(18, 18 + 2 * r), console.log("111===" + n.length), t = Str2Bytes(n), console.log("len==" + t.length), r = (e = analysisEmvResult(t))[0], t = e[1], e[2], e[3], e = e[4], console.log("icc result===" + e), r == EMV_TRANS_ACCEPT ? t == REVERSAL ? (mListener.onRequestDisplay(Display.REMOVE_CARD), mListener.onReturnReversalData(e), mListener.onRequestTransactionResult(TransactionResult.DECLINED)) : t != FINA_CONFIRM && t != BATCH_DC || (mListener.onRequestDisplay(Display.REMOVE_CARD), mListener.onRequestBatchData(e), mListener.onRequestTransactionResult(TransactionResult.APPROVED)) : r == EMV_TRANS_DENIAL && (t == ONLINE_ADVICE || t == OFFLINE_ADVICE ? (mListener.onRequestDisplay(Display.REMOVE_CARD), mListener.onRequestBatchData(e), mListener.onRequestTransactionResult(TransactionResult.DECLINED)) : REVERSAL == t && (mListener.onRequestDisplay(Display.REMOVE_CARD), mListener.onReturnReversalData(e), mListener.onRequestTransactionResult(TransactionResult.DECLINED))))
}

function continueEmvProcess(e) {
    var t = analysisEmvResult(hexStr2Bytes(e)),
        r = t[0],
        e = (t[1], t[2], t[3], t[4]);
    EMV_TRANS_GOONLINE == r ? mListener.onRequestOnlineProcess(e) : emvGoOffLine(t)
}

function emvGoOffLine(e) {
    var t = e[0],
        r = e[1],
        e = (e[2], e[3], e[4]);
    if (EMV_TRANS_DENIAL == t) {
        if (ONLINE_ADVICE == r || OFFLINE_ADVICE == r) return mListener.onReqestDisplay(Display.REMOVE_CARD), mListener.onRequestBatchData(e), void mListener.onRequestTransactionResult(TransactionResult.DECLINED);
        if (REVERSAL == r) return mListener.onRequestDisplay(Display.REMOVE_CARD), mListener.onReturnReversalData(e), void mListener.onRequestTransactionResult(TransactionResult.DECLINED)
    } else if (EMV_TRANS_ACCEPT == t) {
        if (REVERSAL == r) return mListener.onRequestDisplay(Display.REMOVE_CARD), mListener.onReturnReversalData(e), void mListener.onRequestTransactionResult(TransactionResult.DECLINED);
        if (FINA_CONFIRM == r || BATCH_DC == r) return mListener.onRequestDisplay(Display.REMOVE_CARD), mListener.onRequestBatchData(e), void mListener.onRequestTransactionResult(TransactionResult.APPROVED)
    }
    startSysSession(packageInstructionReset(), null, 5), logListaner = "onError(Error.UNKNOWN)", console.log(logListener)
}

function EMVSelectEMVApp(e) {
    var t = new Array;
    t.push(e), CommandDownlink2(22, 49, 30, t);
    t = getDownPBytes();
    console.log(byteArray2Hex(t)), startSysSession(new Uint8Array(t).buffer, null, 60).then(function(e) {
        var t;
        0 == getResult() && (t = upPLength(), console.log(" length()--" + upPLength()), continueEmvProcess(byteArray2Hex(getUpPBytes(0, t))))
    }, function(e) {
        console.log(e)
    })
}

function EMVGoOnLine(e) {
    CommandDownlink2(22, 64, 30, hexStr2Bytes(e));
    e = getDownPBytes();
    console.log(byteArray2Hex(e)), startSession(new Uint8Array(e).buffer, onReceiveDateListener, 60)
}

function checkCardResult(e, t) {
    var r = new Array;
    console.log("result:" + t);
    var n = hexStr2Bytes(t.substring(14, 14 + t.length - 16)),
        o = (n[2], 4),
        a = n.length,
        s = n[o++],
        i = byteArray2Hex(getBytesFromArr(o, s, n));
    o += s, r.push(i);
    var u = n[o++],
        t = byteArray2Hex(getBytesFromArr(o, u, n));
    o += u, r.push(t);
    s = n[o++], i = byteArray2Hex(getBytesFromArr(o, s, n));
    o += s, r.push(i);
    u = n[o++], s = ab2str(getBytesFromArr(o, u, n));
    o += u, r.push(s);
    u = n[o++], s = ab2str(getBytesFromArr(o, u, n));
    o += u, r.push(s);
    u = n[o++], s = ab2str(getBytesFromArr(o, u, n));
    o += u, r.push(s);
    u = n[o++], s = ab2str(getBytesFromArr(o, u, n));
    o += u, r.push(s);
    u = n[o++], s = ab2str(getBytesFromArr(o, u, n));
    o += u, r.push(s);
    u = n[o++], s = byteArray2Hex(getBytesFromArr(o, u, n));
    o += u, r.push(s);
    u = n[o++], s = byteArray2Hex(getBytesFromArr(o, u, n));
    o += u, r.push(s);
    u = n[o++], s = byteArray2Hex(getBytesFromArr(o, u, n));
    o += u, r.push(s), o < a ? (c = n[o++], A = byteArray2Hex(getBytesFromArr(o, c, n)), o += c, r.push(A), s = n[o++], c = byteArray2Hex(getBytesFromArr(o, s, n)), o += s, r.push(c)) : c = A = "";
    var l, c, y, A = "";
    o < a && (l = n[o++], A = ab2str(getBytesFromArr(o, l, n)), o += l, r.push(A)), o < a && ((c = new Array(1))[0] = n[o++], l = byteArrayToInt(c), (A = new Array(1))[0] = n[o++], c = byteArrayToInt(A), (A = new Array(1))[0] = n[o++], A = byteArrayToInt(A), l.toString(), c.toString(), A.toString()), o < a ? (a = n[o++], y = byteArray2Hex(getBytesFromArr(o, a, n)), o += a) : y = "", r.push(y);
    t.toString(), i.toString();
    mListener.onDoTradeResult(e, r)
}

function getNFCBatchData(t, r) {
    getICCTag(1, 0, "").then(function(e) {
        0 == getResult() && (e = byteArray2Hex(getUpPBytes(0, upPLength())), t(e))
    }, function(e) {
        r(e), console.log(e)
    })
}

function getNewICCTag(e, t, r, n, o) {
    getICCTag(e, t, r).then(function(e) {
        0 == getResult() && (e = byteArray2Hex(getUpPBytes(0, upPLength())), n(e))
    }, function(e) {
        o(e), console.log(e)
    })
}

function getICCTag(e, t, r) {
    new Array;
    var n = "00";
    n += byteArray2Hex(intToHex(e)), n += byteArray2Hex(intToHex(e)), n += byteArray2Hex(intToHex(t)), CommandDownlink2(22, 81, 5, hexStr2Bytes((n += r = isEmpty(r) ? "00" : r).trim()));
    n = getDownPBytes();
    return console.log("getICCTag = " + byteArray2Hex(n)), startSysSession(new Uint8Array(n).buffer, null, 5)
}

function analysisEmvResult(e) {
    console.log("analysisEmvResult");
    var t = new Array;
    if (null == e || 0 == e.length) return t;
    var r = 0;
    r++, encMode = e[r++];
    var n = new Array(1);
    n[0] = e[r++];
    var o = byteArray2Hex(n),
        a = new Array(1);
    a[0] = e[r++];
    var s = byteArray2Hex(a),
        i = new Array(1);
    i[0] = e[r++];
    var u = byteArrayToInt(i),
        l = new Array(u);
    arrCopyArr(e, 5, l, 0, u);
    var c = byteArray2Hex(l);
    r += u;
    var y = e[r++];
    arrCopyArr(e, r, l = new Array(y), 0, y);
    n = byteArray2Hex(l);
    r += y;
    a = new Array(2);
    a[0] = e[r], a[1] = e[r + 1];
    i = byteArrayToInt(a);
    arrCopyArr(e, r += 2, l = new Array(i), 0, i);
    u = byteArray2Hex(l), y = "";
    return (r += i) < e.length && (u = (a = 2 == (a = byteArray2Hex(l = intToHex(i))).length ? "00" + a : a) + u, a = e.length - r, arrCopyArr(e, r, l = new Array(a), 0, a), y = byteArray2Hex(l), 0), u += y, t.push(o), t.push(s), t.push(c), t.push(n), t.push(u), console.log("end analysisEmvResult" + encMode), t
}

function anlysDataCommon(e, t) {
    var r = new Array;
    if (0 == encMode || 16 == encMode || 38 == encMode || 48 == encMode) return r.push(t), r;
    var n = Str2Bytes(t),
        o = n.length,
        a = 0,
        s = new Array(2);
    s[0] = n[a], s[1] = n[a + 1];
    var i = byteArrayToInt(s);
    a += 2;
    var u = new Array(i);
    arrCopyArr(n, a, u, 0, i);
    var l = byteArray2Hex(u);
    if (o <= (a += i)) return r.push(l), r;
    a += 2;
    var c = n[a++],
        y = new Array(c);
    arrCopyArr(n, a, y, 0, c);
    var A = byteArray2Hex(y);
    a += c;
    var d = n[a++];
    arrCopyArr(n, a, y = new Array(d), 0, d);
    var g = byteArray2Hex(y);
    a += d;
    var C = n[a++];
    arrCopyArr(n, a, y = new Array(C), 0, C);
    var m = byteArray2Hex(y);
    a += C;
    var p = n[a++];
    arrCopyArr(n, a, y = new Array(p), 0, p);
    var D = ab2str(y);
    a += p;
    var R = n[a++];
    arrCopyArr(n, a, y = new Array(R), 0, R);
    var _ = ab2str(y);
    a += R;
    var E = n[a++];
    arrCopyArr(n, a, y = new Array(E), 0, E);
    var f = ab2str(y);
    a += E;
    t = n[a++];
    arrCopyArr(n, a, y = new Array(t), 0, t);
    s = ab2str(y);
    a += t;
    u = n[a++], i = ab2str(y);
    a += u;
    c = n[a++];
    arrCopyArr(n, a, y = new Array(c), 0, c);
    d = byteArray2Hex(y);
    a += c;
    C = n[a++];
    arrCopyArr(n, a, y = new Array(C), 0, C);
    p = byteArray2Hex(y);
    a += C;
    R = n[a++];
    arrCopyArr(n, a, y = new Array(R), 0, R);
    E = byteArray2Hex(y), t = "", u = "";
    (a += R) < o && (T = n[a++], arrCopyArr(n, a, y = new Array(T), 0, T), t = byteArray2Hex(y), a += T), a < o && (P = n[a++], arrCopyArr(n, a, y = new Array(P), 0, P), u = byteArray2Hex(y), a += P);
    c = "";
    a < o && (S = n[a++], arrCopyArr(n, a, y = new Array(S), 0, S), c = ab2str(y), a += S);
    var C = "",
        R = "",
        T = "";
    a < o && (C = n[a++] + "", R = n[a++] + "", T = n[a++] + "");
    var P = "";
    a < o && (I = n[a++], arrCopyArr(n, a, y = new Array(I), 0, I), P = byteArray2Hex(y), a += I);
    var I, S = "";
    return a < o && (y = n[a++], arrCopyArr(n, a, I = new Array(y), 0, y), S = byteArray2Hex(I), a += y), a < o && (o = n[a++], arrCopyArr(n, a, n = new Array(o), 0, o), byteArray2Hex(n), a += o), r.push(D), r.push(_), r.push(f), r.push(i), r.push(s), r.push(C), r.push(R), r.push(T), r.push(A), r.push(g), r.push(m), r.push(d), r.push(t), r.push(u), r.push(c), r.push(P), r.push(l), r.push(S), r.push(p), r.push(E), console.log("hashtable end+++++++"), r
}

function EMVStart(e) {
    console.log("EMVStart>> tradeAmount: " + mTradeAmount);
    var t = 19 + mTradeAmount.length + 1 + mCashbackAmount.length + 2 + 1,
        r = new Array(t),
        n = 0;
    e == EmvOption.START ? r[n++] = 0 : e == EmvOption.START_WITH_FORCE_ONLINE ? r[n++] = 1 : e == EmvOption.START_WITH_FORCE_PIN ? r[n++] = 2 : e == EmvOption.START_WITH_FORCE_ONLINE_FORCE_PIN && (r[n++] = 3), r[n++] = hexStr2Bytes(mTradeType)[0];
    var o = getFormatDateyyyyMMddHHmmss();
    arrCopyArr(t = mTradeAmount.length <= 8 ? hexStr2Bytes(o + "FF") : hexStr2Bytes(o + "06"), 0, r, n, t.length), n += t.length;
    e = "", e = 8 < mTradeAmount.length ? "FFFFFFFFFFFF" : "FFFFFFFF", o = 0;
    return isEmpty(mTradeAmount) || (o = mTradeAmount.length), arrCopyArr(t = hexStr2Bytes(e = e.substring(0, e.length - o) + mTradeAmount), 0, r, n, t.length), n += t.length, e = 8 < mTradeAmount.length ? "" : "0000", arrCopyArr(t = hexStr2Bytes(e += mCurrencyCode = 3 == mCurrencyCode.length ? "0" + mCurrencyCode : mCurrencyCode), 0, r, n, t.length), n += t.length, r[n++] = mTradeAmount.length + 1, arrCopyArr(getUTF8Bytes(mTradeAmount), 0, r, n, mTradeAmount.length), n += mTradeAmount.length, r[n++] = 0, !isEmpty(mCashbackAmount) && 0 < mCashbackAmount.length ? (r[n++] = byte(mCashbackAmount.length()), arrCopyArr(getUTF8Bytes(mCashbackAmount), 0, r, n, mCashbackAmount.length), n += mCashbackAmount.length) : (r[n++] = 1, r[n++] = 48), arrCopyArr(intToHex(20), 0, r, n++, 1), r
}
DoTrade.prototype.doTrade = function(e, t) {
    doTrade(e, t)
}, 
DoTrade.prototype.sendPin = function(e) {
    sendPin(e)
},
DoTrade.prototype.doCheckCard = function(e, t) {
    setDoTradeMode(DoTradeMode.CHECK_CARD_NO_IPNUT_PIN), doTrade(e, t)
}, 
DoTrade.prototype.selectEmvApp = function(e) {
    console.log("EMVSelectEMVApp"), EMVSelectEMVApp(e)
}, DoTrade.prototype.sendOnlineProcessResult = function(e) {
    console.log("go online"), EMVGoOnLine(e)
}, DoTrade.prototype.getNFCBatchData = function(e, t) {
    return getNFCBatchData(e, t)
}, DoTrade.prototype.getNewICCTag = function(e, t, r, n, o) {
    return getNewICCTag(e, t, r, n, o)
}, DoTrade.prototype.getICCTag = function(e, t, r) {
    return getICCTag(e, t, r)
};
var mOperationType, EMVManager = function(e) {
    writeObj(e), 
	mListener = e, 
	console.log("EMVManager init" + mListener), 
	writeObj(this)
};
var platformPos, mOperationType, EMVManager = function(e) {
    writeObj(e),
    mListener = e,
    console.log("EMVManager init" + mListener),
    writeObj(this)
}, platformFlag = 1;
EMVManager.prototype.updateEmvAPP = function(e, t) {
    updateEmvAPP(e, t)
}, 
EMVManager.prototype.updateEmvCAPK = function(e, t) {
    updateEmvCAPK(e, t)
}, 
EMVManager.prototype.updateEmvConfig = function(e, t) {
    updateEmvConfig(e, t)
},
EMVManager.prototype.updateEMVConfigByXml = function(e) {
    updateEMVConfigByXml(e)
}
;
var WRITE_MAX_LEN = 100;

function updateEmvAPP(e, t) {
    null != e && (isEmpty(t) && (t = ""), CommandDownlink2(23, 160, 15, hexStr2Bytes(updateEMV(mOperationType = e, t))), t = getDownPBytes(), console.log(byteArray2Hex(t)), startSession(new Uint8Array(t).buffer, onReturnUpdateEmvAPPResult, 5))
}

function updateEMV(e, t) {
    var r = "";
    switch (e) {
        case EMVDataOperation.CLEAR:
            r = "01";
            break;
        case EMVDataOperation.ADD:
            r = "02" + t;
            break;
        case EMVDataOperation.DELETE:
            r = "03" + t;
            break;
        case EMVDataOperation.ATTAINLIST:
            r = "04";
            break;
        case EMVDataOperation.UPDATE:
            r = "05" + t;
            break;
        case EMVDataOperation.GETEMV:
            r = "06" + t
    }
    return r
}

function onReturnUpdateEmvAPPResult(e) {
    if (console.log("onReturnUpdateEmvAPPResult----------" + e + "commid----------" + e.substring(6, 8)), 0 == getResult())
        if (mOperationType == EMVDataOperation.ATTAINLIST) {
            for (var t, r = byteArray2Hex(getUpPBytes(0, upPLength())), n = r.substring(0, 2), o = 0; o < r.length; o++) 1 == r.search("1000000000000000000000000000000000") && (t = parseInt(n, 16) - 1, r = r.replace("1000000000000000000000000000000000", ""), n = t < 17 ? "0" + toHex(t).substr(2, 2).toUpperCase() : toHex(t).substr(2, 2).toUpperCase());
            r = n + r.slice(2), console.log("onReturnUpdateEmvAPPResult" + r), mListener.onReturnGetEMVListResult(r)
        } else mOperationType == EMVDataOperation.GETEMV ? (e = byteArray2Hex(getUpPBytes(0, upPLength())), console.log("onReturnUpdateEmvAPPResult" + e), mListener.onReturnGetEMVListResult(e)) : (console.log("onReturnUpdateEmvAPPResult" + !0), mListener.onReturnUpdateEMVResult(!0));
    else console.log("onReturnUpdateEmvAPPResult" + !1), mListener.onReturnUpdateEMVResult(!1);
    mOperationType = null
}

function updateEmvCAPK(e, t) {
	null != e && e != EMVDataOperation.UPDATE && (isEmpty(t) && (t = ""), 
	CommandDownlink2(23, 161, 15, hexStr2Bytes(updateEMV(mOperationType = e, t))), 
	t = getDownPBytes(), 
	console.log(byteArray2Hex(t)), 
	startSession(new Uint8Array(t).buffer, onReturnUpdateEmvCAPKResult, 5))
}

function onReturnUpdateEmvCAPKResult(e) {
    if (console.log("onReturnUpdateEmvCAPKResult----------" + e + "commid----------" + e.substring(6, 8)), 0 == getResult())
        if (mOperationType == EMVDataOperation.ATTAINLIST) {
            for (var t, r = byteArray2Hex(getUpPBytes(0, upPLength())), n = r.substring(0, 2), o = 0; o < r.length; o++) 1 == r.search("1000000000000000000000000000000000") && (t = parseInt(n, 16) - 1, r = r.replace("1000000000000000000000000000000000", ""), n = t < 17 ? "0" + toHex(t).substr(2, 2).toUpperCase() : toHex(t).substr(2, 2).toUpperCase());
            r = n + r.slice(2), console.log("onReturnUpdateEmvCAPKResult" + r), mListener.onReturnGetEMVListResult(r)
        } else mOperationType == EMVDataOperation.GETEMV ? (e = byteArray2Hex(getUpPBytes(0, upPLength())), console.log("onReturnUpdateEmvCAPKResult" + e), mListener.onReturnGetEMVListResult(e)) : (console.log("onReturnUpdateEmvCAPKResult" + !0), mListener.onReturnUpdateEMVRIDResult(!0));
    else console.log("onReturnUpdateEmvCAPKResult" + !1), mListener.onReturnUpdateEMVRIDResult(!1);
    mOperationType = null
}
var mEmvAppCfg = "",mEmvCapkCfg = "";
function updateEmvConfig(e, t) {
    isEmpty(e) || e.length % 2 != 0 || isEmpty(t) || t.length % 2 != 0 || (mOffset = 0, mCustomParamString = "", mCustomParam = null, mEmvAppCfg = e, mEmvCapkCfg = t, doUpdateCustomParam(CustomParam.CUSTOM_PARAM_SEG_EMV_APP, 0, mEmvAppCfg))
}
var mCustomParam, mOffset = 0,mCustomParamString = "";
function doUpdateCustomParam(e, t, r) {
    mOffset = t, mCustomParam = e;
    r = (mCustomParamString = r).length / 2;
    startSendCustomParam(OperationLogo.WRITE, e, r).then(function(e) {
        if (0 == getResult()) return console.log("startSendCustomParam success! "), updateCustomParam()
    }, function(e) {
        console.log(e)
    })
}

function startSendCustomParam(e, t, r) {
    var n = "";
    e == OperationLogo.READ ? n += "00" : n += "01", t == CustomParam.CUSTOM_PARAM_SEG_EMV_APP ? n += "00" : t == CustomParam.CUSTOM_PARAM_SEG_EMV_CAPK ? n += "01" : t == CustomParam.CUSTOM_PARAM_SEG_CUSTOM1 ? n += "02" : t == CustomParam.CUSTOM_PARAM_SEG_CUSTOM2 && (n += "03");
    var o = r >> 16 & 255,
        e = r >> 8 & 255,
        t = 255 & r;
    n += byteArray2Hex(intToHex(r >> 24)), n += byteArray2Hex(intToHex(o)), n += byteArray2Hex(intToHex(e)), n += byteArray2Hex(intToHex(t)), CommandDownlink2(22, 144, 15, hexStr2Bytes(n += "10"));
    n = getDownPBytes();
    return console.log(byteArray2Hex(n)), startSysSession(new Uint8Array(n).buffer, null, 5)
}
var mUpdateCustomParamResolve = function() {
        console.log("BT success")
    },
    mUpdateCustomParamReject = function() {
        console.log("BT success")
    };

function updateCustomParam() {
    var e = hexStr2Bytes(mCustomParamString),
        t = mCustomParamString.length / 2,
        r = mOffset,
        n = r >> 16 & 255,
        o = r >> 8 & 255,
        a = 255 & r,
        s = byteArray2Hex(intToHex(r >> 24));
    s += byteArray2Hex(intToHex(n)), s += byteArray2Hex(intToHex(o)), s += byteArray2Hex(intToHex(a)), a = 255 & (r = WRITE_MAX_LEN < (r = t - mOffset) ? WRITE_MAX_LEN : r), s += byteArray2Hex(intToHex(r >> 8 & 255)), s += byteArray2Hex(intToHex(a));
    a = new Array(r);
    arrCopyArr(e, mOffset, a, 0, r), CommandDownlink2(22, 160, 15, hexStr2Bytes(s += byteArray2Hex(a)));
    s = getDownPBytes();
    console.log(byteArray2Hex(s)), mOffset += r, startSession(new Uint8Array(s).buffer, onUpdateCustomParam, 5)
}

function onUpdateCustomParam(e) {
    console.log("onQposIdResult----------" + e + "commid----------" + e.substring(6, 8)), 0 == getResult() ? (e = mCustomParamString.length / 2, mOffset < e ? (console.log("onUpdateCustomParam mOffset�� " + mOffset + "onUpdateCustomParam customParamSize��" + e), updateCustomParam()) : (console.log("onUpdateCustomParam success!______ " + mOffset), stopSendCustomParam(OperationLogo.WRITE, mCustomParam))) : mListener.onReturnCustomConfigResult(!1)
}

function stopSendCustomParam(e, t) {
    console.log("stopSendCustomParam" + t);
    var r = "";
    e == OperationLogo.READ ? r += "00" : r += "01", t == CustomParam.CUSTOM_PARAM_SEG_EMV_APP ? r += "00" : t == CustomParam.CUSTOM_PARAM_SEG_EMV_CAPK ? r += "01" : t == CustomParam.CUSTOM_PARAM_SEG_CUSTOM1 ? r += "02" : t == CustomParam.CUSTOM_PARAM_SEG_CUSTOM2 && (r += "03"), CommandDownlink2(22, 145, 15, hexStr2Bytes(r));
    r = getDownPBytes();
    console.log(byteArray2Hex(r)), t == CustomParam.CUSTOM_PARAM_SEG_EMV_APP ? startSysSession(new Uint8Array(r).buffer, null, 5).then(function(e) {
        doUpdateCustomParam(CustomParam.CUSTOM_PARAM_SEG_EMV_CAPK, 0, mEmvCapkCfg)
    }, function(e) {}) : (startSysSession(new Uint8Array(r).buffer, null, 5), mListener.onReturnCustomConfigResult(!0))
}
function stopSendCustomParam2(e, t) {
    console.log("stopSendCustomParam" + t);
    var n = "";
    e == OperationLogo.READ ? n += "00" : n += "01",
    t == CustomParam.CUSTOM_PARAM_SEG_EMV_APP ? n += "00" : t == CustomParam.CUSTOM_PARAM_SEG_EMV_CAPK ? n += "01" : t == CustomParam.CUSTOM_PARAM_SEG_CUSTOM1 ? n += "02" : t == CustomParam.CUSTOM_PARAM_SEG_CUSTOM2 && (n += "03"),
    CommandDownlink2(22, 145, 10, hexStr2Bytes(n));
    n = getDownPBytes();
    return console.log(byteArray2Hex(n)),
    startSysSession(new Uint8Array(n).buffer, null, 5)
}
var mParas, OperationLogo = {
        READ: 0,
        WRITE: 1
    },CustomParam = {};
    /*CustomParam = {
        CUSTOM_PARAM_SEG_CUSTOM1: 0,
        CUSTOM_PARAM_SEG_CUSTOM2: 1,
        CUSTOM_PARAM_SEG_EMV_APP: 2,
        CUSTOM_PARAM_SEG_EMV_CAPK: 3
    },
    GetMifareCardInfo = function(e) {
        writeObj(e), mListener = e, console.log("GetMifareCardInfo init" + mListener), writeObj(this)
    };*/
function updateEMVConfigByXml(e) {
    console.log("xmlcontent:" + e),
   // config = analyseEMVData(e),
   mParas=analyseEMVData(e),
    console.log("peizhi===\n"),
    null == mParas || mParas.length < 1 ? mListener.onReturnCustomConfigResult(!1, "xml file is empty") : judgePlatform().then(function(e) {
        if (0 == getResult()) {
            var t = 0
              , t = hex2Ascii(byteArray2Hex(getUpPBytes(1, getUpPByte(+t))));
            if (console.log("bootloader:" + t),
            platformPos = "4.0" <= t ? 1 : 0,
            console.log("platform pos:" + platformPos + " emv:" + platformFlag),
            platformPos != platformFlag)
                return console.error("platform not match"),
                void alert("platform not match");
            checkConfigContent(mParas, platformPos)
        }
    }, function(e) {
        console.log(e),
        alert(e)
    })
}
function analyseEMVData(e) {
    if (platformFlag = 1,
    console.log("����"),
    null != e) {
        new Array;
        var t, n = e.split("\n"), r = new Array, o = "", a = new Array;
        console.log("data size:" + n.length);
        for (var s = 0; s < n.length; s++)
            -1 != (t = n[s]).search("<") && (t.trim().startsWith("\x3c!--") || (-1 != t.search("app") && -1 != o.search("app") && 0 != a.length && (r.push(generateAppOrCapk(0, a)),
            a.length = 0),
            -1 != t.search("capk") && -1 != o.search("app") && 0 != a.length && (r.push(generateAppOrCapk(0, a)),
            a.length = 0),
            -1 != t.search("capk") && -1 != o.search("capk") && 0 != a.length && (r.push(generateAppOrCapk(1, a)),
            a.length = 0),
            -1 == t.search("app") && -1 == t.search("capk") && a.push(parseLine(t)),
            o = t));
        return 0 != a.length && r.push(generateAppOrCapk(1, a)),
        r
    }
    alert("data is null")
}
function generateAppOrCapk(e, t) {
    var n, r = "", e = 0 == e ? "APP" : "CAPK";
    for (n in t)
        r += t[n];
    e = new resolvableInterface(e,r);
    return console.log("AID:" + e.type + " value:" + e.data),
    e
}
function parseLine(e) {
    var t = e.indexOf(">")
      , n = e.indexOf("<")
      , r = e.indexOf("<", t)
      , o = e.substring(n + 1, t);
    if ("DF72" == o.toUpperCase() && (platformFlag = 0,
    console.log("platformflag==0")),
    "9F73" == o.toUpperCase())
        return "";
    var a, n = e.substring(t + 1, r), e = n.length / 2, t = e.toString(16);
    return e < 128 ? t.length % 2 == 1 && (t = "0" + t) : 128 <= e && e < 256 ? t = "81" + (t = t.length % 2 == 1 ? "0" + t : t) : 256 <= e && e < 65536 ? ((a = (e >> 8 & 255).toString(16)).length % 2 == 1 && (a = "0" + a),
    t = "82" + (t = t.length % 2 == 1 ? a + "0" + t : t)) : 65536 <= e && e < 16777216 && (r = (e >> 16 & 255).toString(16),
    a = (e >> 8 & 255).toString(16),
    r.length % 2 == 1 && (r = "0" + r),
    a.length % 2 == 1 && (a = "0" + a),
    t = "83" + (t = t.length % 2 == 1 ? r + a + "0" + t : t)),
    o + t + n
}
CustomParam.CUSTOM_PARAM_SEG_CUSTOM1 = 0,
CustomParam.CUSTOM_PARAM_SEG_CUSTOM2 = 1,
CustomParam.CUSTOM_PARAM_SEG_EMV_APP = 2,
CustomParam.CUSTOM_PARAM_SEG_EMV_CAPK = 3;
var resolvableInterface = function(e, t) {
    this.type = e,
    this.data = t
};
function judgePlatform() {
    CommandDownlink(17, 48, 5);
    var e = getDownPBytes();
    return console.log(byteArray2Hex(e)),
    startSysSession(new Uint8Array(e).buffer, null, 5)
}
var totalCount = 0
  , aidByteCount = 0
  , capkByteCount = 0
  , aidByteCountSize = 0
  , capkByteCountSize = 0;
function checkConfigContent(e, t) {
    for (var n in capkByteCountSize = aidByteCountSize = capkByteCount = aidByteCount = totalCount = 0,
    e)
        "APP" == e[n].type ? aidByteCount++ : "CAPK" == e[n].type && capkByteCount++;
    if (1 == t) {
        if (totalCount = (aidByteCountSize = 384 * aidByteCount) + (capkByteCountSize = 384 * capkByteCount),
        console.log("aidByteCount: " + aidByteCount + "capkByteCount" + capkByteCount),
        24576 < totalCount)
            return console.error("The xml file is too large"),
            void alert("The xml file is too large")
    } else if (totalCount = (aidByteCountSize = 670 * aidByteCount) + (capkByteCountSize = 288 * capkByteCount),
    console.log("aidByteCount: " + aidByteCount + "capkByteCount" + capkByteCount),
    32768 < totalCount)
        return console.error("The xml file is too large"),
        void alert("The xml file is too large");
    sendAppAndCapkSizeToPos(aidByteCountSize, CustomParam.CUSTOM_PARAM_SEG_EMV_APP)
}
function sendAppAndCapkSizeToPos(e, t) {
    startSendCustomParam(OperationLogo.WRITE, t, e).then(function(e) {
        0 == getResult() ? (console.log("startSendCustomParam success! "),
        stopSendCustomParam2(OperationLogo.WRITE, t).then(function(e) {
            0 == getResult() ? console.log("stopSendCustomParam success! ") : console.log("init size fail ! "),
            t == CustomParam.CUSTOM_PARAM_SEG_EMV_APP ? (console.log("start sendAppAndCapkSizeToPos capk"),
            sendAppAndCapkSizeToPos(capkByteCountSize, CustomParam.CUSTOM_PARAM_SEG_EMV_CAPK)) : t == CustomParam.CUSTOM_PARAM_SEG_EMV_CAPK && (console.log("start update emv"),
            emvRsult = !(capkCleFlag = appCleFlag = !1),
            msg = new String,
            updateEmvCOnfigRunnable(mParas, 0))
        }, function(e) {
            console.log(e),
            alert(e)
        })) : console.log("init size fail ! ")
    }, function(e) {
        console.log(e),
        alert(e)
    })
}
var appCleFlag = !1
  , capkCleFlag = !1
  , emvRsult = !0
  , msg = new String;
function updateEmvCOnfigRunnable(n, r) {
    r < n.length ? ("APP" == n[r].type && (appCleFlag ? updateEmvAPP2(EMVDataOperation.ADD, n[r].data).then(function(e) {
        if (0 != getResult()) {
            emvRsult = !1;
            var t = n[r].data.substring(4, 6)
              , t = n[r].data.substring(6, 5 + t);
            return msg = msg + "AID:" + t + "fail",
            mListener.onReturnCustomConfigResult(emvRsult, msg.toString()),
            !0
        }
        console.log("add emv success! "),
        updateEmvCOnfigRunnable(n, ++r)
    }, function(e) {
        console.log(e),
        alert(e)
    }) : updateEmvAPP2(EMVDataOperation.CLEAR, "").then(function(e) {
        0 == getResult() ? (appCleFlag = !0,
        console.log("clear emv success! "),
        updateEmvAPP2(EMVDataOperation.ADD, n[r].data).then(function(e) {
            if (0 != getResult()) {
                emvRsult = !1;
                var t = n[r].data.substring(4, 6)
                  , t = n[r].data.substring(6, 5 + t);
                return msg = msg + "AID:" + t + "fail",
                mListener.onReturnCustomConfigResult(emvRsult, msg.toString()),
                !0
            }
            console.log("add emv success! "),
            updateEmvCOnfigRunnable(n, ++r)
        }, function(e) {
            console.log(e),
            alert(e)
        })) : (emvRsult = !1,
        msg += "AID clean fail",
        mListener.onReturnCustomConfigResult(emvRsult, msg.toString()))
    }, function(e) {
        console.log(e),
        alert(e)
    })),
    "CAPK" == n[r].type && (capkCleFlag ? updateEmvCAPK2(EMVDataOperation.ADD, n[r].data).then(function(e) {
        if (0 != getResult()) {
            emvRsult = !1;
            var t = n[r].data.substring(4, 6)
              , t = n[r].data.substring(6, 5 + t);
            return msg = msg + "capk:" + t + "fail",
            mListener.onReturnCustomConfigResult(emvRsult, msg.toString()),
            !0
        }
        console.log("add capk success! "),
        updateEmvCOnfigRunnable(n, ++r)
    }, function(e) {
        console.log(e),
        alert(e)
    }) : updateEmvCAPK2(EMVDataOperation.CLEAR, "").then(function(e) {
        0 == getResult() ? (capkCleFlag = !0,
        console.log("clear capk success! "),
        updateEmvCAPK2(EMVDataOperation.ADD, n[r].data).then(function(e) {
            if (0 != getResult()) {
                emvRsult = !1;
                var t = n[r].data.substring(4, 6)
                  , t = n[r].data.substring(6, 5 + t);
                return msg = msg + "capk:" + t + "fail",
                mListener.onReturnCustomConfigResult(emvRsult, msg.toString()),
                !0
            }
            console.log("add capk success! "),
            updateEmvCOnfigRunnable(n, ++r)
        }, function(e) {
            console.log(e),
            alert(e)
        })) : (emvRsult = !1,
        msg += "CAPK clean fail",
        mListener.onReturnCustomConfigResult(emvRsult, msg.toString()))
    }, function(e) {
        console.log(e),
        alert(e)
    }))) : mListener.onReturnCustomConfigResult(emvRsult, msg.toString())
}
function updateEmvAPP2(e, t) {
    if (null != e && e != EMVDataOperation.UPDATE) {
        CommandDownlink2(23, 160, 15, hexStr2Bytes(updateEMV(mOperationType = e, t)));
        t = getDownPBytes();
        return console.log(byteArray2Hex(t)),
        startSysSession(new Uint8Array(t).buffer, null, 5)
    }
}
function updateEmvCAPK2(e, t) {
    if (null != e && e != EMVDataOperation.UPDATE) {
        CommandDownlink2(23, 161, 15, hexStr2Bytes(updateEMV(mOperationType = e, t)));
        t = getDownPBytes();
        return console.log(byteArray2Hex(t)),
        startSysSession(new Uint8Array(t).buffer, null, 5)
    }
}
var mParas, GetMifareCardInfo = function(e) {
    writeObj(e),
    mListener = e,
    console.log("GetMifareCardInfo init" + mListener),
    writeObj(this)
};

function pollOnMifareCard(e) {
    doMifareCard("01", e)
}

function finishMifareCard(e) {
    doMifareCard("0E", e)
}

function doMifareCard(e, t) {
    CommandDownlink2(23, 128, t, hexStr2Bytes(mParas = e));
    e = getDownPBytes();
    console.log(byteArray2Hex(e)), startSession(new Uint8Array(e).buffer, onSearchMifareCardResult, t)
}

function onSearchMifareCardResult(e) {
    console.log("onSearchMifareCardResult----------" + e + "commid----------" + e.substring(6, 8));
    var t, r, n, o, a, s, i, u = 1;
    0 == getResult() ? "01" == mParas ? (i = intToHexValue(getUpPBytes(u++, 1)), t = intToHexValue(getUpPBytes(u++, 1)), console.log("status " + i), r = byteArray2Hex(getUpPBytes(u, 2)), n = byteArray2Hex(getUpPBytes(u += 2, 1)), console.log("status+:" + i + "type:" + t + "atqa" + r + "sak:" + n), u += 1, o = getUpPBytes(u++, 1), a = byteArray2Hex(getUpPBytes(u, o)), u += o, s = "", 0 != (e = getUpPBytes(u++, 1)) && (s = byteArray2Hex(getUpPBytes(u, e))), console.log("cardlen:" + o + " cad:" + a), (s = {
        cardType: t,
        ATQA: r,
        SAK: n,
        cardUidLen: o + "",
        cardUid: a,
        cardAtsLen: e + "",
        cardAts: s
    }).status = "00" == i ? "poll card success!" : "poll card fail!", mListener.onSearchMifareCardResult(s)) : "0E" == mParas && ("00" == (i = intToHexValue(getUpPBytes(u++, 1))) ? mListener.onFinishMifareCardResult(!0) : mListener.onFinishMifareCardResult(!1)) : 64 == getResult() ? mListener.onSearchMifareCardCanceled() : ("01" == mParas && mListener.onSearchMifareCardResult(null), "0E" == mParas && mListener.onFinishMifareCardResult(!1))
}

function getQPosInfo() {
    CommandDownlink(17, 48, 5);
    var e = getDownPBytes();
    console.log(byteArray2Hex(e)), 
	startSession(new Uint8Array(e).buffer, onQposInfoResult, 5)
}

function onQposInfoResult(e) {
    console.log("onQposInfoResult----------" + e + "commid----------" + e.substring(6, 8)), 0 == getResult() ? anlycPosInfo() : console.log("onQposInfoResulterror")
}

function getQPosId() {
    CommandDownlink(16, 0, 5);
    var e = getDownPBytes();
    console.log(byteArray2Hex(e)), startSession(new Uint8Array(e).buffer, onQposIdResult, 5)
}

function onQposIdResult(e) {
    console.log("onQposIdResult----------" + e + "commid----------" + e.substring(6, 8)), 0 == getResult() ? anlycPosId() : console.log("onQposIdResulterror")
}

function setShutDownTime(e) {
    65535 < e || (CommandDownlink2(32, 208, 5, intToHex(e)), e = getDownPBytes(), console.log(byteArray2Hex(e)), startSession(new Uint8Array(e).buffer, onSetShutDownTime, 5))
}

function onSetShutDownTime(e) {
    console.log("onSetShutDownTime----------" + e + "commid----------" + e.substring(6, 8)), 0 == getResult() ? console.log("onSetShutDownTimetrue") : console.log("onSetShutDownTimeerror")
}

function getShutDownTime() {
    CommandDownlink(32, 224, 5);
    var e = getDownPBytes();
    console.log(byteArray2Hex(e)), startSession(new Uint8Array(e).buffer, onGetShutDownTime, 5)
}

function onGetShutDownTime(e) {
    console.log("onGetShutDownTime----------" + e + "commid----------" + e.substring(6, 8)), 0 == getResult() ? (e = byteArray2Hex(getUpPBytes(0, upPLength())), console.log("onGetShutDownTime" + e)) : console.log("onGetShutDownTimeerror")
}

function setSleepModeTime(e) {
    if (!(4294967295 < e)) {
        var t = intToHex(e),
            r = new Array(4);
        switch (t.length) {
            case 1:
                r[0] = 0, r[1] = 0, r[2] = 0, r[3] = t[0];
                break;
            case 2:
                r[0] = 0, r[1] = 0, r[2] = t[0], r[3] = t[1];
                break;
            case 3:
                r[0] = 0, r[1] = t[0], r[2] = t[1], r[3] = t[2];
                break;
            case 4:
                r = t
        }
        CommandDownlink2(34, 112, 5, r);
        e = getDownPBytes();
        console.log(byteArray2Hex(e)), startSession(new Uint8Array(e).buffer, onSetSleepModeTime, 5)
    }
}

function onSetSleepModeTime(e) {
    console.log("onSetSleepModeTime----------" + e + "commid----------" + e.substring(6, 8)), 0 == getResult() ? console.log("onSetSleepModeTimetrue") : console.log("onSetSleepModeTimeerror")
}

function getSleepModeTime() {
    CommandDownlink(34, 128, 10);
    var e = getDownPBytes();
    console.log(byteArray2Hex(e)), startSession(new Uint8Array(e).buffer, onGetSleepModeTime, 5)
}

function onGetSleepModeTime(e) {
    console.log("onGetSleepModeTime----------" + e + "commid----------" + e.substring(6, 8)), 0 == getResult() ? console.log("onGetSleepModeTimetrue") : console.log("onGetSleepModeTimeerror")
}
GetMifareCardInfo.prototype.pollOnMifareCard = function(e) {
    pollOnMifareCard(e)
}, GetMifareCardInfo.prototype.finishMifareCard = function(e) {
    finishMifareCard(e)
};
var do_trade_timeout, mName, keyManager = function(e) {
        writeObj(e), mListener = e, console.log("keyManager init" + mListener), writeObj(this)
    },
    isLcdClosed = !1,
    isLcdshowing = !1,
    lcdShowCustomDisplayStr = "",
    LcdModeAlign = {
        LCD_MODE_ALIGNLEFT: 1,
        LCD_MODE_ALIGNRIGHT: 2,
        LCD_MODE_ALIGNCENTER: 3
    },
    CustomInputOperateType = {
        isNumber: 1,
        Other: 2
    },
    CustomInputDisplayType = {
        PlainText: 1,
        Other: 2
    };

function doInputCustomStr(e, t, r, n, o, a) {
    mName = o;
    o = "0000";
    e == CustomInputOperateType.isNumber ? o += "00" : o += "01", e == CustomInputDisplayType.PlainText ? o += "01" : o += "00", o += intToHexValue(r), o += intToHexValue(n.length + 1), o += n, CommandDownlink2(16, 192, a, hexStr2Bytes(o += "00"));
    o = getDownPBytes();
    startSession(new Uint8Array(o).buffer, onReturnDoInputCustomStr, a)
}

function onReturnDoInputCustomStr(e) {
    var t;
    console.log("ddd = " + e), 0 == getResult() ? (t = hexStr2Bytes(e.substring(18, e.length - 2)), console.log(t), e = t[2], console.log(e), t = byteArray2Hex(getBytesFromArr(3, e, t)), console.log("upda == " + t), mListener.onReturnDoInputCustomStr(hex2Ascii(t), mName)) : mListener.onReturnDoInputCustomStr(null, mName)
}

function lcdShowCustomDisplay(e, t, r) {
    isLcdshowing && lcdShowCloseDisplay(), isLcdClosed = !(isLcdshowing = !0), do_trade_timeout = r;
    r = "00", r = e == LcdModeAlign.LCD_MODE_ALIGNLEFT ? "00" : e == LcdModeAlign.LCD_MODE_ALIGNRIGHT ? "20" : e == LcdModeAlign.LCD_MODE_ALIGNCENTER ? "40" : "00";
    null == e && (r = "80");
    t = hexStr2Bytes(lcdShowCustomDisplayStr = null != t && "" != t ? r + t + "00" : "");
    CommandDownlink2(65, 16, do_trade_timeout, t);
    t = getDownPBytes();
    startSession(new Uint8Array(t).buffer, onLcdShowCustomDisplay, do_trade_timeout)
}

function onLcdShowCustomDisplay(e) {
    if (0 == getResult()) {
        for (var t = 0; !isLcdClosed && t < 1e3 * do_trade_timeout;) sleep(1), t++;
        isLcdshowing = !1, isLcdClosed || mListener.onLcdShowCustomDisplay(!0)
    } else mListener.onLcdShowCustomDisplay(!1)
}

function lcdShowCloseDisplay() {
    var e;
    isLcdshowing && (CommandDownlink2(65, 16, 1, hexStr2Bytes(lcdShowCustomDisplayStr = "")), e = getDownPBytes(), isLcdshowing = !(isLcdClosed = !0), startSession(new Uint8Array(e).buffer, onLcdShowCustomDisplay, do_trade_timeout))
}

function setMasterKey(e, t, r, n) {
    10 < r || (CommandDownlink2(16, 226, n, hexStr2Bytes(e + t + "0" + r)), r = getDownPBytes(), console.log(byteArray2Hex(r)), startSession(new Uint8Array(r).buffer, onSetMasterKeyResult, 5))
}

function onSetMasterKeyResult(e) {
    console.log("onReturnSetMasterKeyResult----------" + e + "commid----------" + e.substring(6, 8)), 0 == getResult() ? mListener.onReturnSetMasterKeyResult(!0) : mListener.onReturnSetMasterKeyResult(!1)
}

function udpateWorkKey(e, t, r, n, o, a, s, i) {
    10 <= s || (CommandDownlink2(16, 240, i, hexStr2Bytes(setWorkKeyStr(e, t, r, n, o, a, s))), s = getDownPBytes(), console.log(byteArray2Hex(s)), startSession(new Uint8Array(s).buffer, onUpdateWorkKeyResult, 5))
}

function setWorkKeyStr(e, t, r, n, o, a, s) {
    var i = "",
        u = 0;
    isEmpty(e) || isEmpty(t) ? t = e = "" : (u = e.length + t.length, u /= 2), i += toHex(u).substr(2, 2) + e + t;
    t = 0;
    isEmpty(r) || isEmpty(n) ? n = r = "" : (t = r.length + n.length, t /= 2), i += toHex(t).substr(2, 2) + r + n;
    n = 0;
    return isEmpty(o) || isEmpty(a) ? a = o = "" : (n = o.length + a.length, n /= 2), i += toHex(n).substr(2, 2) + o + a, console.log("work keys: " + i), i + "0" + s
}

function onUpdateWorkKeyResult(e) {
    console.log("onRequestUpdateWorkKeyResult----------" + e + "commid----------" + e.substring(6, 8)), 0 == getResult() ? mListener.onRequestUpdateWorkKeyResult(!0) : mListener.onRequestUpdateWorkKeyResult(!1)
}

function doUpdateIPEKOperation(e, t, r, n, o, a, s, i, u, l) {
    10 <= e || (CommandDownlink2(16, 242, 5, hexStr2Bytes("00000" + e + t + r + n + o + a + s + i + u + l)), l = getDownPBytes(), console.log(byteArray2Hex(l)), startSession(new Uint8Array(l).buffer, onUpdateIPEKResult, 5))
}

function onUpdateIPEKResult(e) {
    0 == getResult() ? mListener.onReturnUpdateIPEKResult(!0) : mListener.onReturnUpdateIPEKResult(!1)
}
keyManager.prototype.setMasterKey = function(e, t, r, n) {
    setMasterKey(e, t, r, n)
}, keyManager.prototype.udpateWorkKey = function(e, t, r, n, o, a, s, i) {
    udpateWorkKey(e, t, r, n, o, a, s, i)
}, keyManager.prototype.udpateWorkKey = function(e, t, r, n, o, a, s, i) {
    udpateWorkKey(e, t, r, n, o, a, s, i)
}, keyManager.prototype.doInputCustomStr = function(e, t, r, n, o, a) {
    doInputCustomStr(e, t, r, n, o, a)
}, keyManager.prototype.lcdShowCustomDisplay = function(e, t, r) {
    lcdShowCustomDisplay(e, t, r)
}, keyManager.prototype.lcdShowCloseDisplay = function() {
    lcdShowCloseDisplay()
}, keyManager.prototype.doUpdateIPEKOperation = function(e, t, r, n, o, a, s, i, u, l) {
    doUpdateIPEKOperation(e, t, r, n, o, a, s, i, u, l)
};
var NfcApdu = function(e) {
    writeObj(e), 
	mListener = e,
	console.log("NfcApdu init" + mListener), 
	writeObj(this)
};

function onApduResult(e) {
    var t, r, n;
    console.log("onApduResult----------" + e + "commid----------" + e.substring(6, 8)), 0 == getResult() && (n = 0) != (t = getUpPByte(n++)) ? (r = getUpPByte(n++), e = getUpPByte(n++), 17 == t && (r += 255, e += 255), n = byteArray2Hex(getUpPBytes(3, e)), console.log("re" + t + "  apdulen" + r + "  apdumaskLen" + e + "  apdu" + n), mListener.onReturnApduResult(!0, n, r)) : mListener.onReturnApduResult(!1, null, 0)
}

function onReturnPowerOffNFCResult(e) {
    console.log("onReturnPowerOffNFCResult----------" + e + "commid----------" + e.substring(6, 8)), 0 == getResult() ? mListener.onReturnPowerOffNFCResult(!0) : mListener.onReturnPowerOffNFCResult(!1)
}

function onPowerOnNFCResult(e) {
    var t, r, n, o;
    console.log("onPowerOnNFCResult----------" + e + "commid----------" + e.substring(6, 8)), 0 == getResult() && (o = 0) != (t = getUpPByte(o++)) ? (r = byteArray2Hex(getUpPBytes(1, 10)), o += 10, n = getUpPByte(o++), o = byteArray2Hex(getUpPBytes(13, e = getUpPByte(o++))), console.log("re" + t + "  ksn" + r + "  atrLen" + n + "  atrMask" + e + "  atr" + o), mListener.onReturnPowerOnNFCResult(!0, r, o, n)) : mListener.onReturnPowerOnNFCResult(!1, null, null, 0)
}
NfcApdu.prototype.sendApduByNFC = function(e, t) {
    e = hexStr2Bytes(e);
    console.log("para==" + e), CommandDownlink2(23, 16, t, e);
    e = getDownPBytes();
    console.log(byteArray2Hex(e)), startSession(new Uint8Array(e).buffer, onApduResult, 5)
}, NfcApdu.prototype.powerOffNFC = function(e) {
    CommandDownlink(23, 32, e);
    e = getDownPBytes();
    console.log(byteArray2Hex(e)), startSession(new Uint8Array(e).buffer, onReturnPowerOffNFCResult, 5)
}, NfcApdu.prototype.powerOnNFC = function(e) {
    CommandDownlink2(23, 0, e, hexStr2Bytes("00"));
    e = getDownPBytes();
    console.log(byteArray2Hex(e)), startSession(new Uint8Array(e).buffer, onPowerOnNFCResult, 5)
};
var TCKEY = [0, 0, 0, 0, 0, 0, 0, 0],
    dataLen = 0,
    HEADER_LEN = 4,
    CRC_LEN = 1,
    OVERHEAD_LEN = 5,
    DATA_FIELD_HEADER_LEN = 5,
    bytes = new Array;

function packet(e) {
	 e = OVERHEAD_LEN + DATA_FIELD_HEADER_LEN + (dataLen = e), (bytes = new Array(e))[1] = 0;
    e = intToHex(e - 4);
    1 == e.length ? bytes[2] = e[0] : (bytes[1] = e[0], bytes[2] = e[1]), bytes[0] = 77
}

function packet2(e) {
    arrCopyArr(e, 0, bytes = new Array(e.length), 0, e.length), dataLen = e.length - (OVERHEAD_LEN + DATA_FIELD_HEADER_LEN), console.log("===packet2===" + bytes)
}

function setPByte(e, t) {
    bytes[HEADER_LEN + e] = t
}

function getPByte(e) {
    return e + HEADER_LEN < bytes.length ? bytes[e + HEADER_LEN] : 0
}

function getPBytes() {
    return bytes
}

function setCmdID(e) {
    bytes[3] = e
}

function getCmdID() {
    return bytes[3]
}

function setCmdCode(e) {
    setPByte(0, e)
}

function setCmdSubCode(e) {
    setPByte(1, e)
}

function getCmdCode() {
    return getPByte(0)
}

function getCmdSubCode() {
    return getPByte(1)
}

function getResultCode() {
    return getPByte(2)
}

function setDataField(e) {
    var t = e.length;
    setPByte(3, 0);
    t = intToHex(t);
    1 == t.length ? setPByte(4, t[0]) : (setPByte(3, t[0]), setPByte(4, t[1])), arrCopyArr(e, 0, bytes, HEADER_LEN + 5, e.length)
}

function getDataFieldByte(e) {
    return e + HEADER_LEN + 5 < bytes.length ? bytes[e + HEADER_LEN + 5] : 0
}

function setTimeOut(e) {
    setPByte(2, e)
}

function setPCRC(e) {
    bytes[bytes.length - 1] = e
}

function buildCRC() {
    setPCRC(calPCRC(bytes))
}

function getPCRC() {
    return bytes[bytes.length - 1]
}

function calPCRC(e) {
    for (var t = e[0], r = 1; r < e.length - 1; r++) t ^= e[r];
    return console.log("===crc===" + t), t
}

function validPCRC() {
    return calPCRC(bytes) == getPCRC()
}

function isValid() {
    return 77 == bytes[0] && validPCRC()
}

function isPEmpty() {
    return 0 == dataLen
}

function len() {
    return dataLen
}

function setDesKey() {
    if (8 == KEY.length) arrCopyArr(KEY, 0, TCKEY, 0, 8);
    else if (16 == KEY.length) {
        for (var e = new Array(8), t = 0; t < 8; t++) e[t] = byte(KEY[t] ^ KEY[t + 8]);
        arrCopyArr(e, 0, TCKEY, 0, 8), console.log("POS_SDK", "TCK: ")
    } else console.log("TCK length error ")
}

function calMac(e, t) {
    var r = t + 1 + (8 - (t + 1) % 8),
        n = new Array(r);
    arrCopyArr(e, 0, n, 0, t);
    for (var o = t; o < r; o++) n[o] = 0;
    for (var a = [0, 0, 0, 0, 0, 0, 0, 0], o = 0; o < r; o++) a[o % 8] = a[o % 8] ^ n[o];
    console.log("mac payload:" + byteArray2Hex(a));
    new Array;
    return console.log("TCKEY: " + byteArray2Hex(TCKEY)), a
}
var pinOperation = function(e) {
    writeObj(e), mListener = e, console.log("pinOperation init" + mListener), writeObj(this)
};

function setInputCsutomStr(e, t, r, n, o) {
    doGetPin(e, t, r, n, "", "", 0, o)
}

function getPin(e, t, r, n, o, a, s) {
    doGetPin(e, t, r, n, o, a, 0, s)
}

function doGetPin(e, t, r, n, o, a, s, i) {
    var u = "0000";
    u += byteArray2Hex(intToHex(e)) + byteArray2Hex(intToHex(t)) + byteArray2Hex(intToHex(r));
    isEmpty(n) ? (n = "", u += byteArray2Hex(intToHex(0)) + n) : u += byteArray2Hex(intToHex(getUTF8Bytes(n).length + 1)) + byteArray2Hex(toGbkBytes(n)) + "00";
    isEmpty(n) ? (o = "", u += byteArray2Hex(intToHex(0)) + o) : u += byteArray2Hex(intToHex(o.length)) + byteArray2Hex(getUTF8Bytes(o));
    isEmpty(n) ? (a = "", u += byteArray2Hex(intToHex(0)) + a) : u += byteArray2Hex(intToHex(a.length / 2)) + a, CommandDownlink2(16, 113, i, hexStr2Bytes(u += byteArray2Hex(intToHex(s))));
    u = getDownPBytes();
    console.log(byteArray2Hex(u)), startSession(new Uint8Array(u).buffer, onReturnGetPinResult, 5)
}

function onReturnGetPinResult(e) {
    var t, r, n, o;
    console.log("onReturnGetPinResult----------" + e + "commid----------" + e.substring(6, 8)), 0 == getResult() ? (t = new Array, upPLength(), console.log(" length()--" + upPLength()), byteArray2Hex(getUpPBytes(r = 2, 2)), r += 2, n = byteArray2Hex(getUpPBytes(5, o = getUpPByte(r++))), r += o, e = getUpPByte(r++), o = byteArray2Hex(getUpPBytes(r, e)), r += e, t.push(n), t.push(o), mListener.onReturnGetPinResult(t), console.log("onReturnGetPinResult" + t)) : (mListener.onReturnGetPinResult(null), console.log("onReturnGetPinResulterror"))
}

function pinKey_TDES(e, t, r, n) {
    var o;
    isEmpty(t) ? console.log("onError(Error.INPUT_INVALID_FORMAT") : (o = "0000", o += byteArray2Hex(intToHex(e)) + t, CommandDownlink2(17, 32, r, hexStr2Bytes(o += byteArray2Hex(intToHex(n)))), o = getDownPBytes(), console.log(byteArray2Hex(o)), startSession(new Uint8Array(o).buffer, onPinKey_TDES_Result, 5))
}

function onPinKey_TDES_Result(e) {
    console.log("onPinKey_TDES_Result----------" + e + "commid----------" + e.substring(6, 8)), 0 == getResult() ? (byteArray2Hex(getAllBytes()), console.log("esc.onPinKey_TDES_Result(result);result")) : console.log("onPinKey_TDES_Resulterror")
}
pinOperation.prototype.setInputCsutomStr = function(e, t, r, n) {
    setInputCsutomStr("0", e, t, r, n)
};
var READ_BUF_MAX_SIZE = 10240,
    dataBuffer = new ArrayBuffer(READ_BUF_MAX_SIZE),
    dataView = new DataView(dataBuffer),
    read_offset = 0;

function clearReadbuffer() {
    for (var e = 0; e < read_offset; e++) dataView.setUint8(e, 0);
    read_offset = 0
}

function appendData(e) {
    for (var t = e, r = 0; r < t.byteLength; r++) dataView.setUint8(read_offset, t.getUint8(r)), read_offset++
}

function readBufferData() {
    var e = new ArrayBuffer(read_offset),
        t = new DataView(e);
    return console.log("read_offset:" + read_offset), copyArr(dataBuffer, 0, e, 0, read_offset), t
}

function isCompleteInstruction() {
    var e, t, r = !1;
    return 77 == dataView.getUint8(0) && (e = dataView.getUint8(1), t = dataView.getUint8(2), (e - e % 16) / 16 * Math.pow(16, 3) + e % 16 * Math.pow(16, 2) + t + 4 <= read_offset && (r = !0)), r
}
var QPOSAnalyResult = function(e) {
    writeObj(e), mListener = e, console.log("QPOSAnalyResult init" + mListener), writeObj(this)
};

function onAnalyQposInfoResult(e) {
    console.log("onQposInfoResult----------" + e + "commid----------" + e.substring(6, 8)), 0 == getResult() ? (e = anlycPosInfo(), writeObj(this), mListener.onQposInfoResult(e)) : console.log("onQposInfoResulterror")
}

function onAnalyQposIdResult(e) {
    console.log("onQposIdResult----------" + e + "commid----------" + e.substring(6, 8)), 0 == getResult() ? (e = anlycPosId(), mListener.onQposIdResult(e)) : console.log("onQposIdResulterror")
}
QPOSAnalyResult.prototype.getQPosId = function() {
    CommandDownlink(16, 0, 5);
    var e = getDownPBytes();
    startSession(new Uint8Array(e).buffer, onAnalyQposIdResult, 5)
}, QPOSAnalyResult.prototype.getQPosInfo = function() {
    CommandDownlink(17, 48, 5);
    var e = getDownPBytes();
    startSession(new Uint8Array(e).buffer, onAnalyQposInfoResult, 5)
}, QPOSAnalyResult.prototype.checkCmdId = function() {
    return checkCmdId()
};
var Display = {
    TRY_ANOTHER_INTERFACE: "TRY_ANOTHER_INTERFACE",
    PLEASE_WAIT: "PLEASE_WAIT",
    REMOVE_CARD: "REMOVE_CARD",
    CLEAR_DISPLAY_MSG: "CLEAR_DISPLAY_MSG",
    PROCESSING: "PROCESSING",
    PIN_OK: "PIN_OK",
    TRANSACTION_TERMINATED: "TRANSACTION_TERMINATED",
    INPUT_PIN_ING: "INPUT_PIN_ING",
    MAG_TO_ICC_TRADE: "MAG_TO_ICC_TRADE",
    INPUT_OFFLINE_PIN_ONLY: "INPUT_OFFLINE_PIN_ONLY",
    CARD_REMOVED: "CARD_REMOVED",
    INPUT_LAST_OFFLINE_PIN: "INPUT_LAST_OFFLINE_PIN",
    MSR_DATA_READY: "MSR_DATA_READY"
};

function checkCmdId() {
    var e = !1,
        t = commandID();
    return console.log("check: " + t), t == CmdId.CMDID_COMPLETED || t == CmdId.CMDID_COMPLETED_ENCRY ? e = !0 : t == CmdId.CMDID_INPUT_PIN_ING ? (e = !0, !(0 < upPLength()) || 0 == getUpPByte(0) ? mListener.onRequestDisplay(Display.INPUT_PIN_ING) : mListener.onRequestDisplay(Display.INPUT_OFFLINE_PIN_ONLY)) : t == CmdId.CMDID_MAG_TO_ICC_TRADE ? (e = !0, mListener.onRequestDisplay(Display.MAG_TO_ICC_TRADE)) : t == CmdId.CMDID_SEND_IC_CARDNO || t == CmdId.CMDID_EMV_KERNEL_PC || t == CmdId.CMDID_CHECK_HAVE_CARD ? e = !0 : t == CmdId.CMDID_MSR_DATA_READY ? (e = !0, mListener.onRequestDisplay(Display.MSR_DATA_READY)) : (e = !1, console.log("QPOSService checkCmdId disConnect() 22"), t == CmdId.CMDID_DESTRUCT ? mListener.onRequestTransactionResult(TransactionResult.DEVICE_ERROR) : t == CmdId.CMDID_TIMEOUT ? mListener.onError(POSError.CMD_TIMEOUT) : t == CmdId.CMDID_CARD_REMOVED ? mListener.onRequestDisplay(Display.CARD_REMOVED) : t == CmdId.CMDID_USERCANCEL ? (mListener.onRequestDisplay(Display.TRANSACTION_TERMINATED), mListener.onRequestTransactionResult(TransactionResult.CANCEL)) : t == CmdId.CMDID_MACERROR ? mListener.onError(POSError.MAC_ERROR) : t == CmdId.CMDID_EMV_TRANS_DENIAL ? (mListener.onEmvICCExceptionData(byteArray2Hex(getUpPBytes(0, upPLength()))), mListener.onRequestTransactionResult(TransactionResult.DECLINED)) : t == CmdId.CMDID_EMV_TRANS_TERMINATE ? (mListener.onRequestDisplay(Display.TRANSACTION_TERMINATED), mListener.onEmvICCExceptionData(byteArray2Hex(getUpPBytes(0, upPLength()))), mListener.onRequestTransactionResult(TransactionResult.TERMINATED)) : t == CmdId.CMDID_EMV_TRANS_TERMINATE_NFC ? mListener.onRequestTransactionResult(TransactionResult.NFC_TERMINATED) : t == CmdId.CMDID_NOT_AVAILABLE || t == CmdId.CMDID_OLD ? mListener.onError(POSError.CMD_NOT_AVAILABLE) : t == CmdId.CMDID_RESET ? (e = !0, mListener.onError(POSError.DEVICE_RESET)) : t == CmdId.CMDID_ICC_POWER_ON_ERROR ? (console.log("POS_SDK", "CmdId.CMDID_ICC_POWER_ON_ERROR," + CmdId.CMDID_ICC_POWER_ON_ERROR), mListener.onDoTradeResult(DoTradeResult.NOT_ICC, null)) : t == CmdId.CMDID_WR_DATA_ERROR ? mListener.onError(POSError.WR_DATA_ERROR) : t == CmdId.CMDID_EMV_APP_CFG_ERROR ? mListener.onError(POSError.EMV_APP_CFG_ERROR) : t == CmdId.CMDID_EMV_CAPK_CFG_ERROR ? mListener.onError(POSError.EMV_CAPK_CFG_ERROR) : t == CmdId.CMDID_NO_UPDATE_WORK_KEY ? mListener.onDoTradeResult(DoTradeResult.NO_UPDATE_WORK_KEY, null) : t == CmdId.CMDID_EMV_TRANS_CARD_BLOCKED_OR_EMV_APPS ? mListener.onRequestTransactionResult(TransactionResult.CARD_BLOCKED_OR_NO_EMV_APPS) : t == CmdId.CMDID_EMV_TRANS_SELECT_APP_FAILED ? mListener.onRequestTransactionResult(TransactionResult.SELECT_APP_FAIL) : t == CmdId.CMDID_EMV_TRANS_CAPK_FAILED ? mListener.onRequestTransactionResult(TransactionResult.CAPK_FAIL) : t == CmdId.CMDID_EMV_TRANS_FALLBACK ? mListener.onRequestTransactionResult(TransactionResult.FALLBACK) : (t == CmdId.CMDID_ICC_INIT_ERROR ? console.log("POS_SDK", "CmdId.CMDID_ICC_INIT_ERROR," + CmdId.CMDID_ICC_INIT_ERROR) : t == CmdId.CMDID_ICC_TRADE_ERROR ? console.log("POS_SDK", "CmdId.CMDID_ICC_TRADE_ERROR," + CmdId.CMDID_ICC_TRADE_ERROR) : console.log("POS_SDK", "uc command id = " + t), mListener.onError(POSError.UNKNOWN))), console.log("checkCmdId rf = " + e), e
}
var POSError = {
        TIMEOUT: "TIMEOUT",
        MAC_ERROR: "MAC_ERROR",
        CMD_TIMEOUT: "CMD_TIMEOUT",
        CMD_NOT_AVAILABLE: "CMD_NOT_AVAILABLE",
        DEVICE_RESET: "DEVICE_RESET",
        UNKNOWN: "UNKNOWN",
        DEVICE_BUSY: "DEVICE_BUSY",
        INPUT_OUT_OF_RANGE: "INPUT_OUT_OF_RANGE",
        INPUT_INVALID_FORMAT: "INPUT_INVALID_FORMAT",
        INPUT_ZERO_VALUES: "INPUT_ZERO_VALUES",
        INPUT_INVALID: "INPUT_INVALID",
        CASHBACK_NOT_SUPPORTED: "CASHBACK_NOT_SUPPORTED",
        CRC_ERROR: "CRC_ERROR",
        COMM_ERROR: "COMM_ERROR",
        WR_DATA_ERROR: "WR_DATA_ERROR",
        EMV_APP_CFG_ERROR: "EMV_APP_CFG_ERROR",
        EMV_CAPK_CFG_ERROR: "EMV_CAPK_CFG_ERROR",
        APDU_ERROR: "APDU_ERROR",
        APP_SELECT_TIMEOUT: "APP_SELECT_TIMEOUT",
        ICC_ONLINE_TIMEOUT: "ICC_ONLINE_TIMEOUT",
        AMOUNT_OUT_OF_LIMIT: "AMOUNT_OUT_OF_LIMIT"
    },
    DoTradeResult = {
        NONE: "NONE",
        MCR: "MCR",
        ICC: "ICC",
        NOT_ICC: "NOT_ICC",
        BAD_SWIPE: "BAD_SWIPE",
        NO_RESPONSE: "NO_RESPONSE",
        NO_UPDATE_WORK_KEY: "NO_UPDATE_WORK_KEY",
        NFC_ONLINE: "NFC_ONLINE",
        NFC_OFFLINE: "NFC_OFFLINE",
        NFC_DECLINED: "NFC_DECLINED",
        TRY_ANOTHER_INTERFACE: "TRY_ANOTHER_INTERFACE"
    },
    QPOSService = function(e) {
        this.mOnResult, console.log("QPOSService init"), this.mDoTrade, this.mWebBluetooth, this.mEMVManager, this.writeChar, this.mKeyManager, this.mUpdateFirmware, this.mGtMifareCardInfo, this.mpinOperation, this.mNfcApdu
    };
QPOSService.prototype.initListener = function(e) {
    this.mOnResult = new QPOSAnalyResult(e), 
	this.mDoTrade = new DoTrade(e), 
	this.mWebBluetooth = new webBluetooth(this.mOnResult, this.writeChar),
	this.mEMVManager = new EMVManager(e), 
	this.mKeyManager = new keyManager(e),
	this.mUpdateFirmware = new UpdateFirmwareManager(e), 
	this.mGtMifareCardInfo = new GetMifareCardInfo(e), 
	this.mpinOperation = new pinOperation(e), 
	this.mNfcApdu = new NfcApdu(e)
}, 
QPOSService.prototype.getQPosInfo = function() {
    this.mOnResult.getQPosInfo()
}, 
QPOSService.prototype.getQPosId = function() {
    this.mOnResult.getQPosId()
}, 
QPOSService.prototype.doTrade = function(e, t) {
    console.log("doTrade"), this.mDoTrade.doTrade(e, t)
}, 
QPOSService.prototype.sendPin = function(e) {
    console.log("sendPin"), this.mDoTrade.sendPin(e)
}, 
QPOSService.prototype.doCheckCard = function(e, t) {
    this.mDoTrade.doCheckCard(e, t)
}, 
QPOSService.prototype.selectEmvApp = function(e) {
    this.mDoTrade.selectEmvApp(e)
}, 
QPOSService.prototype.sendOnlineProcessResult = function(e) {
    this.mDoTrade.sendOnlineProcessResult(e)
}, 
QPOSService.prototype.getNFCBatchData = function(e, t) {
    return this.mDoTrade.getNFCBatchData(e, t)
}, 
QPOSService.prototype.resetPosStatus = function() {
    this.mWebBluetooth.startSession(packageInstructionReset(), null, 5)
}, 
QPOSService.prototype.updateEmvAPP = function(e, t) {
    this.mEMVManager.updateEmvAPP(e, t)
},
 QPOSService.prototype.updateEmvCAPK = function(e, t) {
    this.mEMVManager.updateEmvCAPK(e, t)
}, 
QPOSService.prototype.updateEmvConfig = function(e, t) {
    this.mEMVManager.updateEmvConfig(e, t)
}, 
QPOSService.prototype.getICCTag = function(e, t, r) {
    return this.mDoTrade.getICCTag(e, t, r)
}, 
QPOSService.prototype.updateEMVConfigByXml = function(e) {
    console.log("xml:" + e),
    this.mEMVManager.updateEMVConfigByXml(e)
},
QPOSService.prototype.getNewICCTag = function(e, t, r, n, o) {
    return this.mDoTrade.getNewICCTag(e, t, r, n, o)
}, 
QPOSService.prototype.setMasterKey = function(e, t, r, n) {
    this.mKeyManager.setMasterKey(e, t, r, n)
}, 
QPOSService.prototype.udpateWorkKey = function(e, t, r, n, o, a, s, i) {
    this.mKeyManager.udpateWorkKey(e, t, r, n, o, a, s, i)
}, 
QPOSService.prototype.doUpdateIPEKOperation = function(e, t, r, n, o, a, s, i, u, l) {
    this.mKeyManager.doUpdateIPEKOperation(e, t, r, n, o, a, s, i, u, l)
}, 
QPOSService.prototype.lcdShowCustomDisplay = function(e, t, r) {
    this.mKeyManager.lcdShowCustomDisplay(e, t, r)
}, 
QPOSService.prototype.lcdShowCloseDisplay = function() {
    this.mKeyManager.lcdShowCloseDisplay()
}, 
QPOSService.prototype.doInputCustomStr = function(e, t, r, n, o, a) {
    this.mKeyManager.doInputCustomStr(e, t, r, n, o, a)
}, 
QPOSService.prototype.pollOnMifareCard = function(e) {
    this.mGtMifareCardInfo.pollOnMifareCard(e)
}, 
QPOSService.prototype.finishMifareCard = function(e) {
    this.mGtMifareCardInfo.finishMifareCard(e)
}, 
QPOSService.prototype.setInputCsutomStr = function(e, t, r, n) {
    this.mpinOperation.setInputCsutomStr(e, t, r, n)
}, 
QPOSService.prototype.updatePosFirmware = function(e) {
    this.mUpdateFirmware.updatePosFirmware(e)
}, 
QPOSService.prototype.sendApduByNFC = function(e, t) {
    this.mNfcApdu.sendApduByNFC(e, t)
}, 
QPOSService.prototype.powerOnNFC = function(e) {
    this.mNfcApdu.powerOnNFC(e)
}, 
QPOSService.prototype.powerOffNFC = function(e) {
    this.mNfcApdu.powerOffNFC(e)
};
var connectionId, SerialManager = function(e) {
	writeObj(e), 
	mOnResult = e, 
	console.log("SerialManager init" + mOnResult),
	writeObj(mOnResult)
},
onConnect = function(e) {
    void 0 === e || (chrome.serial.onReceive.addListener(onReceiveCallback), connectionId = e.connectionId)
},
onReceiveCallback = function(e) {
	console.log("oncharacteristicchanged" + getDate()), 
	setNotifyReceiveData(!0);
	e = e.data, 
	e = new DataView(e);
	printDataView(e), 
	appendData(e)
};

function connectToDevice(e) {
    chrome.serial.connect(e, {
        bitrate: 9600
    }, onConnect)
}

function disconnectToDevice(e) {
    chrome.serial.disconnect(connectionId, e)
}
var notifyReceiveData = !1;

function setNotifyReceiveData(e) {
    notifyReceiveData = e
}

function getNotifyReceiveData() {
    return notifyReceiveData
}
var mUpdateFlag = !1;

function setUpdate(e) {
    mUpdateFlag = e
}

function packageInstructionQue() {
    CommandDownlink4(CmdId.CMDID_QUERY, 0, 0, 90);
    var e = getDownPBytes();
    return console.log(byteArray2Hex(e)), 
	new Uint8Array(e).buffer
}

function packageInstructionPart() {
    CommandDownlink4(CmdId.CMDID_PART_DATA, 0, 0, 90);
    var e = getDownPBytes();
    return console.log(byteArray2Hex(e)), new Uint8Array(e).buffer
}

function packageInstructionReset() {
    CommandDownlink4(CmdId.CMDID_RESET, 0, 0, 15);
    var e = getDownPBytes();
    return console.log(byteArray2Hex(e)), new Uint8Array(e).buffer
}

function basicWriteBle(e) {
    chrome.serial.send(connectionId, e, console.log.bind(console))
}

function writePromise(e) {
    setNotifyReceiveData(!1);
    console.log("Data write：" + byteArray2Hex(e)), 
	clearReadbuffer(), 
	basicWriteBle(e),
	console.log("*******************test write result****************")
}
SerialManager.prototype.startSession = function(e, t, r) {
    startSession(e, t, r)
};
var bufData = "",
    bufLen = 0,
    result = null;

function startSession(e, t, r) {
    r *= 100, result = null, writePromise(e), console.log("writePromise" + getDate()), readBleDataBuffer(t, r, function e() {
        readBleDataBuffer(t, --r, e)
    })
}

function readBleDataBuffer(r, n, o) {
    setTimeout(function() {
        if (n <= 0) return initPartBuffer(), void console.log("onError(Error.TIMEOUT)" + getDate());
        if (getNotifyReceiveData()) {
            var e, t = readBufferData();
            if (null == t) return initPartBuffer(), void console.log("onError(Error.UNKNOWN)");
            printDataView(t), isCompleteInstruction() ? "24" != (e = dataView2Hex(t)).substring(6, 8) ? "36" == e.substring(6, 8) ? (bufLen = parseInt(e.substring(14, 18), 16), bufData += e.substring(18, 18 + 2 * bufLen), console.log("onReceiveDateListener----------------Data unpacking"), startSession(packageInstructionPart(), r, 90)) : "23" == e.substring(6, 8) || "41" == e.substring(6, 8) || "43" == e.substring(6, 8) || "42" == e.substring(6, 8) || "52" == e.substring(6, 8) ? (startSession(packageInstructionQue(), r, 90), console.log("onReceiveDateListener----------------Send inquiry")) : (packet2(hexStr2Bytes(e)), mOnResult.checkCmdId()) : (console.log("onReceiveDateListener----------------Complete data"), 0 != bufLen ? (t = parseInt(e.substring(14, 18), 16), t = e.substring(8, 18) + bufData + e.substring(18, 18 + 2 * t), console.log("Partially stitching complete data----------------" + t), packageCommandUplink(t)) : (console.log("Complete data----------------" + e), packet2(hexStr2Bytes(e))), console.log("Packaged data----------------" + byteArray2Hex(getAllBytes())), initPartBuffer(), validPCRC() && mOnResult.checkCmdId() && (null != r ? r(byteArray2Hex(getAllBytes())) : result = byteArray2Hex(getAllBytes()))) : (console.log("reading data----------------"), o())
        } else o()
    }, 10)
}

function initPartBuffer() {
    bufData = "", bufLen = 0
}

function startSysSession(e, n, o) {
    return new Promise(function(t, r) {
        result = null, writePromise(e), o *= 100, console.log("writePromise" + getDate()), readSysBleDataBuffer(n, o, function e() {
            readSysBleDataBuffer(n, --o, e, t, r)
        }, t, r)
    })
}

function readSysBleDataBuffer(i, e, u, l, c) {
    setTimeout(function() {
        if (r <= 0) return initPartBuffer(), void c("time out");
        if (getNotifyReceiveData()) {
            var e = readBufferData();
            if (null == e) return initPartBuffer(), void c("onError(Error.UNKNOWN)");
            if (printDataView(e), isCompleteInstruction() && !mUpdateFlag) {
                var t, r, n, o = dataView2Hex(e);
                "24" != o.substring(6, 8) ? "36" == o.substring(6, 8) ? (t = function e() {
                    readSysBleDataBuffer(i, --r, e, l, c)
                }, bufLen = parseInt(o.substring(14, 18), 16), bufData += o.substring(18, 18 + 2 * bufLen), console.log("onReceiveDateListener----------------Data unpacking"), result = null, writePromise(packageInstructionPart()), r = 500, console.log("writePromise" + getDate()), readSysBleDataBuffer(i, r, t, l, c)) : "23" == o.substring(6, 8) || "41" == o.substring(6, 8) || "43" == o.substring(6, 8) || "42" == o.substring(6, 8) || "52" == o.substring(6, 8) ? (n = function e() {
                    readSysBleDataBuffer(i, --r, e, l, c)
                }, result = null, writePromise(packageInstructionQue()), r = 500, console.log("writePromise" + getDate()), readSysBleDataBuffer(i, r, n, l, c), console.log("onReceiveDateListener----------------Send inquiry")) : (packet2(hexStr2Bytes(o)), mOnResult.checkCmdId()) : (console.log("onReceiveDateListener----------------Complete data"), 0 != bufLen ? (n = parseInt(o.substring(14, 18), 16), n = o.substring(8, 18) + bufData + o.substring(18, 18 + 2 * n), console.log("Partially stitching complete data----------------" + n), packageCommandUplink(n)) : (console.log("Complete data----------------" + o), packet2(hexStr2Bytes(o))), console.log("Packaged data----------------" + byteArray2Hex(getAllBytes())), initPartBuffer(), validPCRC() && (mOnResult.checkCmdId() ? null != i ? (console.log("complate true data----------------"), i(byteArray2Hex(getAllBytes()))) : (console.log("complate true data----------------"), result = byteArray2Hex(getAllBytes()), l(result)) : c("data verify error")))
            } else if (mUpdateFlag) {
                for (var a = new Array(e.byteLength), s = 0; s < e.byteLength; s++) a[s] = e.getUint8(s);
                e.getUint8(11) == calPCRC(a) && (null != i ? i(o) : l(result = o))
            } else console.log("reading data----------------"), u()
        } else u()
    }, 10)
}
SerialManager.prototype.startSysSession = function(e, t, r) {
    return startSysSession(e, t, r)
};
var mListener, UpdateFirmwareManager = function(e) {
    writeObj(e), mListener = e, console.log("UpdateFirmwareManager init" + mListener), writeObj(this)
};

function updatePosFirmware(a) {
    CommandDownlink(17, 48, 5);
    var e = getDownPBytes();
    console.log(byteArray2Hex(e)), startSysSession(new Uint8Array(e).buffer, null, 5).then(function(e) {
        var t, r, n, o;
        0 == getResult() && (t = 0, hex2Ascii(byteArray2Hex(getUpPBytes(1, n = getUpPByte(t++)))), t += n, o = getUpPByte(t++), hex2Ascii(byteArray2Hex(getUpPBytes(t, o))), t += o, r = getUpPByte(t++), hex2Ascii(byteArray2Hex(getUpPBytes(t, r))), t += r, n = getUpPByte(t++), console.log("batteryLevelLen:" + n), byteArrayToInt(getUpPBytes(t, n)), t += n, o = getUpPByte(t++), r = "00" == (r = byteArray2Hex(getUpPBytes(t, o))) ? "false" : "true", t += o, n = getUpPByte(t++), o = "00" == (o = byteArray2Hex(getUpPBytes(t, n))) ? "false" : "true", t += n, 0 != r.search("true") && 0 != o.search("true") || (console.log("<<<<<<<<<<<<disConnect start: is charging " + r), setUpdateData(a), console.log("begin updating==="), startUpdateFirmware()))
    }, function(e) {
        console.log(e), setUpdateData(a), startUpdateFirmware()
    })
}
UpdateFirmwareManager.prototype.updatePosFirmware = function(e) {
    updatePosFirmware(e)
};
var upgPack_totalLen, g_UpgPackDataLen = 0,
    g_UpgPackData = new Array,
    g_UpgPackDataIndex = 0;

function setUpdateData(e) {
    var t = hexStr2Bytes(e),
        e = t.length - 32;
    arrCopyArr(t, 32, g_UpgPackData = new Array(e), 0, e), g_UpgPackDataLen = upgPack_totalLen = e, console.log("data len:" + g_UpgPackDataLen), g_UpgPackDataIndex = 0
}

function startUpdateFirmware() {
    if (0 != g_UpgPackDataLen) {
        console.log("updateData: " + g_UpgPackData);
        var e = g_UpgPackData[g_UpgPackDataIndex],
            t = new Array(2);
        t[0] = g_UpgPackData[g_UpgPackDataIndex + 1], t[1] = g_UpgPackData[g_UpgPackDataIndex + 2];
        var t = byteArrayToInt(t),
            r = new Array(t);
        switch (arrCopyArr(g_UpgPackData, g_UpgPackDataIndex + 3, r, 0, t), console.log("g_UpgPackDataIndex: " + g_UpgPackDataIndex + "T: " + e + " ,L: " + t + " ,V: " + byteArray2Hex(r)), g_UpgPackDataIndex += t + 3, g_UpgPackDataLen -= t + 3, console.log("startUpdateFirmware-----------"), e) {
            case 2:
                doWorkbyT0x02(r);
                break;
            case 3:
                doWorkbyT0x03();
                break;
            case 4:
                doWorkbyT0x04();
                break;
            case 17:
                console.log(" 0x11 start" + getDate()), setTimeout(function() {
                    console.log(" 0x11 excute" + getDate()), writePromise(new Uint8Array(r).buffer), startUpdateFirmware()
                }, 100);
                break;
            case 18:
                doWorkbyT0x12(r)
        }
    } else console.log("Success!")
}

function doWorkbyT0x02(e) {
    e = byteArrayToInt(e);
    e *= 2, console.log(" Thread.sleep(" + e + ")" + getDate()), setTimeout(function() {
        console.log("-----------\x3edevice open" + getDate()), startUpdateFirmware()
    }, 1e3 * e)
}
var conCou = 0;

function doWorkbyT0x03() {
    console.log("open connecttion ..."), openAndConnectDevice().then(function(e) {
        console.log("+++++++++++++++: open success "), startUpdateFirmware()
    }, function(e) {
        console.log(e), console.log("+++++++++++++++: open  failed "), ++conCou < 3 && setTimeout(function() {
            doWorkbyT0x03()
        }, 500)
    })
}

function doWorkbyT0x04() {
    console.log("closeAndConnectDevice ..."), closeAndConnectDevice(function() {
        startUpdateFirmware()
    })
}

function doWorkbyT0x11(e) {
    setUpdate(!0), startSysSession(new Uint8Array(e).buffer, null, 5).then(function(e) {
        e = hexStr2Bytes(e);
        if (0 == e.length || 0 != e[6]) return console.log("0x11 update failed "), void setUpdate(!1);
        setUpdate(!1), startUpdateFirmware()
    }, function(e) {
        setUpdate(!1), console.log(e), console.log("UPDATE_STATE.FAILED"), startUpdateFirmware()
    })
}

function doWorkbyT0x12(e) {
    startSysSession(new Uint8Array(e).buffer, null, 5).then(function(e) {
        0 == getResult() && (commandID() == CmdId.CMDID_CRCERROR && console.log("Read: UPDATE_STATE.PACKED_ERROR"), startUpdateFirmware())
    }, function(e) {
        console.log(e), console.log("Read: UPDATE_STATE.LOWPOWER")
    })
}

function uuidFormat(e) {
    if (null != e) return "0x" + e.substring(4, 13).toUpperCase()
}

function writeObj(e) {
    for (var t in e) e[t]
}

function hexStr2Bytes(e) {
    var t = 0;
    if ("" == (e = e.includes("0x") ? e.replace("0x", "") : e)) return new Array;
    var r = e.length;
    if (r % 2 != 0) return null;
    r /= 2;
    for (var n = new Array, o = 0; o < r; o++) {
        var a = e.substr(t, 2),
            a = parseInt(a, 16);
        n.push(a), t += 2
    }
    return n
}

function byteArray2Hex(e) {
    return Array.prototype.map.call(new Uint8Array(e), function(e) {
        return ("00" + e.toString(16)).slice(-2)
    }).join("")
}

function stringToBytes(e) {
    for (var t, r, n = [], o = 0; o < e.length; o++) {
        for (t = e.charCodeAt(o), r = []; r.push(255 & t), t >>= 8;);
        n = n.concat(r.reverse())
    }
    return n
}

function sleep(e) {
    for (var t = new Date, r = t.getTime() + e;;)
        if ((t = new Date).getTime() > r) return
}

function printDataView(e) {
    for (var t = new Uint8Array(e.byteLength), r = 0; r < e.byteLength; r++) t[r] = e.getUint8(r);
    var n = byteArray2Hex(t);
    console.log("printDataView:" + n)
}

function dataView2Hex(e) {
    for (var t = new Uint8Array(e.byteLength), r = 0; r < e.byteLength; r++) t[r] = e.getUint8(r);
    return byteArray2Hex(t)
}

function arrCopyArr(e, t, r, n, o) {
    for (var a = t; a < t + o; a++) r[n] = e[a], n++;
    return r
}

function toHex(e) {
    return e < 16 ? "0x0" + e.toString(16).toUpperCase() : "0x" + e.toString(16).toUpperCase()
}

function calCRC(e) {
    for (var t = e[0], r = 1; r < e.length; r++) t ^= e[r];
    return console.log("===crc===" + t), t
}

function copyArr(e, t, r, n, o) {
    for (var a = n, s = new DataView(r), i = t + o, u = new DataView(e), l = t; l < i; l++) {
        var c = u.getUint8(l);
        s.setUint8(a, c), a++
    }
    return r
}

function getBytesFromArr(e, t, r) {
    return r.slice(e, e + t)
}

function ab2str(e) {
    return String.fromCharCode.apply(null, new Uint16Array(e))
}

function byteArrayToInt(e) {
    for (var t = 0, r = 0; r < e.length; r++) t <<= 8, t |= 255 & e[r];
    return t
}

function Str2Bytes(e) {
    var t = 0;
    if ("" == e) return new Array;
    var r = e.length;
    if (r % 2 != 0) return null;
    r /= 2;
    for (var n = new Array, o = 0; o < r; o++) {
        var a = e.substr(t, 2),
            a = parseInt(a, 16);
        n.push(a), t += 2
    }
    return n
}

function intToHex(e) {
    e = !(0 <= e && e < 16) && 16 <= e && e < 256 ? e.toString(16) : "0" + e.toString(16);
    return Str2Bytes(e = e.length % 2 != 0 && "0" == e.charAt(0) ? e.substring(1) : e)
}

function intToHexValue(e) {
    e = !(0 <= e && e < 16) && 16 <= e && e < 256 ? e.toString(16) : "0" + e.toString(16);
    return e
}
var CLICKTAG = 0;

function button_onclick(e) {
    0 == CLICKTAG && (CLICKTAG = 1, e.disabled = !0, setTimeout(function() {
        CLICKTAG = 0, e.disabled = !1
    }, 3e3))
}

function getDate() {
    var e = new Date,
        t = e.getFullYear(),
        r = e.getMonth() + 1,
        n = e.getDate(),
        o = e.getHours(),
        a = e.getMinutes(),
        e = e.getSeconds();
    return t + "-" + conver(r) + "-" + conver(n) + " " + conver(o) + ":" + conver(a) + ":" + conver(e)
}

function conver(e) {
    return e < 10 ? "0" + e : e
}
var writeChar, mOnResult, symbols = " !\"#$%&'()*+,-./0123456789:;<=>?@",
    loAZ = "abcdefghijklmnopqrstuvwxyz";

function hex2Ascii(e) {
    for (var t = e.toLowerCase(), r = "0123456789abcdef", n = "", o = 0, o = 0; o < t.length; o += 2) {
        var a = t.charAt(o);
        ":" == a && (o++, a = t.charAt(o));
        var s = t.charAt(o + 1),
            i = r.indexOf(a) << 4;
        i |= r.indexOf(s);
        a = parseInt(i) - 32, s = "?";
        n += s = 0 <= a && i <= 126 ? symbols.charAt(a) : s
    }
    return n
}

function isEmpty(e) {
    return null == e || void 0 === e || "" == e.trime
}

function getFormatDateyyyyMMddHHmmss() {
    var e = new Date;
    return e.getFullYear().toString() + conver(e.getMonth() + 1) + conver(e.getDate()) + conver(e.getHours()) + conver(e.getMinutes()) + conver(e.getSeconds())
}

function getUTF8Bytes(e) {
    for (var t = [], r = e.length, n = 0; n < r; ++n) {
        var o = e.charCodeAt(n);
        65536 <= o && o <= 1114111 ? (t.push(o >> 18 | 240), t.push(o >> 12 & 63 | 128), t.push(o >> 6 & 63 | 128), t.push(63 & o | 128)) : 2048 <= o && o <= 65535 ? (t.push(o >> 12 | 224), t.push(o >> 6 & 63 | 128), t.push(63 & o | 128)) : 128 <= o && o <= 2047 ? (t.push(o >> 6 | 192), t.push(63 & o | 128)) : t.push(o)
    }
    return t
}

function toGbkBytes(e) {
    for (var t = new Array, r = 0; r < e.length; r++) {
        var n, o = e.charAt(r);
        "%" == o ? (n = e.charAt(r + 1) + e.charAt(r + 2), n = parseInt(n, 16), n |= -256, t.push(n), r += 2) : t.push(o.charCodeAt())
    }
    return t
}
symbols += loAZ.toUpperCase(), 
symbols += "[\\]^_`", 
symbols += loAZ, 
symbols += "{|}~";
var webBluetooth = function(e, t) {
    writeObj(e), this.mOnResult = e, this.writeChar = t, writeObj(mOnResult)
};

function registNotify(e) {
    e.startNotifications().then(function(e) {
        console.log("> Notifications started")
    }).catch(function(e) {
        console.log("Argh! " + e)
    }), basicReadBle(e)
}
webBluetooth.prototype.startSession = function(e, t, r) {
    startSession(e, t, r)
};
bufData = "", bufLen = 0, result = null;

function startSession(e, t, r) {
    function n() {
        readBleDataBuffer(t, --r, n)
    }
    r *= 100, result = null, writePromise(e), console.log("writePromise" + getDate()), readBleDataBuffer(t, r, n)
}

function basicReadBle(e) {
    e.addEventListener("characteristicvaluechanged", function(e) {
        console.log("characteristicvaluechanged" + getDate()), setNotifyReceiveData(!0);
        e = e.target.value;
        printDataView(e), appendData(e)
    }), e.startNotifications()
}
var write_Max_len = 16,
    notifyReceiveData = !1;

function setNotifyReceiveData(e) {
    notifyReceiveData = e
}

function getNotifyReceiveData() {
    return notifyReceiveData
}

function basicWriteBle(e, t, r) {
    writeChar.writeValue(e).then(function() {
        null != t && console.log("onSuccess ")
    }, function(e) {
        null != r && console.log("onFail " + e)
    })
}

function writePromise(e) {
    setNotifyReceiveData(!1);
    var t = e;
    console.log("Data write：" + byteArray2Hex(t)), 
	clearReadbuffer();
    e = t.byteLength;
    if (e <= write_Max_len) {
        var r = function() {
                console.log("BT success")
            },
            n = function(e) {
                console.log("BT fail" + e)
            };
        console.log("Write complete data：" + byteArray2Hex(t)), 
		basicWriteBle(t, r, n)
    } else {
        for (var o, r = function() {
                console.log("BT success")
            }, n = function(e) {
                console.log("BT fail" + e)
            }, a = -1, s = 0, s = e % write_Max_len == 0 ? e / write_Max_len : (e - (a = e % write_Max_len)) / write_Max_len + 1, i = write_Max_len, u = 0, l = new Array; 0 < s;) i = -1 != a && 1 == s ? a : write_Max_len, o = new ArrayBuffer(i), copyArr(t, u * write_Max_len, o, 0, i), l[u] = o, console.log("Write part data：" + byteArray2Hex(o)), s--, u++;
        writePromiseCou = 0, basicMultisessionBle(l, r, n)
    }
    console.log("*******************test write result****************")
}
var writePromiseCou = 0;

function basicMultisessionBle(e, t, r) {
    writePromiseCou >= e.length || (writeChar.writeValue(e[writePromiseCou]).then(function() {
        null != t && basicMultisessionBle(e, t, r)
    }, function(e) {}), writePromiseCou++)
}

function startSysSession(n, o, a) {
    return new Promise(function(e, t) {
        function r() {
            readSysBleDataBuffer(o, --a, r, e, t)
        }
        result = null, writePromise(n), a *= 100, console.log("writePromise" + getDate()), readSysBleDataBuffer(o, a, r, e, t)
    })
}
mUpdateFlag = !1;

function setUpdate(e) {
    mUpdateFlag = e
}

function packageInstructionQue() {
    CommandDownlink4(CmdId.CMDID_QUERY, 0, 0, 90);
    var e = getDownPBytes();
    return console.log(byteArray2Hex(e)), new Uint8Array(e).buffer
}

function packageInstructionPart() {
    CommandDownlink4(CmdId.CMDID_PART_DATA, 0, 0, 90);
    var e = getDownPBytes();
    return console.log(byteArray2Hex(e)), new Uint8Array(e).buffer
}

function packageInstructionReset() {
    CommandDownlink4(CmdId.CMDID_RESET, 0, 0, 15);
    var e = getDownPBytes();
    return console.log(byteArray2Hex(e)), new Uint8Array(e).buffer
}

function readBleDataBuffer(r, n, o) {
    setTimeout(function() {
        if (n <= 0) return initPartBuffer(), void console.log("onError(Error.TIMEOUT)" + getDate());
        if (getNotifyReceiveData()) {
            var e, t = readBufferData();
            if (null == t) return initPartBuffer(), void console.log("onError(Error.UNKNOWN)");
            isCompleteInstruction() ? (e = dataView2Hex(t), console.log("isCompleteInstruction == receivedData == " + e), "24" != e.substring(6, 8) ? "36" == e.substring(6, 8) ? (bufLen = parseInt(e.substring(14, 18), 16), bufData += e.substring(18, 18 + 2 * bufLen), console.log("onReceiveDateListener----------------Data unpacking"), startSession(packageInstructionPart(), r, 90)) : "23" == e.substring(6, 8) || "41" == e.substring(6, 8) || "43" == e.substring(6, 8) || "42" == e.substring(6, 8) || "52" == e.substring(6, 8) ? (startSession(packageInstructionQue(), r, 90), console.log("onReceiveDateListener----------------Send inquiry")) : (packet2(hexStr2Bytes(e)), mOnResult.checkCmdId()) : (console.log("onReceiveDateListener----------------Complete data"), 0 != bufLen ? (t = parseInt(e.substring(14, 18), 16), t = e.substring(8, 18) + bufData + e.substring(18, 18 + 2 * t), console.log("Partially stitching complete data----------------" + t), packageCommandUplink(t)) : (console.log("Complete data----------------" + e), packet2(hexStr2Bytes(e))), console.log("Packaged data----------------" + byteArray2Hex(getAllBytes())), initPartBuffer(), validPCRC() && mOnResult.checkCmdId() && (null != r ? r(byteArray2Hex(getAllBytes())) : result = byteArray2Hex(getAllBytes())))) : o()
        } else o()
    }, 10)
}

function initPartBuffer() {
    bufData = "", bufLen = 0
}

function readSysBleDataBuffer(i, e, u, l, c) {
    setTimeout(function() {
        if (r <= 0) return initPartBuffer(), void c("time out");
        if (getNotifyReceiveData()) {
            var e = readBufferData();
            if (null == e) return initPartBuffer(), void c("onError(Error.UNKNOWN)");
            if (isCompleteInstruction() && !mUpdateFlag) {
                var t, r, n, o = dataView2Hex(e);
                "24" != o.substring(6, 8) ? "36" == o.substring(6, 8) ? (t = function e() {
                    readSysBleDataBuffer(i, --r, e, l, c)
                }, bufLen = parseInt(o.substring(14, 18), 16), bufData += o.substring(18, 18 + 2 * bufLen), console.log("onReceiveDateListener----------------Data unpacking"), result = null, writePromise(packageInstructionPart()), r = 500, console.log("writePromise" + getDate()), readSysBleDataBuffer(i, r, t, l, c)) : "23" == o.substring(6, 8) || "41" == o.substring(6, 8) || "43" == o.substring(6, 8) || "42" == o.substring(6, 8) || "52" == o.substring(6, 8) ? (n = function e() {
                    readSysBleDataBuffer(i, --r, e, l, c)
                }, result = null, writePromise(packageInstructionQue()), r = 500, console.log("writePromise" + getDate()), readSysBleDataBuffer(i, r, n, l, c), console.log("onReceiveDateListener----------------Send inquiry")) : (packet2(hexStr2Bytes(o)), mOnResult.checkCmdId()) : (console.log("onReceiveDateListener----------------Complete data"), 0 != bufLen ? (n = parseInt(o.substring(14, 18), 16), n = o.substring(8, 18) + bufData + o.substring(18, 18 + 2 * n), console.log("Partially stitching complete data----------------" + n), packageCommandUplink(n)) : (console.log("Complete data----------------" + o), packet2(hexStr2Bytes(o))), console.log("Packaged data----------------" + byteArray2Hex(getAllBytes())), initPartBuffer(), validPCRC() && (mOnResult.checkCmdId() ? null != i ? (console.log("complate true data----------------"), i(byteArray2Hex(getAllBytes()))) : (console.log("complate true data----------------"), result = byteArray2Hex(getAllBytes()), l(result)) : c("data verify error")))
            } else if (mUpdateFlag) {
                for (var a = new Array(e.byteLength), s = 0; s < e.byteLength; s++) a[s] = e.getUint8(s);
                e.getUint8(11) == calPCRC(a) && (null != i ? i(o) : l(result = o))
            } else console.log("reading data----------------"), u()
        } else u()
    }, 10)
}
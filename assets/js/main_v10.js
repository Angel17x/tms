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
}
  , CommunicationMode = {
    BLUETOOTH: 0,
    USB: 1,
    BLUETOOTH_BLE: 2,
    UART: 3
}
  , EMVDataOperation = {
    CLEAR: 0,
    ADD: 1,
    DELETE: 2,
    ATTAINLIST: 3,
    UPDATE: 4,
    GETEMV: 5
}
  , TransactionType = {};
function anlycPosInfo() {
    var e = upPLength();
    void 0;
    var t = 0
      , n = getUpPByte(t++)
      , r = hex2Ascii(r = byteArray2Hex(getUpPBytes(t, n)));
    t += n;
    var o = getUpPByte(t++)
      , a = hex2Ascii(a = byteArray2Hex(getUpPBytes(t, o)));
    t += o;
    var s = getUpPByte(t++)
      , i = byteArray2Hex(getUpPBytes(t, s))
      , u = "";
    3 < (i = hex2Ascii(i)).length && (u = i.substr(3, s),
    i = i.substr(0, 3)),
    t += s;
    var l = getUpPByte(t++);
    void 0;
    var c = byteArrayToInt(getUpPBytes(t, l)) + " mV";
    t += l;
    var y = getUpPByte(t++)
      , g = "00" == (g = byteArray2Hex(getUpPBytes(t, y))) ? "false" : "true";
    t += y;
    var m = getUpPByte(t++)
      , n = "00" == (n = byteArray2Hex(getUpPBytes(t, m))) ? "false" : "true";
    t += m;
    o = getUpPByte(t++),
    s = "00" == (s = byteArray2Hex(getUpPBytes(t, o))) ? "false" : "true";
    t += o;
    l = getUpPByte(t++),
    y = "00" == (y = byteArray2Hex(getUpPBytes(t, l))) ? "false" : "true";
    t += l;
    m = getUpPByte(t++),
    o = "00" == (o = byteArray2Hex(getUpPBytes(t, m))) ? "false" : "true",
    l = "";
    (t += m) < e && (d = getUpPByte(t++),
    l = byteArray2Hex(getUpPBytes(t, d)),
    t += d),
    void 0;
    var d = "";
    t < e && (C = getUpPByte(t++),
    d = "00" == (d = byteArray2Hex(getUpPBytes(t, C))) ? "false" : "true",
    t += C);
    l = "";
    t < e && (p = getUpPByte(t++),
    l = "00" == (l = byteArray2Hex(getUpPBytes(t, p))) ? "false" : "true",
    t += p);
    var p, C = "";
    return t < e && (p = getUpPByte(t++),
    100 < (e = getUpPBytes(t, p)[0]) ? e = 100 : e < 0 && (e = 0),
    C = e.toString(10),
    C += "%",
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
        updateWorkKeyFlag: d,
        keyboardflag: l,
        batteryPercentage: C
    }
}
function anlycPosId() {
    var e = upPLength()
      , t = 0
      , n = getUpPByte(t++)
      , r = byteArray2Hex(getUpPBytes(t, n));
    t += n;
    var o = getUpPByte(t++)
      , n = byteArray2Hex(getUpPBytes(t, o));
    t += o,
    void 0;
    o = getUpPByte(t++),
    byteArray2Hex(getUpPBytes(t, o));
    t += o;
    o = getUpPByte(t++),
    byteArray2Hex(getUpPBytes(t, o));
    (t += o) < e && (a = getUpPByte(t++),
    byteArray2Hex(getUpPBytes(t, a)),
    t += a,
    a = getUpPByte(t++),
    byteArray2Hex(getUpPBytes(t, a)),
    t += a);
    var a = "";
    t < e && (s = getUpPByte(t++),
    a = byteArray2Hex(getUpPBytes(t, s)),
    t += s);
    var s;
    t < e && (s = getUpPByte(t++),
    byteArray2Hex(getUpPBytes(t, s)),
    t += s,
    s = getUpPByte(t++),
    byteArray2Hex(getUpPBytes(t, s)),
    t += s,
    s = getUpPByte(t++),
    byteArray2Hex(getUpPBytes(t, s)),
    t += s,
    s = getUpPByte(t++),
    byteArray2Hex(getUpPBytes(t, s)),
    t += s,
    s = getUpPByte(t++),
    byteArray2Hex(getUpPBytes(t, s)),
    t += s);
    return t < e && (e = getUpPByte(t++),
    byteArray2Hex(getUpPBytes(t, e)),
    t += e),
    {
        posId: n,
        csn: a,
        psamId: r
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
var myConnectType, CmdId = {
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
function CommandDownlink(e, t, n) {
    packCmmandDownlink(33, e, t, n, new Array)
}
function CommandDownlink2(e, t, n, r) {
    packCmmandDownlink(33, e, t, n, r)
}
function CommandDownlink3(e, t, n, r, o) {
    packCmmandDownlink(e, t, n, r, o)
}
function CommandDownlink4(e, t, n, r) {
    packCmmandDownlink(e, t, n, r, new Array)
}
function getDownPByte(e) {
    return getPByte(e)
}
function getDownPBytes() {
    return getPBytes()
}
function packCmmandDownlink(e, t, n, r, o) {
    packet(o.length),
    setCmdID(e),
    setCmdCode(t),
    setCmdSubCode(n),
    setTimeOut(r),
    setDataField(o),
    buildCRC()
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
    return e[0] = getPByte(3),
    e[1] = getPByte(4),
    byteArrayToInt(e)
}
function getUpPByte(e) {
    return getDataFieldByte(e)
}
function getUpPBytes(e, t) {
    for (var n = new Array, r = 0; r < t; r++)
        n[r] = getDataFieldByte(e + r);
    return n
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
function startSession(e, t, n) {
    myConnectType == CommunicationMode.BLUETOOTH ? (void 0,
    startSessionBluetooth(e, t, n)) : myConnectType == CommunicationMode.USB ? (void 0,
    startSessionUSB(e, t, n)) : myConnectType == CommunicationMode.UART ? (void 0,
    startSessionSerial(e, t, n)) : void 0
}
function startSysSession(e, t, n) {
    return myConnectType == CommunicationMode.BLUETOOTH ? (void 0,
    startSysSessionBluetooth(e, t, n)) : myConnectType == CommunicationMode.USB ? (void 0,
    startSysSessionUSB(e, t, n)) : void (myConnectType == CommunicationMode.UART ? (void 0,
    startSysSessionSerial(e, t, n)) : void 0)
}
var pinStr, pinMode, mTradeAmount, mCurrencyCode, mCashbackAmount, mTradeType, DoTrade = function(e) {
    writeObj(e),
    mListener = e,
    void 0,
    writeObj(this)
}, EmvOption = {
    START: 0,
    START_WITH_FORCE_ONLINE: 1,
    START_WITH_FORCE_PIN: 2,
    START_WITH_FORCE_ONLINE_FORCE_PIN: 3
}, DoTradeMode = {
    COMMON: 0,
    CHECK_CARD_NO_IPNUT_PIN: 1,
    IS_DEBIT_OR_CREDIT: 2
}, TransactionResult = {
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
}, mDoTradeMode = DoTradeMode.COMMON, mCardTmode = CardTradeMode.CardTradeMode_SWIPE_TAP_INSERT_CARD, mAmountIcon = "", cDisplayStr = "", mFormatId = "", mBatchId = "", mAmountPoint = "", mSaveLogFlag = "", mIsSupportCashBack = !1, FINA_CONFIRM = "03", BATCH_DC = "04", OFFLINE_ADVICE = "05", ONLINE_ADVICE = "06", REVERSAL = "07", EMV_TRANS_ACCEPT = "01", EMV_TRANS_DENIAL = "02", EMV_TRANS_GOONLINE = "03";
function setAmountPoint(e) {
    mAmountPoint = e ? "01" : "00"
}
function sendPin(e) {
    pinMode = "00",
    pinMode = "" == (pinStr = e) || null == pinStr ? "00" : "01",
    void 0,
    EMVCvmSetPin(e)
}
function isSavelog(e) {
    mSaveLogFlag = e ? "01" : "00"
}
function setAmount(e, t, n, r) {
    void 0,
    mTradeAmount = e,
    mCashbackAmount = t,
    mCurrencyCode = n,
    void 0,
    mTradeType = toHex(r).substr(2, 2),
    void 0
}
var datas, encMode, AmountType = {
    MONEY_TYPE_NONE: 1,
    MONEY_TYPE_RMB: 2,
    MONEY_TYPE_DOLLAR: 3,
    MONEY_TYPE_CUSTOM_STR: 4
};
function setAmountIcon(e, t) {
    void 0;
    var n = "";
    if (e == AmountType.MONEY_TYPE_NONE)
        n = "01";
    else if (e == AmountType.MONEY_TYPE_RMB)
        n = "02";
    else if (e == AmountType.MONEY_TYPE_DOLLAR)
        n = "03";
    else if (e == AmountType.MONEY_TYPE_CUSTOM_STR)
        return void (null != (mAmountIcon = t) && "" != t && (mAmountIcon = byteArray2Hex(getUTF8Bytes(t.trim()))));
    this.amountIcon = n
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
    var n = !0;
    if (null != e && "" != e && 0 != e.length) {
        if ("FFFFFFFF" == e)
            return posInputAmountFlag = !0,
            void 0,
            n;
        if ("00000000" == e)
            return this.tradeAmount = "",
            n;
        if (void 0,
        "05" == t || "18" == t) {
            if (e.startsWith("0") && 1 < e.length)
                return mListener.onError("INPUT_INVALID"),
                void 0,
                n = !1
        } else if (e.startsWith("0"))
            return mListener.onError("INPUT_INVALID"),
            void 0,
            n = !1;
        -1 != e.indexOf(".") && (void 0,
        mListener.onError("INPUT_INVALID_FORMAT"),
        n = !1)
    } else
        "05" != t && "18" != t && (mListener.onError("INPUT_INVALID"),
        void 0,
        n = !1);
    return n
}
function doTrade(e, t) {
    10 <= e || (checkAmount(mTradeAmount, mTradeType) ? EmvPolCard(mTradeAmount, t, mAmountIcon, e, mCardTmode, mTradeType, mCurrencyCode, cDisplayStr) : (mListener.onError("Input invalid"),
    void 0))
}
function EmvPolCard(e, t, n, r, o, a, s, i) {
    var u = 0
      , l = new Array
      , c = new Array
      , y = new Array
      , g = new Array
      , m = new Array
      , d = new Array
      , p = new Array
      , C = new Array
      , A = new Array
      , f = new Array
      , D = 0;
    isEmpty(n) || (D = (l = hexStr2Bytes(n.trim())).length);
    var R = 0;
    isEmpty(e) || (R = (c = getUTF8Bytes(e.trim())).length);
    var E = getFormatDateyyyyMMddHHmmss()
      , _ = 0;
    isEmpty(E) || (_ = (y = hexStr2Bytes(E.trim())).length);
    var T = 0
      , P = i;
    isEmpty(P) || (T = (g = hexStr2Bytes(P.trim())).length);
    var S = 0;
    isEmpty(mFormatId) || (S = (m = hexStr2Bytes(mFormatId.trim())).length);
    var I = 0;
    isEmpty(mBatchId) || (I = (d = hexStr2Bytes(mBatchId.trim())).length);
    n = 0;
    isEmpty(mAmountPoint) || (n = (p = hexStr2Bytes(mAmountPoint.trim())).length);
    e = 0;
    isEmpty(mSaveLogFlag) || (e = (C = hexStr2Bytes(mSaveLogFlag.trim())).length);
    E = 0;
    isEmpty("00") || (E = (A = hexStr2Bytes("00".trim())).length);
    i = (f = hexStr2Bytes("313431323137")).length,
    P = new Array(1 + R + 1 + 1 + D + 1 + 1 + _ + 1 + 1 + 1 + 1 + 1 + 1 + 2 + 1 + T + 8 + 1 + S + 1 + I + 1 + n + 1 + e + 1 + E + 1 + i);
    P[u++] = R,
    arrCopyArr(c, 0, P, u, R),
    u += R,
    o == CardTradeMode.CardTradeMode_ONLY_INSERT_CARD ? P[u++] = 1 : o == CardTradeMode.CardTradeMode_ONLY_SWIPE_CARD ? P[u++] = 2 : o == CardTradeMode.CardTradeMode_SWIPE_TAP_INSERT_CARD ? P[u++] = 3 : o == CardTradeMode.CardTradeMode_UNALLOWED_LOW_TRADE ? P[u++] = 4 : o == CardTradeMode.CardTradeMode_SWIPE_INSERT_CARD ? P[u++] = 5 : o == CardTradeMode.CardTradeMode_SWIPE_TAP_INSERT_CARD_UNALLOWED_LOW_TRADE ? P[u++] = 6 : o == CardTradeMode.CardTradeMode_ONLY_TAP_CARD ? P[u++] = 7 : o == CardTradeMode.CardTradeMode_SWIPE_TAP_INSERT_CARD_NOTUP ? P[u++] = 8 : o == CardTradeMode.CardTradeMode_SWIPE_TAP_INSERT_CARD_NOTUP_UNALLOWED_LOW_TRADE ? P[u++] = 9 : o == CardTradeMode.CardTradeMode_TAP_INSERT_CARD ? P[u++] = 11 : o == CardTradeMode.CardTradeMode_TAP_INSERT_CARD_NOTUP ? P[u++] = 10 : o == CardTradeMode.CardTradeMode_SWIPE_TAP_INSERT_CARD_DOWN ? P[u++] = 12 : P[u++] = 3,
    P[u++] = D,
    arrCopyArr(l, 0, P, u, D),
    u += D,
    mDoTradeMode == DoTradeMode.CHECK_CARD_NO_IPNUT_PIN ? P[u++] = 1 : mDoTradeMode == DoTradeMode.IS_DEBIT_OR_CREDIT ? P[u++] = 3 : P[u++] = 0,
    P[u++] = _,
    arrCopyArr(y, 0, P, u, _),
    u += _,
    P[u++] = 0,
    P[u++] = 0,
    P[u++] = r,
    P[u++] = 0,
    P[u++] = 1,
    isEmpty(a) && (a = "01"),
    P[u++] = hexStr2Bytes(a)[0],
    3 == (s = isEmpty(s) ? "0156" : s).length && (s = "0" + s),
    P[u++] = hexStr2Bytes(s)[0],
    P[u++] = hexStr2Bytes(s)[1],
    P[u++] = T,
    arrCopyArr(g, 0, P, u, T),
    u += T,
    P[u++] = S,
    arrCopyArr(m, 0, P, u, m.length),
    u += S,
    P[u++] = I,
    arrCopyArr(d, 0, P, u, d.length),
    u += I,
    P[u++] = n,
    arrCopyArr(p, 0, P, u, p.length),
    u += n,
    P[u++] = e,
    arrCopyArr(C, 0, P, u, C.length),
    u += e,
    P[u++] = E,
    arrCopyArr(A, 0, P, u, A.length),
    u += E,
    P[u++] = i,
    arrCopyArr(f, 0, P, u, f.length),
    u += i,
    arrCopyArr(calMac(P, P.length - 8), 0, P, u, 8),
    u += 8,
    mListener.onRequestWaitingUser(""),
    CommandDownlink2(22, 32, t, P);
    P = getDownPBytes();
    startSession(new Uint8Array(P).buffer, onReceiveDateListener, 15)
}
function EMVCvmSetPin(e) {
    var t = 0
      , n = new Array(512);
    n[t++] = hexStr2Bytes(pinMode)[0],
    n = ("" == e || null == e ? n[t++] = 0 : (e = getUTF8Bytes(e),
    n[t++] = e.length,
    arrCopyArr(e, 0, n, t, e.length),
    t += e.length),
    n[t++] = 1,
    n[t++] = 0,
    arrCopyArr(n, 0, n = new Array(t), 0, t),
    CommandDownlink2(22, 52, 60, n),
    getDownPBytes()),
    startSession(new Uint8Array(n).buffer, onReceiveDateListener, 15)
}
function onReceiveDateListener(e) {
    if (void 0,
    "01" == e.substring(18, 20) && "1620" == e.substring(8, 12)) {
        mListener.onDoTradeResult(DoTradeResult.ICC, null),
        CommandDownlink2(22, 48, 60, EMVStart(EmvOption.START));
        var t = getDownPBytes();
        void 0,
        startSession(new Uint8Array(t).buffer, onReceiveDateListener, 5)
    } else if ("00" == e.substring(18, 20) && "1620" == e.substring(8, 12))
        checkCardResult(DoTradeResult.MCR, e);
    else if ("03" == e.substring(18, 20) && "1620" == e.substring(8, 12))
        checkCardResult(DoTradeResult.NFC_ONLINE, e);
    else if ("04" == e.substring(18, 20) && "1620" == e.substring(8, 12))
        checkCardResult(DoTradeResult.NFC_OFFLINE, e);
    else if ("05" == e.substring(18, 20) && "1620" == e.substring(8, 12))
        mListener.onDoTradeResult(DoTradeResult.NFC_DECLINED, null);
    else if ("24" == e.substring(6, 8) && "1634" == e.substring(8, 12)) {
        var n = parseInt(e.substring(14, 18), 16);
        continueEmvProcess(r = e.substring(18, 18 + 2 * n))
    } else if ("32" == e.substring(6, 8) && "1634" == e.substring(8, 12))
        mListener.onRequestSetPin();
    else if ("24" == e.substring(6, 8) && "1630" == e.substring(8, 12)) {
        var n = parseInt(e.substring(14, 18), 16)
          , r = e.substring(18, 18 + 2 * n);
        if (void 0,
        void 0,
        "02" == e.substring(12, 14)) {
            var o = new Array
              , a = 0
              , s = parseInt(r.substring(a, a + 2), 16);
            void 0,
            a += 2;
            for (var i = 0; i < s; i++) {
                a += 2,
                a += 2;
                var u = parseInt(r.substring(a, a + 2), 16);
                a += 2;
                var l = hex2Ascii(r.substring(a, a + 2 * u));
                a += 2 * u,
                o.push(l)
            }
            mListener.onRequestSelectEmvApp(o)
        } else
            "31" == e.substring(12, 14) || "32" == e.substring(12, 14) ? mListener.onRequestSetPin() : continueEmvProcess(r)
    } else
        "241640" == e.substring(6, 12) && (void 0,
        n = parseInt(e.substring(14, 18), 16),
        void 0,
        r = bufData + e.substring(18, 18 + 2 * n),
        void 0,
        t = Str2Bytes(r),
        void 0,
        n = (e = analysisEmvResult(t))[0],
        t = e[1],
        e[2],
        e[3],
        e = e[4],
        void 0,
        n == EMV_TRANS_ACCEPT ? t == REVERSAL ? (mListener.onRequestDisplay(Display.REMOVE_CARD),
        mListener.onReturnReversalData(e),
        mListener.onRequestTransactionResult(TransactionResult.DECLINED)) : t != FINA_CONFIRM && t != BATCH_DC || (mListener.onRequestDisplay(Display.REMOVE_CARD),
        mListener.onRequestBatchData(e),
        mListener.onRequestTransactionResult(TransactionResult.APPROVED)) : n == EMV_TRANS_DENIAL && (t == ONLINE_ADVICE || t == OFFLINE_ADVICE ? (mListener.onRequestDisplay(Display.REMOVE_CARD),
        mListener.onRequestBatchData(e),
        mListener.onRequestTransactionResult(TransactionResult.DECLINED)) : REVERSAL == t && (mListener.onRequestDisplay(Display.REMOVE_CARD),
        mListener.onReturnReversalData(e),
        mListener.onRequestTransactionResult(TransactionResult.DECLINED))))
}
function continueEmvProcess(e) {
    var t = analysisEmvResult(hexStr2Bytes(e))
      , n = t[0]
      , e = (t[1],
    t[2],
    t[3],
    t[4]);
    EMV_TRANS_GOONLINE == n ? mListener.onRequestOnlineProcess(e) : emvGoOffLine(t)
}
function emvGoOffLine(e) {
    var t = e[0]
      , n = e[1]
      , e = (e[2],
    e[3],
    e[4]);
    if (EMV_TRANS_DENIAL == t) {
        if (ONLINE_ADVICE == n || OFFLINE_ADVICE == n)
            return mListener.onReqestDisplay(Display.REMOVE_CARD),
            mListener.onRequestBatchData(e),
            void mListener.onRequestTransactionResult(TransactionResult.DECLINED);
        if (REVERSAL == n)
            return mListener.onRequestDisplay(Display.REMOVE_CARD),
            mListener.onReturnReversalData(e),
            void mListener.onRequestTransactionResult(TransactionResult.DECLINED)
    } else if (EMV_TRANS_ACCEPT == t) {
        if (REVERSAL == n)
            return mListener.onRequestDisplay(Display.REMOVE_CARD),
            mListener.onReturnReversalData(e),
            void mListener.onRequestTransactionResult(TransactionResult.DECLINED);
        if (FINA_CONFIRM == n || BATCH_DC == n)
            return mListener.onRequestDisplay(Display.REMOVE_CARD),
            mListener.onRequestBatchData(e),
            void mListener.onRequestTransactionResult(TransactionResult.APPROVED)
    }
    startSysSession(packageInstructionReset(), null, 5),
    logListaner = "onError(Error.UNKNOWN)",
    void 0
}
function EMVSelectEMVApp(e) {
    var t = new Array;
    t.push(e),
    CommandDownlink2(22, 49, 30, t);
    t = getDownPBytes();
    void 0,
    startSysSession(new Uint8Array(t).buffer, null, 60).then(function(e) {
        var t;
        0 == getResult() && (t = upPLength(),
        void 0,
        continueEmvProcess(byteArray2Hex(getUpPBytes(0, t))))
    }, function(e) {
        void 0
    })
}
function EMVGoOnLine(e) {
    CommandDownlink2(22, 64, 30, hexStr2Bytes(e));
    e = getDownPBytes();
    void 0,
    startSession(new Uint8Array(e).buffer, onReceiveDateListener, 60)
}
function checkCardResult(e, t) {
    var n = new Array;
    void 0;
    var r = hexStr2Bytes(t.substring(14, 14 + t.length - 16))
      , o = (r[2],
    4)
      , a = r.length
      , s = r[o++]
      , i = byteArray2Hex(getBytesFromArr(o, s, r));
    o += s,
    n.push(i);
    var u = r[o++]
      , t = byteArray2Hex(getBytesFromArr(o, u, r));
    o += u,
    n.push(t);
    s = r[o++],
    i = byteArray2Hex(getBytesFromArr(o, s, r));
    o += s,
    n.push(i);
    u = r[o++],
    s = ab2str(getBytesFromArr(o, u, r));
    o += u,
    n.push(s);
    u = r[o++],
    s = ab2str(getBytesFromArr(o, u, r));
    o += u,
    n.push(s);
    u = r[o++],
    s = ab2str(getBytesFromArr(o, u, r));
    o += u,
    n.push(s);
    u = r[o++],
    s = ab2str(getBytesFromArr(o, u, r));
    o += u,
    n.push(s);
    u = r[o++],
    s = ab2str(getBytesFromArr(o, u, r));
    o += u,
    n.push(s);
    u = r[o++],
    s = byteArray2Hex(getBytesFromArr(o, u, r));
    o += u,
    n.push(s);
    u = r[o++],
    s = byteArray2Hex(getBytesFromArr(o, u, r));
    o += u,
    n.push(s);
    u = r[o++],
    s = byteArray2Hex(getBytesFromArr(o, u, r));
    o += u,
    n.push(s),
    o < a ? (c = r[o++],
    g = byteArray2Hex(getBytesFromArr(o, c, r)),
    o += c,
    n.push(g),
    s = r[o++],
    c = byteArray2Hex(getBytesFromArr(o, s, r)),
    o += s,
    n.push(c)) : c = g = "";
    var l, c, y, g = "";
    o < a && (l = r[o++],
    g = ab2str(getBytesFromArr(o, l, r)),
    o += l,
    n.push(g)),
    o < a && ((c = new Array(1))[0] = r[o++],
    l = byteArrayToInt(c),
    (g = new Array(1))[0] = r[o++],
    c = byteArrayToInt(g),
    (g = new Array(1))[0] = r[o++],
    g = byteArrayToInt(g),
    l.toString(),
    c.toString(),
    g.toString()),
    o < a ? (a = r[o++],
    y = byteArray2Hex(getBytesFromArr(o, a, r)),
    o += a) : y = "",
    n.push(y);
    t.toString(),
    i.toString();
    mListener.onDoTradeResult(e, n)
}
function getNFCBatchData(t, n) {
    getICCTag(1, 0, "").then(function(e) {
        0 == getResult() && (e = byteArray2Hex(getUpPBytes(0, upPLength())),
        t(e))
    }, function(e) {
        n(e),
        void 0
    })
}
function getNewICCTag(e, t, n, r, o) {
    getICCTag(e, t, n).then(function(e) {
        0 == getResult() && (e = byteArray2Hex(getUpPBytes(0, upPLength())),
        r(e))
    }, function(e) {
        o(e),
        void 0
    })
}
function getICCTag(e, t, n) {
    new Array;
    var r = "00";
    r += byteArray2Hex(intToHex(e)),
    r += byteArray2Hex(intToHex(e)),
    r += byteArray2Hex(intToHex(t)),
    CommandDownlink2(22, 81, 5, hexStr2Bytes((r += n = isEmpty(n) ? "00" : n).trim()));
    r = getDownPBytes();
    return void 0,
    startSysSession(new Uint8Array(r).buffer, null, 5)
}
function analysisEmvResult(e) {
    void 0;
    var t = new Array;
    if (null == e || 0 == e.length)
        return t;
    var n = 0;
    n++,
    encMode = e[n++];
    var r = new Array(1);
    r[0] = e[n++];
    var o = byteArray2Hex(r)
      , a = new Array(1);
    a[0] = e[n++];
    var s = byteArray2Hex(a)
      , i = new Array(1);
    i[0] = e[n++];
    var u = byteArrayToInt(i)
      , l = new Array(u);
    arrCopyArr(e, 5, l, 0, u);
    var c = byteArray2Hex(l);
    n += u;
    var y = e[n++];
    arrCopyArr(e, n, l = new Array(y), 0, y);
    r = byteArray2Hex(l);
    n += y;
    a = new Array(2);
    a[0] = e[n],
    a[1] = e[n + 1];
    i = byteArrayToInt(a);
    arrCopyArr(e, n += 2, l = new Array(i), 0, i);
    u = byteArray2Hex(l),
    y = "";
    return (n += i) < e.length && (u = (a = 2 == (a = byteArray2Hex(l = intToHex(i))).length ? "00" + a : a) + u,
    a = e.length - n,
    arrCopyArr(e, n, l = new Array(a), 0, a),
    y = byteArray2Hex(l),
    0),
    u += y,
    t.push(o),
    t.push(s),
    t.push(c),
    t.push(r),
    t.push(u),
    void 0,
    t
}
function anlysDataCommon(e, t) {
    var n = new Array;
    if (0 == encMode || 16 == encMode || 38 == encMode || 48 == encMode)
        return n.push(t),
        n;
    var r = Str2Bytes(t)
      , o = r.length
      , a = 0
      , s = new Array(2);
    s[0] = r[a],
    s[1] = r[a + 1];
    var i = byteArrayToInt(s);
    a += 2;
    var u = new Array(i);
    arrCopyArr(r, a, u, 0, i);
    var l = byteArray2Hex(u);
    if (o <= (a += i))
        return n.push(l),
        n;
    a += 2;
    var c = r[a++]
      , y = new Array(c);
    arrCopyArr(r, a, y, 0, c);
    var g = byteArray2Hex(y);
    a += c;
    var m = r[a++];
    arrCopyArr(r, a, y = new Array(m), 0, m);
    var d = byteArray2Hex(y);
    a += m;
    var p = r[a++];
    arrCopyArr(r, a, y = new Array(p), 0, p);
    var C = byteArray2Hex(y);
    a += p;
    var A = r[a++];
    arrCopyArr(r, a, y = new Array(A), 0, A);
    var f = ab2str(y);
    a += A;
    var D = r[a++];
    arrCopyArr(r, a, y = new Array(D), 0, D);
    var R = ab2str(y);
    a += D;
    var E = r[a++];
    arrCopyArr(r, a, y = new Array(E), 0, E);
    var _ = ab2str(y);
    a += E;
    t = r[a++];
    arrCopyArr(r, a, y = new Array(t), 0, t);
    s = ab2str(y);
    a += t;
    u = r[a++],
    i = ab2str(y);
    a += u;
    c = r[a++];
    arrCopyArr(r, a, y = new Array(c), 0, c);
    m = byteArray2Hex(y);
    a += c;
    p = r[a++];
    arrCopyArr(r, a, y = new Array(p), 0, p);
    A = byteArray2Hex(y);
    a += p;
    D = r[a++];
    arrCopyArr(r, a, y = new Array(D), 0, D);
    E = byteArray2Hex(y),
    t = "",
    u = "";
    (a += D) < o && (T = r[a++],
    arrCopyArr(r, a, y = new Array(T), 0, T),
    t = byteArray2Hex(y),
    a += T),
    a < o && (P = r[a++],
    arrCopyArr(r, a, y = new Array(P), 0, P),
    u = byteArray2Hex(y),
    a += P);
    c = "";
    a < o && (I = r[a++],
    arrCopyArr(r, a, y = new Array(I), 0, I),
    c = ab2str(y),
    a += I);
    var p = ""
      , D = ""
      , T = "";
    a < o && (p = r[a++] + "",
    D = r[a++] + "",
    T = r[a++] + "");
    var P = "";
    a < o && (S = r[a++],
    arrCopyArr(r, a, y = new Array(S), 0, S),
    P = byteArray2Hex(y),
    a += S);
    var S, I = "";
    return a < o && (y = r[a++],
    arrCopyArr(r, a, S = new Array(y), 0, y),
    I = byteArray2Hex(S),
    a += y),
    a < o && (o = r[a++],
    arrCopyArr(r, a, r = new Array(o), 0, o),
    byteArray2Hex(r),
    a += o),
    n.push(f),
    n.push(R),
    n.push(_),
    n.push(i),
    n.push(s),
    n.push(p),
    n.push(D),
    n.push(T),
    n.push(g),
    n.push(d),
    n.push(C),
    n.push(m),
    n.push(t),
    n.push(u),
    n.push(c),
    n.push(P),
    n.push(l),
    n.push(I),
    n.push(A),
    n.push(E),
    void 0,
    n
}
function EMVStart(e) {
    void 0;
    var t = 19 + mTradeAmount.length + 1 + mCashbackAmount.length + 2 + 1
      , n = new Array(t)
      , r = 0;
    e == EmvOption.START ? n[r++] = 0 : e == EmvOption.START_WITH_FORCE_ONLINE ? n[r++] = 1 : e == EmvOption.START_WITH_FORCE_PIN ? n[r++] = 2 : e == EmvOption.START_WITH_FORCE_ONLINE_FORCE_PIN && (n[r++] = 3),
    n[r++] = hexStr2Bytes(mTradeType)[0];
    var o = getFormatDateyyyyMMddHHmmss();
    arrCopyArr(t = mTradeAmount.length <= 8 ? hexStr2Bytes(o + "FF") : hexStr2Bytes(o + "06"), 0, n, r, t.length),
    r += t.length;
    e = "",
    e = 8 < mTradeAmount.length ? "FFFFFFFFFFFF" : "FFFFFFFF",
    o = 0;
    return isEmpty(mTradeAmount) || (o = mTradeAmount.length),
    arrCopyArr(t = hexStr2Bytes(e = e.substring(0, e.length - o) + mTradeAmount), 0, n, r, t.length),
    r += t.length,
    e = 8 < mTradeAmount.length ? "" : "0000",
    arrCopyArr(t = hexStr2Bytes(e += mCurrencyCode = 3 == mCurrencyCode.length ? "0" + mCurrencyCode : mCurrencyCode), 0, n, r, t.length),
    r += t.length,
    n[r++] = mTradeAmount.length + 1,
    arrCopyArr(getUTF8Bytes(mTradeAmount), 0, n, r, mTradeAmount.length),
    r += mTradeAmount.length,
    n[r++] = 0,
    !isEmpty(mCashbackAmount) && 0 < mCashbackAmount.length ? (n[r++] = byte(mCashbackAmount.length()),
    arrCopyArr(getUTF8Bytes(mCashbackAmount), 0, n, r, mCashbackAmount.length),
    r += mCashbackAmount.length) : (n[r++] = 1,
    n[r++] = 48),
    arrCopyArr(intToHex(20), 0, n, r++, 1),
    n
}
DoTrade.prototype.doTrade = function(e, t) {
    doTrade(e, t)
}
,
DoTrade.prototype.sendPin = function(e) {
    sendPin(e)
}
,
DoTrade.prototype.doCheckCard = function(e, t) {
    setDoTradeMode(DoTradeMode.CHECK_CARD_NO_IPNUT_PIN),
    doTrade(e, t)
}
,
DoTrade.prototype.selectEmvApp = function(e) {
    void 0,
    EMVSelectEMVApp(e)
}
,
DoTrade.prototype.sendOnlineProcessResult = function(e) {
    void 0,
    EMVGoOnLine(e)
}
,
DoTrade.prototype.getNFCBatchData = function(e, t) {
    return getNFCBatchData(e, t)
}
,
DoTrade.prototype.getNewICCTag = function(e, t, n, r, o) {
    return getNewICCTag(e, t, n, r, o)
}
,
DoTrade.prototype.getICCTag = function(e, t, n) {
    return getICCTag(e, t, n)
}
;
var platformPos, mOperationType, EMVManager = function(e) {
    writeObj(e),
    mListener = e,
    void 0,
    writeObj(this)
}, platformFlag = 1;
EMVManager.prototype.updateEmvAPP = function(e, t) {
    updateEmvAPP(e, t)
}
,
EMVManager.prototype.updateEmvCAPK = function(e, t) {
    updateEmvCAPK(e, t)
}
,
EMVManager.prototype.updateEmvConfig = function(e, t) {
    updateEmvConfig(e, t)
}
,
EMVManager.prototype.updateEMVConfigByXml = function(e) {
    updateEMVConfigByXml(e)
}
;
var WRITE_MAX_LEN = 100;
function updateEmvAPP(e, t) {
    null != e && (isEmpty(t) && (t = ""),
    CommandDownlink2(23, 160, 15, hexStr2Bytes(updateEMV(mOperationType = e, t))),
    t = getDownPBytes(),
    void 0,
    startSession(new Uint8Array(t).buffer, onReturnUpdateEmvAPPResult, 5))
}
function updateEMV(e, t) {
    var n = "";
    switch (e) {
    case EMVDataOperation.CLEAR:
        n = "01";
        break;
    case EMVDataOperation.ADD:
        n = "02" + t;
        break;
    case EMVDataOperation.DELETE:
        n = "03" + t;
        break;
    case EMVDataOperation.ATTAINLIST:
        n = "04";
        break;
    case EMVDataOperation.UPDATE:
        n = "05" + t;
        break;
    case EMVDataOperation.GETEMV:
        n = "06" + t
    }
    return n
}
function onReturnUpdateEmvAPPResult(e) {
    if (void 0,
    0 == getResult())
        if (mOperationType == EMVDataOperation.ATTAINLIST) {
            for (var t, n = byteArray2Hex(getUpPBytes(0, upPLength())), r = n.substring(0, 2), o = 0; o < n.length; o++)
                1 == n.search("1000000000000000000000000000000000") && (t = parseInt(r, 16) - 1,
                n = n.replace("1000000000000000000000000000000000", ""),
                r = t < 17 ? "0" + toHex(t).substr(2, 2).toUpperCase() : toHex(t).substr(2, 2).toUpperCase());
            n = r + n.slice(2),
            void 0,
            mListener.onReturnGetEMVListResult(n)
        } else
            mOperationType == EMVDataOperation.GETEMV ? (e = byteArray2Hex(getUpPBytes(0, upPLength())),
            void 0,
            mListener.onReturnGetEMVListResult(e)) : (void 0,
            mListener.onReturnUpdateEMVResult(!0));
    else
        void 0,
        mListener.onReturnUpdateEMVResult(!1);
    mOperationType = null
}
function updateEmvCAPK(e, t) {
    null != e && e != EMVDataOperation.UPDATE && (isEmpty(t) && (t = ""),
    CommandDownlink2(23, 161, 15, hexStr2Bytes(updateEMV(mOperationType = e, t))),
    t = getDownPBytes(),
    void 0,
    startSession(new Uint8Array(t).buffer, onReturnUpdateEmvCAPKResult, 5))
}
function onReturnUpdateEmvCAPKResult(e) {
    if (void 0,
    0 == getResult())
        if (mOperationType == EMVDataOperation.ATTAINLIST) {
            for (var t, n = byteArray2Hex(getUpPBytes(0, upPLength())), r = n.substring(0, 2), o = 0; o < n.length; o++)
                1 == n.search("1000000000000000000000000000000000") && (t = parseInt(r, 16) - 1,
                n = n.replace("1000000000000000000000000000000000", ""),
                r = t < 17 ? "0" + toHex(t).substr(2, 2).toUpperCase() : toHex(t).substr(2, 2).toUpperCase());
            n = r + n.slice(2),
            void 0,
            mListener.onReturnGetEMVListResult(n)
        } else
            mOperationType == EMVDataOperation.GETEMV ? (e = byteArray2Hex(getUpPBytes(0, upPLength())),
            void 0,
            mListener.onReturnGetEMVListResult(e)) : (void 0,
            mListener.onReturnUpdateEMVRIDResult(!0));
    else
        void 0,
        mListener.onReturnUpdateEMVRIDResult(!1);
    mOperationType = null
}
var mEmvAppCfg = ""
  , mEmvCapkCfg = "";
function updateEmvConfig(e, t) {
    isEmpty(e) || e.length % 2 != 0 || isEmpty(t) || t.length % 2 != 0 || (mOffset = 0,
    mCustomParamString = "",
    mCustomParam = null,
    mEmvAppCfg = e,
    mEmvCapkCfg = t,
    doUpdateCustomParam(CustomParam.CUSTOM_PARAM_SEG_EMV_APP, 0, mEmvAppCfg))
}
var mCustomParam, mOffset = 0, mCustomParamString = "";
function doUpdateCustomParam(e, t, n) {
    mOffset = t,
    mCustomParam = e;
    n = (mCustomParamString = n).length / 2;
    startSendCustomParam(OperationLogo.WRITE, e, n).then(function(e) {
        if (0 == getResult())
            return void 0,
            updateCustomParam()
    }, function(e) {
        void 0
    })
}
function startSendCustomParam(e, t, n) {
    var r = "";
    e == OperationLogo.READ ? r += "00" : r += "01",
    t == CustomParam.CUSTOM_PARAM_SEG_EMV_APP ? r += "00" : t == CustomParam.CUSTOM_PARAM_SEG_EMV_CAPK ? r += "01" : t == CustomParam.CUSTOM_PARAM_SEG_CUSTOM1 ? r += "02" : t == CustomParam.CUSTOM_PARAM_SEG_CUSTOM2 && (r += "03");
    var o = n >> 16 & 255
      , e = n >> 8 & 255
      , t = 255 & n;
    r += byteArray2Hex(intToHex(n >> 24)),
    r += byteArray2Hex(intToHex(o)),
    r += byteArray2Hex(intToHex(e)),
    r += byteArray2Hex(intToHex(t)),
    CommandDownlink2(22, 144, 10, hexStr2Bytes(r += "10"));
    r = getDownPBytes();
    return void 0,
    startSysSession(new Uint8Array(r).buffer, null, 5)
}
var mUpdateCustomParamResolve = function() {
    void 0
}
  , mUpdateCustomParamReject = function() {
    void 0
};
function updateCustomParam() {
    var e = hexStr2Bytes(mCustomParamString)
      , t = mCustomParamString.length / 2
      , n = mOffset
      , r = n >> 16 & 255
      , o = n >> 8 & 255
      , a = 255 & n
      , s = byteArray2Hex(intToHex(n >> 24));
    s += byteArray2Hex(intToHex(r)),
    s += byteArray2Hex(intToHex(o)),
    s += byteArray2Hex(intToHex(a)),
    a = 255 & (n = WRITE_MAX_LEN < (n = t - mOffset) ? WRITE_MAX_LEN : n),
    s += byteArray2Hex(intToHex(n >> 8 & 255)),
    s += byteArray2Hex(intToHex(a));
    a = new Array(n);
    arrCopyArr(e, mOffset, a, 0, n),
    CommandDownlink2(22, 160, 15, hexStr2Bytes(s += byteArray2Hex(a)));
    s = getDownPBytes();
    void 0,
    mOffset += n,
    startSession(new Uint8Array(s).buffer, onUpdateCustomParam, 5)
}
function onUpdateCustomParam(e) {
    void 0,
    0 == getResult() ? (e = mCustomParamString.length / 2,
    mOffset < e ? (void 0,
    updateCustomParam()) : (void 0,
    stopSendCustomParam(OperationLogo.WRITE, mCustomParam))) : mListener.onReturnCustomConfigResult(!1, "")
}
function stopSendCustomParam(e, t) {
    void 0;
    var n = "";
    e == OperationLogo.READ ? n += "00" : n += "01",
    t == CustomParam.CUSTOM_PARAM_SEG_EMV_APP ? n += "00" : t == CustomParam.CUSTOM_PARAM_SEG_EMV_CAPK ? n += "01" : t == CustomParam.CUSTOM_PARAM_SEG_CUSTOM1 ? n += "02" : t == CustomParam.CUSTOM_PARAM_SEG_CUSTOM2 && (n += "03"),
    CommandDownlink2(22, 145, 15, hexStr2Bytes(n));
    n = getDownPBytes();
    void 0,
    t == CustomParam.CUSTOM_PARAM_SEG_EMV_APP ? startSysSession(new Uint8Array(n).buffer, null, 5).then(function(e) {
        doUpdateCustomParam(CustomParam.CUSTOM_PARAM_SEG_EMV_CAPK, 0, mEmvCapkCfg)
    }, function(e) {}) : (startSysSession(new Uint8Array(n).buffer, null, 5),
    mListener.onReturnCustomConfigResult(!0, ""))
}
function stopSendCustomParam2(e, t) {
    void 0;
    var n = "";
    e == OperationLogo.READ ? n += "00" : n += "01",
    t == CustomParam.CUSTOM_PARAM_SEG_EMV_APP ? n += "00" : t == CustomParam.CUSTOM_PARAM_SEG_EMV_CAPK ? n += "01" : t == CustomParam.CUSTOM_PARAM_SEG_CUSTOM1 ? n += "02" : t == CustomParam.CUSTOM_PARAM_SEG_CUSTOM2 && (n += "03"),
    CommandDownlink2(22, 145, 10, hexStr2Bytes(n));
    n = getDownPBytes();
    return void 0,
    startSysSession(new Uint8Array(n).buffer, null, 5)
}
var config, OperationLogo = {
    READ: 0,
    WRITE: 1
}, CustomParam = {};
function updateEMVConfigByXml(e) {
    void 0,
    config = analyseEMVData(e),
    void 0,
    null == config || config.length < 1 ? mListener.onReturnCustomConfigResult(!1, "xml file is empty") : judgePlatform().then(function(e) {
        if (0 == getResult()) {
            var t = 0
              , t = hex2Ascii(byteArray2Hex(getUpPBytes(1, getUpPByte(+t))));
            if (void 0,
            platformPos = "4.0" <= t ? 1 : 0,
            void 0,
            platformPos != platformFlag)
                return void 0,
                void void 0;
            checkConfigContent(config, platformPos)
        }
    }, function(e) {
        void 0,
        void 0
    })
}
function analyseEMVData(e) {
    if (platformFlag = 1,
    void 0,
    null != e) {
        new Array;
        var t, n = e.split("\n"), r = new Array, o = "", a = new Array;
        void 0;
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
    void 0
}
function generateAppOrCapk(e, t) {
    var n, r = "", e = 0 == e ? "APP" : "CAPK";
    for (n in t)
        r += t[n];
    e = new resolvableInterface(e,r);
    return void 0,
    e
}
function parseLine(e) {
    var t = e.indexOf(">")
      , n = e.indexOf("<")
      , r = e.indexOf("<", t)
      , o = e.substring(n + 1, t);
    if ("DF72" == o.toUpperCase() && (platformFlag = 0,
    void 0),
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
    return void 0,
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
        void 0,
        24576 < totalCount)
            return void 0,
            void void 0
    } else if (totalCount = (aidByteCountSize = 670 * aidByteCount) + (capkByteCountSize = 288 * capkByteCount),
    void 0,
    32768 < totalCount)
        return void 0,
        void void 0;
    sendAppAndCapkSizeToPos(aidByteCountSize, CustomParam.CUSTOM_PARAM_SEG_EMV_APP)
}
function sendAppAndCapkSizeToPos(e, t) {
    startSendCustomParam(OperationLogo.WRITE, t, e).then(function(e) {
        0 == getResult() ? (void 0,
        stopSendCustomParam2(OperationLogo.WRITE, t).then(function(e) {
            0 == getResult() ? void 0 : void 0,
            t == CustomParam.CUSTOM_PARAM_SEG_EMV_APP ? (void 0,
            sendAppAndCapkSizeToPos(capkByteCountSize, CustomParam.CUSTOM_PARAM_SEG_EMV_CAPK)) : t == CustomParam.CUSTOM_PARAM_SEG_EMV_CAPK && (void 0,
            emvRsult = !(capkCleFlag = appCleFlag = !1),
            msg = new String,
            updateEmvCOnfigRunnable(config, 0))
        }, function(e) {
            void 0,
            void 0
        })) : void 0
    }, function(e) {
        void 0,
        void 0
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
        void 0,
        updateEmvCOnfigRunnable(n, ++r)
    }, function(e) {
        void 0,
        void 0
    }) : updateEmvAPP2(EMVDataOperation.CLEAR, "").then(function(e) {
        0 == getResult() ? (appCleFlag = !0,
        void 0,
        updateEmvAPP2(EMVDataOperation.ADD, n[r].data).then(function(e) {
            if (0 != getResult()) {
                emvRsult = !1;
                var t = n[r].data.substring(4, 6)
                  , t = n[r].data.substring(6, 5 + t);
                return msg = msg + "AID:" + t + "fail",
                mListener.onReturnCustomConfigResult(emvRsult, msg.toString()),
                !0
            }
            void 0,
            updateEmvCOnfigRunnable(n, ++r)
        }, function(e) {
            void 0,
            void 0
        })) : (emvRsult = !1,
        msg += "AID clean fail",
        mListener.onReturnCustomConfigResult(emvRsult, msg.toString()))
    }, function(e) {
        void 0,
        void 0
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
        void 0,
        updateEmvCOnfigRunnable(n, ++r)
    }, function(e) {
        void 0,
        void 0
    }) : updateEmvCAPK2(EMVDataOperation.CLEAR, "").then(function(e) {
        0 == getResult() ? (capkCleFlag = !0,
        void 0,
        updateEmvCAPK2(EMVDataOperation.ADD, n[r].data).then(function(e) {
            if (0 != getResult()) {
                emvRsult = !1;
                var t = n[r].data.substring(4, 6)
                  , t = n[r].data.substring(6, 5 + t);
                return msg = msg + "capk:" + t + "fail",
                mListener.onReturnCustomConfigResult(emvRsult, msg.toString()),
                !0
            }
            void 0,
            updateEmvCOnfigRunnable(n, ++r)
        }, function(e) {
            void 0,
            void 0
        })) : (emvRsult = !1,
        msg += "CAPK clean fail",
        mListener.onReturnCustomConfigResult(emvRsult, msg.toString()))
    }, function(e) {
        void 0,
        void 0
    }))) : mListener.onReturnCustomConfigResult(emvRsult, msg.toString())
}
function updateEmvAPP2(e, t) {
    if (null != e && e != EMVDataOperation.UPDATE) {
        CommandDownlink2(23, 160, 15, hexStr2Bytes(updateEMV(mOperationType = e, t)));
        t = getDownPBytes();
        return void 0,
        startSysSession(new Uint8Array(t).buffer, null, 5)
    }
}
function updateEmvCAPK2(e, t) {
    if (null != e && e != EMVDataOperation.UPDATE) {
        CommandDownlink2(23, 161, 15, hexStr2Bytes(updateEMV(mOperationType = e, t)));
        t = getDownPBytes();
        return void 0,
        startSysSession(new Uint8Array(t).buffer, null, 5)
    }
}
var mParas, GetMifareCardInfo = function(e) {
    writeObj(e),
    mListener = e,
    void 0,
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
    void 0,
    startSession(new Uint8Array(e).buffer, onSearchMifareCardResult, t)
}
function onSearchMifareCardResult(e) {
    void 0;
    var t, n, r, o, a, s, i, u = 1;
    0 == getResult() ? "01" == mParas ? (i = intToHexValue(getUpPBytes(u++, 1)),
    t = intToHexValue(getUpPBytes(u++, 1)),
    void 0,
    n = byteArray2Hex(getUpPBytes(u, 2)),
    r = byteArray2Hex(getUpPBytes(u += 2, 1)),
    void 0,
    u += 1,
    o = getUpPBytes(u++, 1),
    a = byteArray2Hex(getUpPBytes(u, o)),
    u += o,
    s = "",
    0 != (e = getUpPBytes(u++, 1)) && (s = byteArray2Hex(getUpPBytes(u, e))),
    void 0,
    (s = {
        cardType: t,
        ATQA: n,
        SAK: r,
        cardUidLen: o + "",
        cardUid: a,
        cardAtsLen: e + "",
        cardAts: s
    }).status = "00" == i ? "poll card success!" : "poll card fail!",
    mListener.onSearchMifareCardResult(s)) : "0E" == mParas && ("00" == (i = intToHexValue(getUpPBytes(u++, 1))) ? mListener.onFinishMifareCardResult(!0) : mListener.onFinishMifareCardResult(!1)) : 64 == getResult() ? mListener.onSearchMifareCardCanceled() : ("01" == mParas && mListener.onSearchMifareCardResult(null),
    "0E" == mParas && mListener.onFinishMifareCardResult(!1))
}
function getQPosInfo() {
    CommandDownlink(17, 48, 5);
    var e = getDownPBytes();
    void 0,
    startSession(new Uint8Array(e).buffer, onQposInfoResult, 5)
}
function onQposInfoResult(e) {
    void 0,
    0 == getResult() ? anlycPosInfo() : void 0
}
function getQPosId() {
    CommandDownlink(16, 0, 5);
    var e = getDownPBytes();
    void 0,
    startSession(new Uint8Array(e).buffer, onQposIdResult, 5)
}
function onQposIdResult(e) {
    void 0,
    0 == getResult() ? anlycPosId() : void 0
}
function setShutDownTime(e) {
    65535 < e || (CommandDownlink2(32, 208, 5, intToHex(e)),
    e = getDownPBytes(),
    void 0,
    startSession(new Uint8Array(e).buffer, onSetShutDownTime, 5))
}
function onSetShutDownTime(e) {
    void 0,
    0 == getResult() ? void 0 : void 0
}
function getShutDownTime() {
    CommandDownlink(32, 224, 5);
    var e = getDownPBytes();
    void 0,
    startSession(new Uint8Array(e).buffer, onGetShutDownTime, 5)
}
function onGetShutDownTime(e) {
    void 0,
    0 == getResult() ? (e = byteArray2Hex(getUpPBytes(0, upPLength())),
    void 0) : void 0
}
function setSleepModeTime(e) {
    if (!(4294967295 < e)) {
        var t = intToHex(e)
          , n = new Array(4);
        switch (t.length) {
        case 1:
            n[0] = 0,
            n[1] = 0,
            n[2] = 0,
            n[3] = t[0];
            break;
        case 2:
            n[0] = 0,
            n[1] = 0,
            n[2] = t[0],
            n[3] = t[1];
            break;
        case 3:
            n[0] = 0,
            n[1] = t[0],
            n[2] = t[1],
            n[3] = t[2];
            break;
        case 4:
            n = t
        }
        CommandDownlink2(34, 112, 5, n);
        e = getDownPBytes();
        void 0,
        startSession(new Uint8Array(e).buffer, onSetSleepModeTime, 5)
    }
}
function onSetSleepModeTime(e) {
    void 0,
    0 == getResult() ? void 0 : void 0
}
function getSleepModeTime() {
    CommandDownlink(34, 128, 10);
    var e = getDownPBytes();
    void 0,
    startSession(new Uint8Array(e).buffer, onGetSleepModeTime, 5)
}
function onGetSleepModeTime(e) {
    void 0,
    0 == getResult() ? void 0 : void 0
}
GetMifareCardInfo.prototype.pollOnMifareCard = function(e) {
    pollOnMifareCard(e)
}
,
GetMifareCardInfo.prototype.finishMifareCard = function(e) {
    finishMifareCard(e)
}
;
var do_trade_timeout, mName, keyManager = function(e) {
    writeObj(e),
    mListener = e,
    void 0,
    writeObj(this)
}, isLcdClosed = !1, isLcdshowing = !1, lcdShowCustomDisplayStr = "", LcdModeAlign = {
    LCD_MODE_ALIGNLEFT: 1,
    LCD_MODE_ALIGNRIGHT: 2,
    LCD_MODE_ALIGNCENTER: 3
}, CustomInputOperateType = {
    isNumber: 1,
    Other: 2
}, CustomInputDisplayType = {
    PlainText: 1,
    Other: 2
};
function doInputCustomStr(e, t, n, r, o, a) {
    mName = o;
    o = "0000";
    e == CustomInputOperateType.isNumber ? o += "00" : o += "01",
    e == CustomInputDisplayType.PlainText ? o += "01" : o += "00",
    o += intToHexValue(n),
    o += intToHexValue(r.length + 1),
    o += r,
    CommandDownlink2(16, 192, a, hexStr2Bytes(o += "00"));
    o = getDownPBytes();
    startSession(new Uint8Array(o).buffer, onReturnDoInputCustomStr, a)
}
function onReturnDoInputCustomStr(e) {
    var t;
    void 0,
    0 == getResult() ? (t = hexStr2Bytes(e.substring(18, e.length - 2)),
    void 0,
    e = t[2],
    void 0,
    t = byteArray2Hex(getBytesFromArr(3, e, t)),
    void 0,
    mListener.onReturnDoInputCustomStr(hex2Ascii(t), mName)) : mListener.onReturnDoInputCustomStr(null, mName)
}
function lcdShowCustomDisplay(e, t, n) {
    isLcdshowing && lcdShowCloseDisplay(),
    isLcdClosed = !(isLcdshowing = !0),
    do_trade_timeout = n;
    n = "00",
    n = e == LcdModeAlign.LCD_MODE_ALIGNLEFT ? "00" : e == LcdModeAlign.LCD_MODE_ALIGNRIGHT ? "20" : e == LcdModeAlign.LCD_MODE_ALIGNCENTER ? "40" : "00";
    null == e && (n = "80");
    t = hexStr2Bytes(lcdShowCustomDisplayStr = null != t && "" != t ? n + t + "00" : "");
    CommandDownlink2(65, 16, do_trade_timeout, t);
    t = getDownPBytes();
    startSession(new Uint8Array(t).buffer, onLcdShowCustomDisplay, do_trade_timeout)
}
function onLcdShowCustomDisplay(e) {
    if (0 == getResult()) {
        for (var t = 0; !isLcdClosed && t < 1e3 * do_trade_timeout; )
            sleep(1),
            t++;
        isLcdshowing = !1,
        isLcdClosed || mListener.onLcdShowCustomDisplay(!0)
    } else
        mListener.onLcdShowCustomDisplay(!1)
}
function lcdShowCloseDisplay() {
    var e;
    isLcdshowing && (CommandDownlink2(65, 16, 1, hexStr2Bytes(lcdShowCustomDisplayStr = "")),
    e = getDownPBytes(),
    isLcdshowing = !(isLcdClosed = !0),
    startSession(new Uint8Array(e).buffer, onLcdShowCustomDisplay, do_trade_timeout))
}
function setMasterKey(e, t, n, r) {
    10 < n || (CommandDownlink2(16, 226, r, hexStr2Bytes(e + t + "0" + n)),
    n = getDownPBytes(),
    void 0,
    startSession(new Uint8Array(n).buffer, onSetMasterKeyResult, 5))
}
function onSetMasterKeyResult(e) {
    void 0,
    0 == getResult() ? mListener.onReturnSetMasterKeyResult(!0) : mListener.onReturnSetMasterKeyResult(!1)
}
function udpateWorkKey(e, t, n, r, o, a, s, i) {
    10 <= s || (CommandDownlink2(16, 240, i, hexStr2Bytes(setWorkKeyStr(e, t, n, r, o, a, s))),
    s = getDownPBytes(),
    void 0,
    startSession(new Uint8Array(s).buffer, onUpdateWorkKeyResult, 5))
}
function setWorkKeyStr(e, t, n, r, o, a, s) {
    var i = ""
      , u = 0;
    isEmpty(e) || isEmpty(t) ? t = e = "" : (u = e.length + t.length,
    u /= 2),
    i += toHex(u).substr(2, 2) + e + t;
    t = 0;
    isEmpty(n) || isEmpty(r) ? r = n = "" : (t = n.length + r.length,
    t /= 2),
    i += toHex(t).substr(2, 2) + n + r;
    r = 0;
    return isEmpty(o) || isEmpty(a) ? a = o = "" : (r = o.length + a.length,
    r /= 2),
    i += toHex(r).substr(2, 2) + o + a,
    void 0,
    i + "0" + s
}
function onUpdateWorkKeyResult(e) {
    void 0,
    0 == getResult() ? mListener.onRequestUpdateWorkKeyResult(!0) : mListener.onRequestUpdateWorkKeyResult(!1)
}
function doUpdateIPEKOperation(e, t, n, r, o, a, s, i, u, l) {
    10 <= e || (CommandDownlink2(16, 242, 5, hexStr2Bytes("00000" + e + t + n + r + o + a + s + i + u + l)),
    l = getDownPBytes(),
    void 0,
    startSession(new Uint8Array(l).buffer, onUpdateIPEKResult, 5))
}
function onUpdateIPEKResult(e) {
    0 == getResult() ? mListener.onReturnUpdateIPEKResult(!0) : mListener.onReturnUpdateIPEKResult(!1)
}
keyManager.prototype.setMasterKey = function(e, t, n, r) {
    setMasterKey(e, t, n, r)
}
,
keyManager.prototype.udpateWorkKey = function(e, t, n, r, o, a, s, i) {
    udpateWorkKey(e, t, n, r, o, a, s, i)
}
,
keyManager.prototype.udpateWorkKey = function(e, t, n, r, o, a, s, i) {
    udpateWorkKey(e, t, n, r, o, a, s, i)
}
,
keyManager.prototype.doInputCustomStr = function(e, t, n, r, o, a) {
    doInputCustomStr(e, t, n, r, o, a)
}
,
keyManager.prototype.lcdShowCustomDisplay = function(e, t, n) {
    lcdShowCustomDisplay(e, t, n)
}
,
keyManager.prototype.lcdShowCloseDisplay = function() {
    lcdShowCloseDisplay()
}
,
keyManager.prototype.doUpdateIPEKOperation = function(e, t, n, r, o, a, s, i, u, l) {
    doUpdateIPEKOperation(e, t, n, r, o, a, s, i, u, l)
}
;
var NfcApdu = function(e) {
    writeObj(e),
    mListener = e,
    void 0,
    writeObj(this)
};
function onApduResult(e) {
    var t, n, r;
    void 0,
    0 == getResult() && (r = 0) != (t = getUpPByte(r++)) ? (n = getUpPByte(r++),
    e = getUpPByte(r++),
    17 == t && (n += 255,
    e += 255),
    r = byteArray2Hex(getUpPBytes(3, e)),
    void 0,
    mListener.onReturnApduResult(!0, r, n)) : mListener.onReturnApduResult(!1, null, 0)
}
function onReturnPowerOffNFCResult(e) {
    void 0,
    0 == getResult() ? mListener.onReturnPowerOffNFCResult(!0) : mListener.onReturnPowerOffNFCResult(!1)
}
function onPowerOnNFCResult(e) {
    var t, n, r, o;
    void 0,
    0 == getResult() && (o = 0) != (t = getUpPByte(o++)) ? (n = byteArray2Hex(getUpPBytes(1, 10)),
    o += 10,
    r = getUpPByte(o++),
    o = byteArray2Hex(getUpPBytes(13, e = getUpPByte(o++))),
    void 0,
    mListener.onReturnPowerOnNFCResult(!0, n, o, r)) : mListener.onReturnPowerOnNFCResult(!1, null, null, 0)
}
NfcApdu.prototype.sendApduByNFC = function(e, t) {
    e = hexStr2Bytes(e);
    void 0,
    CommandDownlink2(23, 16, t, e);
    e = getDownPBytes();
    void 0,
    startSession(new Uint8Array(e).buffer, onApduResult, 5)
}
,
NfcApdu.prototype.powerOffNFC = function(e) {
    CommandDownlink(23, 32, e);
    e = getDownPBytes();
    void 0,
    startSession(new Uint8Array(e).buffer, onReturnPowerOffNFCResult, 5)
}
,
NfcApdu.prototype.powerOnNFC = function(e) {
    CommandDownlink2(23, 0, e, hexStr2Bytes("00"));
    e = getDownPBytes();
    void 0,
    startSession(new Uint8Array(e).buffer, onPowerOnNFCResult, 5)
}
;
var TCKEY = [0, 0, 0, 0, 0, 0, 0, 0]
  , dataLen = 0
  , HEADER_LEN = 4
  , CRC_LEN = 1
  , OVERHEAD_LEN = 5
  , DATA_FIELD_HEADER_LEN = 5
  , bytes = new Array;
function packet(e) {
    e = OVERHEAD_LEN + DATA_FIELD_HEADER_LEN + (dataLen = e),
    (bytes = new Array(e))[1] = 0;
    e = intToHex(e - 4);
    1 == e.length ? bytes[2] = e[0] : (bytes[1] = e[0],
    bytes[2] = e[1]),
    bytes[0] = 77
}
function packet2(e) {
    arrCopyArr(e, 0, bytes = new Array(e.length), 0, e.length),
    dataLen = e.length - (OVERHEAD_LEN + DATA_FIELD_HEADER_LEN),
    void 0
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
    1 == t.length ? setPByte(4, t[0]) : (setPByte(3, t[0]),
    setPByte(4, t[1])),
    arrCopyArr(e, 0, bytes, HEADER_LEN + 5, e.length)
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
    for (var t = e[0], n = 1; n < e.length - 1; n++)
        t ^= e[n];
    return void 0,
    t
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
    if (8 == KEY.length)
        arrCopyArr(KEY, 0, TCKEY, 0, 8);
    else if (16 == KEY.length) {
        for (var e = new Array(8), t = 0; t < 8; t++)
            e[t] = byte(KEY[t] ^ KEY[t + 8]);
        arrCopyArr(e, 0, TCKEY, 0, 8),
        void 0
    } else
        void 0
}
function calMac(e, t) {
    var n = t + 1 + (8 - (t + 1) % 8)
      , r = new Array(n);
    arrCopyArr(e, 0, r, 0, t);
    for (var o = t; o < n; o++)
        r[o] = 0;
    for (var a = [0, 0, 0, 0, 0, 0, 0, 0], o = 0; o < n; o++)
        a[o % 8] = a[o % 8] ^ r[o];
    void 0;
    new Array;
    return void 0,
    a
}
var pinOperation = function(e) {
    writeObj(e),
    mListener = e,
    void 0,
    writeObj(this)
};
function setInputCsutomStr(e, t, n, r, o) {
    doGetPin(e, t, n, r, "", "", 0, o)
}
function getPin(e, t, n, r, o, a, s) {
    doGetPin(e, t, n, r, o, a, 0, s)
}
function doGetPin(e, t, n, r, o, a, s, i) {
    var u = "0000";
    u += byteArray2Hex(intToHex(e)) + byteArray2Hex(intToHex(t)) + byteArray2Hex(intToHex(n));
    isEmpty(r) ? (r = "",
    u += byteArray2Hex(intToHex(0)) + r) : u += byteArray2Hex(intToHex(getUTF8Bytes(r).length + 1)) + byteArray2Hex(toGbkBytes(r)) + "00";
    isEmpty(r) ? (o = "",
    u += byteArray2Hex(intToHex(0)) + o) : u += byteArray2Hex(intToHex(o.length)) + byteArray2Hex(getUTF8Bytes(o));
    isEmpty(r) ? (a = "",
    u += byteArray2Hex(intToHex(0)) + a) : u += byteArray2Hex(intToHex(a.length / 2)) + a,
    CommandDownlink2(16, 113, i, hexStr2Bytes(u += byteArray2Hex(intToHex(s))));
    u = getDownPBytes();
    void 0,
    startSession(new Uint8Array(u).buffer, onReturnGetPinResult, 5)
}
function onReturnGetPinResult(e) {
    var t, n, r, o;
    void 0,
    0 == getResult() ? (t = new Array,
    upPLength(),
    void 0,
    byteArray2Hex(getUpPBytes(n = 2, 2)),
    n += 2,
    r = byteArray2Hex(getUpPBytes(5, o = getUpPByte(n++))),
    n += o,
    e = getUpPByte(n++),
    o = byteArray2Hex(getUpPBytes(n, e)),
    n += e,
    t.push(r),
    t.push(o),
    mListener.onReturnGetPinResult(t),
    void 0) : (mListener.onReturnGetPinResult(null),
    void 0)
}
function pinKey_TDES(e, t, n, r) {
    var o;
    isEmpty(t) ? void 0 : (o = "0000",
    o += byteArray2Hex(intToHex(e)) + t,
    CommandDownlink2(17, 32, n, hexStr2Bytes(o += byteArray2Hex(intToHex(r)))),
    o = getDownPBytes(),
    void 0,
    startSession(new Uint8Array(o).buffer, onPinKey_TDES_Result, 5))
}
function onPinKey_TDES_Result(e) {
    void 0,
    0 == getResult() ? (byteArray2Hex(getAllBytes()),
    void 0) : void 0
}
pinOperation.prototype.setInputCsutomStr = function(e, t, n, r) {
    setInputCsutomStr("0", e, t, n, r)
}
;
var READ_BUF_MAX_SIZE = 10240
  , dataBuffer = new ArrayBuffer(READ_BUF_MAX_SIZE)
  , dataView = new DataView(dataBuffer)
  , read_offset = 0;
function clearReadbuffer() {
    for (var e = 0; e < read_offset; e++)
        dataView.setUint8(e, 0);
    read_offset = 0
}
function appendData(e) {
    for (var t = e, n = 0; n < t.byteLength; n++)
        dataView.setUint8(read_offset, t.getUint8(n)),
        read_offset++
}
function readBufferData() {
    var e = new ArrayBuffer(read_offset)
      , t = new DataView(e);
    return void 0,
    copyArr(dataBuffer, 0, e, 0, read_offset),
    t
}
function isCompleteInstruction() {
    var e, t, n = !1;
    return 77 == dataView.getUint8(0) && (e = dataView.getUint8(1),
    t = dataView.getUint8(2),
    (e - e % 16) / 16 * Math.pow(16, 3) + e % 16 * Math.pow(16, 2) + t + 4 <= read_offset && (n = !0)),
    n
}
var QPOSAnalyResult = function(e) {
    writeObj(e),
    mListener = e,
    void 0,
    writeObj(this)
};
function onAnalyQposInfoResult(e) {
    void 0,
    0 == getResult() ? (e = anlycPosInfo(),
    writeObj(this),
    mListener.onQposInfoResult(e)) : void 0
}
function onAnalyQposIdResult(e) {
    void 0,
    0 == getResult() ? (e = anlycPosId(),
    mListener.onQposIdResult(e)) : void 0
}
QPOSAnalyResult.prototype.getQPosId = function() {
    CommandDownlink(16, 0, 5);
    var e = getDownPBytes();
    startSession(new Uint8Array(e).buffer, onAnalyQposIdResult, 5)
}
,
QPOSAnalyResult.prototype.getQPosInfo = function() {
    CommandDownlink(17, 48, 5);
    var e = getDownPBytes();
    startSession(new Uint8Array(e).buffer, onAnalyQposInfoResult, 5)
}
,
QPOSAnalyResult.prototype.checkCmdId = function() {
    return checkCmdId()
}
;
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
    var e = !1
      , t = commandID();
    return void 0,
    t == CmdId.CMDID_COMPLETED || t == CmdId.CMDID_COMPLETED_ENCRY ? e = !0 : t == CmdId.CMDID_INPUT_PIN_ING ? (e = !0,
    !(0 < upPLength()) || 0 == getUpPByte(0) ? mListener.onRequestDisplay(Display.INPUT_PIN_ING) : mListener.onRequestDisplay(Display.INPUT_OFFLINE_PIN_ONLY)) : t == CmdId.CMDID_MAG_TO_ICC_TRADE ? (e = !0,
    mListener.onRequestDisplay(Display.MAG_TO_ICC_TRADE)) : t == CmdId.CMDID_SEND_IC_CARDNO || t == CmdId.CMDID_EMV_KERNEL_PC || t == CmdId.CMDID_CHECK_HAVE_CARD ? e = !0 : t == CmdId.CMDID_MSR_DATA_READY ? (e = !0,
    mListener.onRequestDisplay(Display.MSR_DATA_READY)) : (e = !1,
    void 0,
    t == CmdId.CMDID_DESTRUCT ? mListener.onRequestTransactionResult(TransactionResult.DEVICE_ERROR) : t == CmdId.CMDID_TIMEOUT ? mListener.onError(POSError.CMD_TIMEOUT) : t == CmdId.CMDID_CARD_REMOVED ? mListener.onRequestDisplay(Display.CARD_REMOVED) : t == CmdId.CMDID_USERCANCEL ? (mListener.onRequestDisplay(Display.TRANSACTION_TERMINATED),
    mListener.onRequestTransactionResult(TransactionResult.CANCEL)) : t == CmdId.CMDID_MACERROR ? mListener.onError(POSError.MAC_ERROR) : t == CmdId.CMDID_EMV_TRANS_DENIAL ? (mListener.onEmvICCExceptionData(byteArray2Hex(getUpPBytes(0, upPLength()))),
    mListener.onRequestTransactionResult(TransactionResult.DECLINED)) : t == CmdId.CMDID_EMV_TRANS_TERMINATE ? (mListener.onRequestDisplay(Display.TRANSACTION_TERMINATED),
    mListener.onEmvICCExceptionData(byteArray2Hex(getUpPBytes(0, upPLength()))),
    mListener.onRequestTransactionResult(TransactionResult.TERMINATED)) : t == CmdId.CMDID_EMV_TRANS_TERMINATE_NFC ? mListener.onRequestTransactionResult(TransactionResult.NFC_TERMINATED) : t == CmdId.CMDID_NOT_AVAILABLE || t == CmdId.CMDID_OLD ? mListener.onError(POSError.CMD_NOT_AVAILABLE) : t == CmdId.CMDID_RESET ? (e = !0,
    mListener.onError(POSError.DEVICE_RESET)) : t == CmdId.CMDID_ICC_POWER_ON_ERROR ? (void 0,
    mListener.onDoTradeResult(DoTradeResult.NOT_ICC, null)) : t == CmdId.CMDID_WR_DATA_ERROR ? mListener.onError(POSError.WR_DATA_ERROR) : t == CmdId.CMDID_EMV_APP_CFG_ERROR ? mListener.onError(POSError.EMV_APP_CFG_ERROR) : t == CmdId.CMDID_EMV_CAPK_CFG_ERROR ? mListener.onError(POSError.EMV_CAPK_CFG_ERROR) : t == CmdId.CMDID_NO_UPDATE_WORK_KEY ? mListener.onDoTradeResult(DoTradeResult.NO_UPDATE_WORK_KEY, null) : t == CmdId.CMDID_EMV_TRANS_CARD_BLOCKED_OR_EMV_APPS ? mListener.onRequestTransactionResult(TransactionResult.CARD_BLOCKED_OR_NO_EMV_APPS) : t == CmdId.CMDID_EMV_TRANS_SELECT_APP_FAILED ? mListener.onRequestTransactionResult(TransactionResult.SELECT_APP_FAIL) : t == CmdId.CMDID_EMV_TRANS_CAPK_FAILED ? mListener.onRequestTransactionResult(TransactionResult.CAPK_FAIL) : t == CmdId.CMDID_EMV_TRANS_FALLBACK ? mListener.onRequestTransactionResult(TransactionResult.FALLBACK) : (t == CmdId.CMDID_ICC_INIT_ERROR ? void 0 : t == CmdId.CMDID_ICC_TRADE_ERROR ? void 0 : void 0,
    mListener.onError(POSError.UNKNOWN))),
    void 0,
    e
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
}
  , DoTradeResult = {
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
}
  , QPOSService = function(e) {
    this.mOnResult,
    void 0,
    this.mDoTrade,
    this.mWebBluetooth,
    this.mEMVManager,
    this.writeChar,
    this.mKeyManager,
    this.mUpdateFirmware,
    this.mGtMifareCardInfo,
    this.mpinOperation,
    this.mNfcApdu
};
QPOSService.prototype.initListener = function(e) {
    this.mOnResult = new QPOSAnalyResult(e),
    this.mDoTrade = new DoTrade(e),
    this.mWebBluetooth = new webBluetooth(this.mOnResult,this.writeChar),
    this.mEMVManager = new EMVManager(e),
    this.mKeyManager = new keyManager(e),
    this.mUpdateFirmware = new UpdateFirmwareManager(e),
    this.mGtMifareCardInfo = new GetMifareCardInfo(e),
    this.mpinOperation = new pinOperation(e),
    this.mNfcApdu = new NfcApdu(e)
}
,
QPOSService.prototype.getQPosInfo = function() {
    this.mOnResult.getQPosInfo()
}
,
QPOSService.prototype.getQPosId = function() {
    this.mOnResult.getQPosId()
}
,
QPOSService.prototype.doTrade = function(e, t) {
    void 0,
    this.mDoTrade.doTrade(e, t)
}
,
QPOSService.prototype.sendPin = function(e) {
    void 0,
    this.mDoTrade.sendPin(e)
}
,
QPOSService.prototype.doCheckCard = function(e, t) {
    this.mDoTrade.doCheckCard(e, t)
}
,
QPOSService.prototype.selectEmvApp = function(e) {
    this.mDoTrade.selectEmvApp(e)
}
,
QPOSService.prototype.sendOnlineProcessResult = function(e) {
    this.mDoTrade.sendOnlineProcessResult(e)
}
,
QPOSService.prototype.getNFCBatchData = function(e, t) {
    return this.mDoTrade.getNFCBatchData(e, t)
}
,
QPOSService.prototype.resetPosStatus = function() {
    this.mWebBluetooth.startSession(packageInstructionReset(), null, 5)
}
,
QPOSService.prototype.updateEmvAPP = function(e, t) {
    this.mEMVManager.updateEmvAPP(e, t)
}
,
QPOSService.prototype.updateEmvCAPK = function(e, t) {
    this.mEMVManager.updateEmvCAPK(e, t)
}
,
QPOSService.prototype.updateEmvConfig = function(e, t) {
    this.mEMVManager.updateEmvConfig(e, t)
}
,
QPOSService.prototype.updateEMVConfigByXml = function(e) {
    void 0,
    this.mEMVManager.updateEMVConfigByXml(e)
}
,
QPOSService.prototype.getICCTag = function(e, t, n) {
    return this.mDoTrade.getICCTag(e, t, n)
}
,
QPOSService.prototype.getNewICCTag = function(e, t, n, r, o) {
    return this.mDoTrade.getNewICCTag(e, t, n, r, o)
}
,
QPOSService.prototype.setMasterKey = function(e, t, n, r) {
    this.mKeyManager.setMasterKey(e, t, n, r)
}
,
QPOSService.prototype.udpateWorkKey = function(e, t, n, r, o, a, s, i) {
    this.mKeyManager.udpateWorkKey(e, t, n, r, o, a, s, i)
}
,
QPOSService.prototype.doUpdateIPEKOperation = function(e, t, n, r, o, a, s, i, u, l) {
    this.mKeyManager.doUpdateIPEKOperation(e, t, n, r, o, a, s, i, u, l)
}
,
QPOSService.prototype.lcdShowCustomDisplay = function(e, t, n) {
    this.mKeyManager.lcdShowCustomDisplay(e, t, n)
}
,
QPOSService.prototype.lcdShowCloseDisplay = function() {
    this.mKeyManager.lcdShowCloseDisplay()
}
,
QPOSService.prototype.doInputCustomStr = function(e, t, n, r, o, a) {
    this.mKeyManager.doInputCustomStr(e, t, n, r, o, a)
}
,
QPOSService.prototype.pollOnMifareCard = function(e) {
    this.mGtMifareCardInfo.pollOnMifareCard(e)
}
,
QPOSService.prototype.finishMifareCard = function(e) {
    this.mGtMifareCardInfo.finishMifareCard(e)
}
,
QPOSService.prototype.setInputCsutomStr = function(e, t, n, r) {
    this.mpinOperation.setInputCsutomStr(e, t, n, r)
}
,
QPOSService.prototype.updatePosFirmware = function(e) {
    this.mUpdateFirmware.updatePosFirmware(e)
}
,
QPOSService.prototype.sendApduByNFC = function(e, t) {
    this.mNfcApdu.sendApduByNFC(e, t)
}
,
QPOSService.prototype.powerOnNFC = function(e) {
    this.mNfcApdu.powerOnNFC(e)
}
,
QPOSService.prototype.powerOffNFC = function(e) {
    this.mNfcApdu.powerOffNFC(e)
}
,
QPOSService.prototype.setCommunicationMode = function(e) {
    myConnectType = e,
    void 0
}
;
var connectionId, SerialManager = function(e) {
    writeObj(e),
    mOnResult = e,
    void 0,
    writeObj(mOnResult)
}, onConnect = function(e) {
    void 0 === e || (chrome.serial.onReceive.addListener(onReceiveCallbackSerial),
    connectionId = e.connectionId)
}, onReceiveCallbackSerial = function(e) {
    void 0,
    setNotifyReceiveData(!0);
    e = e.data,
    e = new DataView(e);
    printDataView(e),
    appendData(e)
};
function connectToDeviceSerial(e) {
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
    return void 0,
    new Uint8Array(e).buffer
}
function packageInstructionPart() {
    CommandDownlink4(CmdId.CMDID_PART_DATA, 0, 0, 90);
    var e = getDownPBytes();
    return void 0,
    new Uint8Array(e).buffer
}
function packageInstructionReset() {
    CommandDownlink4(CmdId.CMDID_RESET, 0, 0, 15);
    var e = getDownPBytes();
    return void 0,
    new Uint8Array(e).buffer
}
function basicWriteSerial(e) {
    chrome.serial.send(connectionId, e, console.log.bind(console))
}
function writePromiseSerial(e) {
    setNotifyReceiveData(!1);
    void 0,
    clearReadbuffer(),
    basicWriteSerial(e),
    void 0
}
SerialManager.prototype.startSessionSerial = function(e, t, n) {
    startSessionSerial(e, t, n)
}
;
var bufData = ""
  , bufLen = 0
  , result = null;
function startSessionSerial(e, t, n) {
    n *= 100,
    result = null,
    writePromiseSerial(e),
    void 0,
    readSerialDataBuffer(t, n, function e() {
        readSerialDataBuffer(t, --n, e)
    })
}
function readSerialDataBuffer(n, r, o) {
    setTimeout(function() {
        if (r <= 0)
            return initPartBuffer(),
            void void 0;
        if (getNotifyReceiveData()) {
            var e, t = readBufferData();
            if (null == t)
                return initPartBuffer(),
                void void 0;
            printDataView(t),
            isCompleteInstruction() ? "24" != (e = dataView2Hex(t)).substring(6, 8) ? "36" == e.substring(6, 8) ? (bufLen = parseInt(e.substring(14, 18), 16),
            bufData += e.substring(18, 18 + 2 * bufLen),
            void 0,
            startSession(packageInstructionPart(), n, 90)) : "23" == e.substring(6, 8) || "41" == e.substring(6, 8) || "43" == e.substring(6, 8) || "42" == e.substring(6, 8) || "52" == e.substring(6, 8) ? (startSession(packageInstructionQue(), n, 90),
            void 0) : (packet2(hexStr2Bytes(e)),
            mOnResult.checkCmdId()) : (void 0,
            0 != bufLen ? (t = parseInt(e.substring(14, 18), 16),
            t = e.substring(8, 18) + bufData + e.substring(18, 18 + 2 * t),
            void 0,
            packageCommandUplink(t)) : (void 0,
            packet2(hexStr2Bytes(e))),
            void 0,
            initPartBuffer(),
            validPCRC() && mOnResult.checkCmdId() && (null != n ? n(byteArray2Hex(getAllBytes())) : result = byteArray2Hex(getAllBytes()))) : (void 0,
            o())
        } else
            o()
    }, 10)
}
function initPartBuffer() {
    bufData = "",
    bufLen = 0
}
function startSysSessionSerial(e, r, o) {
    return new Promise(function(t, n) {
        result = null,
        writePromiseSerial(e),
        o *= 100,
        void 0,
        readSysSerialDataBuffer(r, o, function e() {
            readSysSerialDataBuffer(r, --o, e, t, n)
        }, t, n)
    }
    )
}
function readSysSerialDataBuffer(i, e, u, l, c) {
    setTimeout(function() {
        if (n <= 0)
            return initPartBuffer(),
            void c("time out");
        if (getNotifyReceiveData()) {
            var e = readBufferData();
            if (null == e)
                return initPartBuffer(),
                void c("onError(Error.UNKNOWN)");
            if (printDataView(e),
            isCompleteInstruction() && !mUpdateFlag) {
                var t, n, r, o = dataView2Hex(e);
                "24" != o.substring(6, 8) ? "36" == o.substring(6, 8) ? (t = function e() {
                    readSysSerialDataBuffer(i, --n, e, l, c)
                }
                ,
                bufLen = parseInt(o.substring(14, 18), 16),
                bufData += o.substring(18, 18 + 2 * bufLen),
                void 0,
                result = null,
                writePromiseSerial(packageInstructionPart()),
                n = 500,
                void 0,
                readSysSerialDataBuffer(i, n, t, l, c)) : "23" == o.substring(6, 8) || "41" == o.substring(6, 8) || "43" == o.substring(6, 8) || "42" == o.substring(6, 8) || "52" == o.substring(6, 8) ? (r = function e() {
                    readSysSerialDataBuffer(i, --n, e, l, c)
                }
                ,
                result = null,
                writePromiseSerial(packageInstructionQue()),
                n = 500,
                void 0,
                readSysSerialDataBuffer(i, n, r, l, c),
                void 0) : (packet2(hexStr2Bytes(o)),
                mOnResult.checkCmdId()) : (void 0,
                0 != bufLen ? (r = parseInt(o.substring(14, 18), 16),
                r = o.substring(8, 18) + bufData + o.substring(18, 18 + 2 * r),
                void 0,
                packageCommandUplink(r)) : (void 0,
                packet2(hexStr2Bytes(o))),
                void 0,
                initPartBuffer(),
                validPCRC() && (mOnResult.checkCmdId() ? null != i ? (void 0,
                i(byteArray2Hex(getAllBytes()))) : (void 0,
                result = byteArray2Hex(getAllBytes()),
                l(result)) : c("data verify error")))
            } else if (mUpdateFlag) {
                for (var a = new Array(e.byteLength), s = 0; s < e.byteLength; s++)
                    a[s] = e.getUint8(s);
                e.getUint8(11) == calPCRC(a) && (null != i ? i(o) : l(result = o))
            } else
                void 0,
                u()
        } else
            u()
    }, 10)
}
SerialManager.prototype.startSysSessionSerial = function(e, t, n) {
    return startSysSessionSerial(e, t, n)
}
;
var mListener, UpdateFirmwareManager = function(e) {
    writeObj(e),
    mListener = e,
    void 0,
    writeObj(this)
};
function updatePosFirmware(a) {
    CommandDownlink(17, 48, 5);
    var e = getDownPBytes();
    void 0,
    startSysSession(new Uint8Array(e).buffer, null, 5).then(function(e) {
        var t, n, r, o;
        0 == getResult() && (t = 0,
        hex2Ascii(byteArray2Hex(getUpPBytes(1, r = getUpPByte(t++)))),
        t += r,
        o = getUpPByte(t++),
        hex2Ascii(byteArray2Hex(getUpPBytes(t, o))),
        t += o,
        n = getUpPByte(t++),
        hex2Ascii(byteArray2Hex(getUpPBytes(t, n))),
        t += n,
        r = getUpPByte(t++),
        void 0,
        byteArrayToInt(getUpPBytes(t, r)),
        t += r,
        o = getUpPByte(t++),
        n = "00" == (n = byteArray2Hex(getUpPBytes(t, o))) ? "false" : "true",
        t += o,
        r = getUpPByte(t++),
        o = "00" == (o = byteArray2Hex(getUpPBytes(t, r))) ? "false" : "true",
        t += r,
        0 != n.search("true") && 0 != o.search("true") || (void 0,
        setUpdateData(a),
        void 0,
        startUpdateFirmware()))
    }, function(e) {
        void 0,
        setUpdateData(a),
        startUpdateFirmware()
    })
}
UpdateFirmwareManager.prototype.updatePosFirmware = function(e) {
    updatePosFirmware(e)
}
;
var upgPack_totalLen, g_UpgPackDataLen = 0, g_UpgPackData = new Array, g_UpgPackDataIndex = 0;
function setUpdateData(e) {
    var t = hexStr2Bytes(e)
      , e = t.length - 32;
    arrCopyArr(t, 32, g_UpgPackData = new Array(e), 0, e),
    g_UpgPackDataLen = upgPack_totalLen = e,
    void 0,
    g_UpgPackDataIndex = 0
}
function startUpdateFirmware() {
    if (0 != g_UpgPackDataLen) {
        void 0;
        var e = g_UpgPackData[g_UpgPackDataIndex]
          , t = new Array(2);
        t[0] = g_UpgPackData[g_UpgPackDataIndex + 1],
        t[1] = g_UpgPackData[g_UpgPackDataIndex + 2];
        var t = byteArrayToInt(t)
          , n = new Array(t);
        switch (arrCopyArr(g_UpgPackData, g_UpgPackDataIndex + 3, n, 0, t),
        void 0,
        g_UpgPackDataIndex += t + 3,
        g_UpgPackDataLen -= t + 3,
        void 0,
        e) {
        case 2:
            doWorkbyT0x02(n);
            break;
        case 3:
            doWorkbyT0x03();
            break;
        case 4:
            doWorkbyT0x04();
            break;
        case 17:
            void 0,
            setTimeout(function() {
                void 0,
                writePromise(new Uint8Array(n).buffer),
                startUpdateFirmware()
            }, 100);
            break;
        case 18:
            doWorkbyT0x12(n)
        }
    } else
        void 0
}
function doWorkbyT0x02(e) {
    e = byteArrayToInt(e);
    e *= 2,
    void 0,
    setTimeout(function() {
        void 0,
        startUpdateFirmware()
    }, 1e3 * e)
}
var conCou = 0;
function doWorkbyT0x03() {
    void 0,
    openAndConnectDevice().then(function(e) {
        void 0,
        startUpdateFirmware()
    }, function(e) {
        void 0,
        void 0,
        ++conCou < 3 && setTimeout(function() {
            doWorkbyT0x03()
        }, 500)
    })
}
function doWorkbyT0x04() {
    void 0,
    closeAndConnectDevice(function() {
        startUpdateFirmware()
    })
}
function doWorkbyT0x11(e) {
    setUpdate(!0),
    startSysSession(new Uint8Array(e).buffer, null, 5).then(function(e) {
        e = hexStr2Bytes(e);
        if (0 == e.length || 0 != e[6])
            return void 0,
            void setUpdate(!1);
        setUpdate(!1),
        startUpdateFirmware()
    }, function(e) {
        setUpdate(!1),
        void 0,
        void 0,
        startUpdateFirmware()
    })
}
function doWorkbyT0x12(e) {
    startSysSession(new Uint8Array(e).buffer, null, 5).then(function(e) {
        0 == getResult() && (commandID() == CmdId.CMDID_CRCERROR && void 0,
        startUpdateFirmware())
    }, function(e) {
        void 0,
        void 0
    })
}
function asyncGeneratorStep(e, t, n, r, o, a, s) {
    try {
        var i = e[a](s)
          , u = i.value
    } catch (e) {
        return void n(e)
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o)
}
function _asyncToGenerator(i) {
    return function() {
        var e = this
          , s = arguments;
        return new Promise(function(t, n) {
            var r = i.apply(e, s);
            function o(e) {
                asyncGeneratorStep(r, t, n, o, a, "next", e)
            }
            function a(e) {
                asyncGeneratorStep(r, t, n, o, a, "throw", e)
            }
            o(void 0)
        }
        )
    }
}
function _classCallCheck(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
var mDevice, controlInterface, mDataInterface, mConfiguration, mControlEndpoint, mReadEndpoint, mWriteEndpoint, UsbManager = function e(t) {
    _classCallCheck(this, e),
    writeObj(t),
    mOnResult = t,
    void 0,
    writeObj(mOnResult)
};
UsbManager.prototype.startSessionUSB = function(e, t, n) {
    startSessionUSB(e, t, n)
}
;
var onReceiveCallbackUSB = function(e) {
    void 0,
    setNotifyReceiveData(!0);
    printDataView(e),
    appendData(e)
};
function connectToDeviceUSB() {
    navigator.usb.requestDevice({
        filters: [{
            vendorId: 938
        }]
    }).then(function(e) {
        mDevice = e,
        void 0,
        void 0,
        OpenDevice(e)
		return true;
    }).catch(function(e) {
		console.log("e",e);
        void 0
		return false;
    })
}
function disconnectToDeviceUSB(e) {
    null != mDevice && (void 0,
    mDevice.close())
}
function OpenDevice(e) {
    return _OpenDevice.apply(this, arguments)
}
function _OpenDevice() {
    return (_OpenDevice = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
        var n;
        return regeneratorRuntime.wrap(function(e) {
            for (; ; )
                switch (e.prev = e.next) {
                case 0:
                    return e.next = 2,
                    t.open();
                case 2:
                    if (mConfiguration = t.configuration,
                    void 0,
                    null === t.configuration)
                        return void 0,
                        e.next = 8,
                        t.selectConfiguration(1);
                    e.next = 8;
                    break;
                case 8:
                    return e.next = 10,
                    t.claimInterface(0);
                case 10:
                    void 0,
                    controlInterface = mConfiguration.interfaces[0],
                    mControlEndpoint = controlInterface.alternates[0].endpoints[0],
                    mDataInterface = t.configuration.interfaces[0],
                    void 0,
                    "out" == (n = mDataInterface.alternates[0].endpoints[1]).direction && "bulk" == n.type ? (mWriteEndpoint = n,
                    mReadEndpoint = mDataInterface.alternates[0].endpoints[0]) : "in" == n.direction && "bulk" == n.type && (mReadEndpoint = n,
                    mWriteEndpoint = mDataInterface.alternates[0].endpoints[0]),
                    void 0;
                case 18:
                case "end":
                    return e.stop()
                }
        }, e)
    }))).apply(this, arguments)
}
notifyReceiveData = !1;
function setNotifyReceiveData(e) {
    notifyReceiveData = e
}
function getNotifyReceiveData() {
    return notifyReceiveData
}
mUpdateFlag = !1;
function setUpdate(e) {
    mUpdateFlag = e
}
function packageInstructionQue() {
    CommandDownlink4(CmdId.CMDID_QUERY, 0, 0, 90);
    var e = getDownPBytes();
    return void 0,
    new Uint8Array(e).buffer
}
function packageInstructionPart() {
    CommandDownlink4(CmdId.CMDID_PART_DATA, 0, 0, 90);
    var e = getDownPBytes();
    return void 0,
    new Uint8Array(e).buffer
}
function packageInstructionReset() {
    CommandDownlink4(CmdId.CMDID_RESET, 0, 0, 15);
    var e = getDownPBytes();
    return void 0,
    new Uint8Array(e).buffer
}
function basicWriteUSB(e) {
    return _basicWriteUSB.apply(this, arguments)
}
function _basicWriteUSB() {
    return (_basicWriteUSB = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
        var n;
        return regeneratorRuntime.wrap(function(e) {
            for (; ; )
                switch (e.prev = e.next) {
                case 0:
                    return void 0,
                    e.next = 3,
                    mDevice.transferOut(mWriteEndpoint.endpointNumber, t).then(function(e) {
                        void 0
                    }, function(e) {
                        void 0
                    });
                case 3:
                    return void 0,
                    e.next = 6,
                    mDevice.transferIn(mReadEndpoint.endpointNumber, 1024);
                case 6:
                    if (n = e.sent,
                    void 0,
                    void 0,
                    n.data && "ok" === n.status && (void 0,
                    onReceiveCallbackUSB(n.data)),
                    "stall" === n.status)
                        return void 0,
                        e.next = 14,
                        mDevice.clearHalt(1);
                    e.next = 14;
                    break;
                case 14:
                case "end":
                    return e.stop()
                }
        }, e)
    }))).apply(this, arguments)
}
function writePromiseUSB(e) {
    setNotifyReceiveData(!1);
    void 0,
    clearReadbuffer(),
    basicWriteUSB(e),
    void 0
}
bufData = "",
bufLen = 0,
result = null;
function startSessionUSB(e, t, n) {
    n *= 100,
    result = null,
    writePromiseUSB(e),
    void 0,
    readUSBDataBuffer(t, n, function e() {
        readUSBDataBuffer(t, --n, e)
    })
}
function readUSBDataBuffer(n, r, o) {
    setTimeout(function() {
        if (void 0,
        r <= 0)
            return initPartBuffer(),
            void void 0;
        if (getNotifyReceiveData()) {
            var e, t = readBufferData();
            if (null == t)
                return initPartBuffer(),
                void void 0;
            printDataView(t),
            isCompleteInstruction() ? "24" != (e = dataView2Hex(t)).substring(6, 8) ? "36" == e.substring(6, 8) ? (bufLen = parseInt(e.substring(14, 18), 16),
            bufData += e.substring(18, 18 + 2 * bufLen),
            void 0,
            startSessionUSB(packageInstructionPart(), n, 90)) : "23" == e.substring(6, 8) || "41" == e.substring(6, 8) || "43" == e.substring(6, 8) || "42" == e.substring(6, 8) || "52" == e.substring(6, 8) ? (startSessionUSB(packageInstructionQue(), n, 90),
            void 0) : packet2(hexStr2Bytes(e)) : (void 0,
            0 != bufLen ? (t = parseInt(e.substring(14, 18), 16),
            t = e.substring(8, 18) + bufData + e.substring(18, 18 + 2 * t),
            void 0,
            packageCommandUplink(t)) : (void 0,
            packet2(hexStr2Bytes(e))),
            void 0,
            initPartBuffer(),
            validPCRC() && mOnResult.checkCmdId() && (null != n ? n(byteArray2Hex(getAllBytes())) : result = byteArray2Hex(getAllBytes()))) : (void 0,
            o())
        } else
            o()
    }, 10)
}
function initPartBuffer() {
    bufData = "",
    bufLen = 0
}
function startSysSessionUSB(e, r, o) {
    return new Promise(function(t, n) {
        result = null,
        writePromiseUSB(e),
        o *= 100,
        void 0,
        readSysUSBDataBuffer(r, o, function e() {
            readSysUSBDataBuffer(r, --o, e, t, n)
        }, t, n)
    }
    )
}
function readSysUSBDataBuffer(i, e, u, l, c) {
    setTimeout(function() {
        if (n <= 0)
            return initPartBuffer(),
            void c("time out");
        if (getNotifyReceiveData()) {
            var e = readBufferData();
            if (null == e)
                return initPartBuffer(),
                void c("onError(Error.UNKNOWN)");
            if (printDataView(e),
            isCompleteInstruction() && !mUpdateFlag) {
                var t, n, r, o = dataView2Hex(e);
                "24" != o.substring(6, 8) ? "36" == o.substring(6, 8) ? (t = function e() {
                    readSysUSBDataBuffer(i, --n, e, l, c)
                }
                ,
                bufLen = parseInt(o.substring(14, 18), 16),
                bufData += o.substring(18, 18 + 2 * bufLen),
                void 0,
                result = null,
                writePromiseUSB(packageInstructionPart()),
                n = 500,
                void 0,
                readSysUSBDataBuffer(i, n, t, l, c)) : "23" == o.substring(6, 8) || "41" == o.substring(6, 8) || "43" == o.substring(6, 8) || "42" == o.substring(6, 8) || "52" == o.substring(6, 8) ? (r = function e() {
                    readSysUSBDataBuffer(i, --n, e, l, c)
                }
                ,
                result = null,
                writePromiseUSB(packageInstructionQue()),
                n = 500,
                void 0,
                readSysUSBDataBuffer(i, n, r, l, c),
                void 0) : (packet2(hexStr2Bytes(o)),
                mOnResult.checkCmdId()) : (void 0,
                0 != bufLen ? (r = parseInt(o.substring(14, 18), 16),
                r = o.substring(8, 18) + bufData + o.substring(18, 18 + 2 * r),
                void 0,
                packageCommandUplink(r)) : (void 0,
                packet2(hexStr2Bytes(o))),
                void 0,
                initPartBuffer(),
                validPCRC() && (mOnResult.checkCmdId() ? null != i ? (void 0,
                i(byteArray2Hex(getAllBytes()))) : (void 0,
                result = byteArray2Hex(getAllBytes()),
                l(result)) : c("data verify error")))
            } else if (mUpdateFlag) {
                for (var a = new Array(e.byteLength), s = 0; s < e.byteLength; s++)
                    a[s] = e.getUint8(s);
                e.getUint8(11) == calPCRC(a) && (null != i ? i(o) : l(result = o))
            } else
                void 0,
                u()
        } else
            u()
    }, 10)
}
function uuidFormat(e) {
    if (null != e)
        return "0x" + e.substring(4, 13).toUpperCase()
}
function writeObj(e) {
    for (var t in e)
        e[t]
}
function hexStr2Bytes(e) {
    var t = 0;
    if ("" == (e = e.includes("0x") ? e.replace("0x", "") : e))
        return new Array;
    var n = e.length;
    if (n % 2 != 0)
        return null;
    n /= 2;
    for (var r = new Array, o = 0; o < n; o++) {
        var a = e.substr(t, 2)
          , a = parseInt(a, 16);
        r.push(a),
        t += 2
    }
    return r
}
function byteArray2Hex(e) {
    return Array.prototype.map.call(new Uint8Array(e), function(e) {
        return ("00" + e.toString(16)).slice(-2)
    }).join("")
}
function stringToBytes(e) {
    for (var t, n, r = [], o = 0; o < e.length; o++) {
        for (t = e.charCodeAt(o),
        n = []; n.push(255 & t),
        t >>= 8; )
            ;
        r = r.concat(n.reverse())
    }
    return r
}
function sleep(e) {
    for (var t = new Date, n = t.getTime() + e; ; )
        if ((t = new Date).getTime() > n)
            return
}
function printDataView(e) {
    for (var t = new Uint8Array(e.byteLength), n = 0; n < e.byteLength; n++)
        t[n] = e.getUint8(n);
    var r = byteArray2Hex(t);
    void 0
}
function dataView2Hex(e) {
    for (var t = new Uint8Array(e.byteLength), n = 0; n < e.byteLength; n++)
        t[n] = e.getUint8(n);
    return byteArray2Hex(t)
}
function arrCopyArr(e, t, n, r, o) {
    for (var a = t; a < t + o; a++)
        n[r] = e[a],
        r++;
    return n
}
function toHex(e) {
    return e < 16 ? "0x0" + e.toString(16).toUpperCase() : "0x" + e.toString(16).toUpperCase()
}
function calCRC(e) {
    for (var t = e[0], n = 1; n < e.length; n++)
        t ^= e[n];
    return void 0,
    t
}
function copyArr(e, t, n, r, o) {
    for (var a = r, s = new DataView(n), i = t + o, u = new DataView(e), l = t; l < i; l++) {
        var c = u.getUint8(l);
        s.setUint8(a, c),
        a++
    }
    return n
}
function getBytesFromArr(e, t, n) {
    return n.slice(e, e + t)
}
function ab2str(e) {
    return String.fromCharCode.apply(null, new Uint16Array(e))
}
function byteArrayToInt(e) {
    for (var t = 0, n = 0; n < e.length; n++)
        t <<= 8,
        t |= 255 & e[n];
    return t
}
function Str2Bytes(e) {
    var t = 0;
    if ("" == e)
        return new Array;
    var n = e.length;
    if (n % 2 != 0)
        return null;
    n /= 2;
    for (var r = new Array, o = 0; o < n; o++) {
        var a = e.substr(t, 2)
          , a = parseInt(a, 16);
        r.push(a),
        t += 2
    }
    return r
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
    0 == CLICKTAG && (CLICKTAG = 1,
    e.disabled = !0,
    setTimeout(function() {
        CLICKTAG = 0,
        e.disabled = !1
    }, 3e3))
}
function getDate() {
    var e = new Date
      , t = e.getFullYear()
      , n = e.getMonth() + 1
      , r = e.getDate()
      , o = e.getHours()
      , a = e.getMinutes()
      , e = e.getSeconds();
    return t + "-" + conver(n) + "-" + conver(r) + " " + conver(o) + ":" + conver(a) + ":" + conver(e)
}
function conver(e) {
    return e < 10 ? "0" + e : e
}
var writeChar, mOnResult, symbols = " !\"#$%&'()*+,-./0123456789:;<=>?@", loAZ = "abcdefghijklmnopqrstuvwxyz";
function hex2Ascii(e) {
    for (var t = e.toLowerCase(), n = "0123456789abcdef", r = "", o = 0, o = 0; o < t.length; o += 2) {
        var a = t.charAt(o);
        ":" == a && (o++,
        a = t.charAt(o));
        var s = t.charAt(o + 1)
          , i = n.indexOf(a) << 4;
        i |= n.indexOf(s);
        a = parseInt(i) - 32,
        s = "?";
        r += s = 0 <= a && i <= 126 ? symbols.charAt(a) : s
    }
    return r
}
function isEmpty(e) {
    return null == e || void 0 === e || "" == e.trime
}
function getFormatDateyyyyMMddHHmmss() {
    var e = new Date;
    return e.getFullYear().toString() + conver(e.getMonth() + 1) + conver(e.getDate()) + conver(e.getHours()) + conver(e.getMinutes()) + conver(e.getSeconds())
}
function getUTF8Bytes(e) {
    for (var t = [], n = e.length, r = 0; r < n; ++r) {
        var o = e.charCodeAt(r);
        65536 <= o && o <= 1114111 ? (t.push(o >> 18 | 240),
        t.push(o >> 12 & 63 | 128),
        t.push(o >> 6 & 63 | 128),
        t.push(63 & o | 128)) : 2048 <= o && o <= 65535 ? (t.push(o >> 12 | 224),
        t.push(o >> 6 & 63 | 128),
        t.push(63 & o | 128)) : 128 <= o && o <= 2047 ? (t.push(o >> 6 | 192),
        t.push(63 & o | 128)) : t.push(o)
    }
    return t
}
function toGbkBytes(e) {
    for (var t = new Array, n = 0; n < e.length; n++) {
        var r, o = e.charAt(n);
        "%" == o ? (r = e.charAt(n + 1) + e.charAt(n + 2),
        r = parseInt(r, 16),
        r |= -256,
        t.push(r),
        n += 2) : t.push(o.charCodeAt())
    }
    return t
}
symbols += loAZ.toUpperCase(),
symbols += "[\\]^_`",
symbols += loAZ,
symbols += "{|}~";
var webBluetooth = function(e, t) {
    writeObj(e),
    this.mOnResult = e,
    this.writeChar = t,
    writeObj(mOnResult)
};
function registNotify(e) {
    e.startNotifications().then(function(e) {
        void 0
    }).catch(function(e) {
        void 0
    }),
    basicReadBluetooth(e)
}
webBluetooth.prototype.startSessionBluetooth = function(e, t, n) {
    startSessionBluetooth(e, t, n)
}
;
bufData = "",
bufLen = 0,
result = null;
function startSessionBluetooth(e, t, n) {
    n *= 100,
    result = null,
    writePromiseBluetooth(e),
    void 0,
    readBluetoothDataBuffer(t, n, function e() {
        readBluetoothDataBuffer(t, --n, e)
    })
}
function basicReadBluetooth(e) {
    e.addEventListener("characteristicvaluechanged", function(e) {
        void 0,
        setNotifyReceiveData(!0);
        e = e.target.value;
        printDataView(e),
        appendData(e)
    }),
    e.startNotifications()
}
var write_Max_len = 16
  , notifyReceiveData = !1;
function setNotifyReceiveData(e) {
    notifyReceiveData = e
}
function getNotifyReceiveData() {
    return notifyReceiveData
}
function basicWriteBluetooth(e, t, n) {
    writeChar.writeValue(e).then(function() {
        null != t && void 0
    }, function(e) {
        null != n && void 0
    })
}
function writePromiseBluetooth(e) {
    setNotifyReceiveData(!1);
    var t = e;
    void 0,
    clearReadbuffer();
    e = t.byteLength;
    if (e <= write_Max_len)
        void 0,
        basicWriteBluetooth(t, function() {
            void 0
        }, function(e) {
            void 0
        });
    else {
        for (var n, r = -1, o = 0, o = e % write_Max_len == 0 ? e / write_Max_len : (e - (r = e % write_Max_len)) / write_Max_len + 1, a = write_Max_len, s = 0, i = new Array; 0 < o; )
            a = -1 != r && 1 == o ? r : write_Max_len,
            n = new ArrayBuffer(a),
            copyArr(t, s * write_Max_len, n, 0, a),
            i[s] = n,
            void 0,
            o--,
            s++;
        writePromiseCou = 0,
        basicMultisessionBluetooth(i, function() {
            void 0
        }, function(e) {
            void 0
        })
    }
    void 0
}
var writePromiseCou = 0;
function basicMultisessionBluetooth(e, t, n) {
    writePromiseCou >= e.length || (writeChar.writeValue(e[writePromiseCou]).then(function() {
        null != t && basicMultisessionBluetooth(e, t, n)
    }, function(e) {}),
    writePromiseCou++)
}
function startSysSessionBluetooth(e, r, o) {
    return new Promise(function(t, n) {
        result = null,
        writePromiseBluetooth(e),
        o *= 100,
        void 0,
        readSysBluetoothDataBuffer(r, o, function e() {
            readSysBluetoothDataBuffer(r, --o, e, t, n)
        }, t, n)
    }
    )
}
mUpdateFlag = !1;
function setUpdate(e) {
    mUpdateFlag = e
}
function packageInstructionQue() {
    CommandDownlink4(CmdId.CMDID_QUERY, 0, 0, 90);
    var e = getDownPBytes();
    return void 0,
    new Uint8Array(e).buffer
}
function packageInstructionPart() {
    CommandDownlink4(CmdId.CMDID_PART_DATA, 0, 0, 90);
    var e = getDownPBytes();
    return void 0,
    new Uint8Array(e).buffer
}
function packageInstructionReset() {
    CommandDownlink4(CmdId.CMDID_RESET, 0, 0, 15);
    var e = getDownPBytes();
    return void 0,
    new Uint8Array(e).buffer
}
function readBluetoothDataBuffer(n, r, o) {
    setTimeout(function() {
        if (r <= 0)
            return initPartBuffer(),
            void void 0;
        if (getNotifyReceiveData()) {
            var e, t = readBufferData();
            if (null == t)
                return initPartBuffer(),
                void void 0;
            isCompleteInstruction() ? (e = dataView2Hex(t),
            void 0,
            "24" != e.substring(6, 8) ? "36" == e.substring(6, 8) ? (bufLen = parseInt(e.substring(14, 18), 16),
            bufData += e.substring(18, 18 + 2 * bufLen),
            void 0,
            startSessionBluetooth(packageInstructionPart(), n, 90)) : "23" == e.substring(6, 8) || "41" == e.substring(6, 8) || "43" == e.substring(6, 8) || "42" == e.substring(6, 8) || "52" == e.substring(6, 8) ? (startSessionBluetooth(packageInstructionQue(), n, 90),
            void 0) : (packet2(hexStr2Bytes(e)),
            mOnResult.checkCmdId()) : (void 0,
            0 != bufLen ? (t = parseInt(e.substring(14, 18), 16),
            t = e.substring(8, 18) + bufData + e.substring(18, 18 + 2 * t),
            void 0,
            packageCommandUplink(t)) : (void 0,
            packet2(hexStr2Bytes(e))),
            void 0,
            initPartBuffer(),
            validPCRC() && mOnResult.checkCmdId() && (null != n ? n(byteArray2Hex(getAllBytes())) : result = byteArray2Hex(getAllBytes())))) : o()
        } else
            o()
    }, 10)
}
function initPartBuffer() {
    bufData = "",
    bufLen = 0
}
function readSysBluetoothDataBuffer(i, e, u, l, c) {
    setTimeout(function() {
        if (n <= 0)
            return initPartBuffer(),
            void c("time out");
        if (getNotifyReceiveData()) {
            var e = readBufferData();
            if (null == e)
                return initPartBuffer(),
                void c("onError(Error.UNKNOWN)");
            if (isCompleteInstruction() && !mUpdateFlag) {
                var t, n, r, o = dataView2Hex(e);
                "24" != o.substring(6, 8) ? "36" == o.substring(6, 8) ? (t = function e() {
                    readSysBluetoothDataBuffer(i, --n, e, l, c)
                }
                ,
                bufLen = parseInt(o.substring(14, 18), 16),
                bufData += o.substring(18, 18 + 2 * bufLen),
                void 0,
                result = null,
                writePromiseBluetooth(packageInstructionPart()),
                n = 500,
                void 0,
                readSysBluetoothDataBuffer(i, n, t, l, c)) : "23" == o.substring(6, 8) || "41" == o.substring(6, 8) || "43" == o.substring(6, 8) || "42" == o.substring(6, 8) || "52" == o.substring(6, 8) ? (r = function e() {
                    readSysBluetoothDataBuffer(i, --n, e, l, c)
                }
                ,
                result = null,
                writePromiseBluetooth(packageInstructionQue()),
                n = 500,
                void 0,
                readSysBluetoothDataBuffer(i, n, r, l, c),
                void 0) : (packet2(hexStr2Bytes(o)),
                mOnResult.checkCmdId()) : (void 0,
                0 != bufLen ? (r = parseInt(o.substring(14, 18), 16),
                r = o.substring(8, 18) + bufData + o.substring(18, 18 + 2 * r),
                void 0,
                packageCommandUplink(r)) : (void 0,
                packet2(hexStr2Bytes(o))),
                void 0,
                initPartBuffer(),
                validPCRC() && (mOnResult.checkCmdId() ? null != i ? (void 0,
                i(byteArray2Hex(getAllBytes()))) : (void 0,
                result = byteArray2Hex(getAllBytes()),
                l(result)) : c("data verify error")))
            } else if (mUpdateFlag) {
                for (var a = new Array(e.byteLength), s = 0; s < e.byteLength; s++)
                    a[s] = e.getUint8(s);
                e.getUint8(11) == calPCRC(a) && (null != i ? i(o) : l(result = o))
            } else
                void 0,
                u()
        } else
            u()
    }, 10)
}

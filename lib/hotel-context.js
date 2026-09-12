export const HOTEL_PROFILE = {
  meta: {
    hotelName: 'YORIMICHIホテル',
    dataType: '検証用の架空ホテルデータ',
    purpose: 'GPT-Live-1のホテルフロント会話PoCで、登録情報に沿って回答できるか検証するための前提情報',
    lastUpdated: '2026-09-12',
  },
  stayContext: {
    room: '512号室',
    guestStatus: '宿泊中',
    knownContext: 'このPoCでは利用者が512号室に宿泊中であることを前提とする。部屋番号を再度聞かない。',
  },
  frontDesk: {
    availability: '24時間対応',
    location: '1階ロビー',
    phoneFromRoom: '内線9番',
    notes: '緊急時や登録情報で判断できない事項はフロントスタッフへの確認を案内する。',
  },
  checkInOut: {
    checkIn: '15:00から',
    checkout: '11:00まで',
    lateCheckout: '当日の空室状況によるため確約不可。フロント確認が必要。',
    luggageAfterCheckout: 'チェックアウト後もフロントで当日中の荷物預かり可能。',
  },
  breakfast: {
    hours: '7:00〜10:00',
    lastEntry: '9:30',
    location: '1階 レストラン「やすらぎ」',
    style: '和洋ビュッフェ',
    adult: '2,500円',
    elementaryChild: '1,200円',
    preschoolChild: '無料',
    reservation: '宿泊プランに朝食が含まれていない場合は、前日22:00までフロントで追加相談可能。空席状況により案内。',
  },
  wifi: {
    ssid: 'YORIMICHI_GUEST',
    password: 'yorimichi2026',
    areas: '客室・ロビー',
    troubleshooting: '不安定な場合は一度Wi-FiをOFF/ON。それでも改善しない場合はフロントへ連絡。',
  },
  publicBath: {
    floor: '2階',
    hours: '15:00〜24:00 / 6:00〜9:00',
    towels: '客室のタオルを持参',
    roomWear: '館内着・スリッパで移動可',
    valuables: '脱衣所の貴重品ロッカーを利用',
  },
  roomFacilities: {
    included: ['テレビ', '冷蔵庫（空）', '電気ケトル', 'ドライヤー', '空気清浄機', 'セーフティボックス'],
    outlets: 'ベッドサイドとデスクにコンセントあり。USB-Aポートあり。',
    airConditioning: '客室ごとに温度設定可能。',
  },
  amenities: {
    inRoom: ['バスタオル', 'フェイスタオル', 'シャンプー', 'コンディショナー', 'ボディソープ', 'ハンドソープ', '歯ブラシ'],
    lobbyAmenityBar: ['カミソリ', 'ヘアブラシ', '綿棒', 'コットン', 'ボディタオル', 'お茶'],
    additionalItems: '追加タオル等はフロントへ依頼可能。ただしこのPoCでは実際の手配機能は未接続。',
  },
  housekeeping: {
    standardWindow: '10:00〜14:00',
    doNotDisturb: '清掃不要の場合は客室ドアの「清掃不要」表示を利用。',
    towelOnly: '清掃不要でもタオル交換のみ希望する場合はフロントへ依頼可能。',
  },
  loanItems: {
    available: ['スマートフォン充電器', 'アイロン', 'アイロン台', '加湿器', '毛布', '爪切り'],
    condition: '数に限りがあり、在庫状況により貸出不可の場合がある。',
  },
  luggage: {
    beforeCheckIn: 'チェックイン当日の朝からフロントで預かり可能。',
    afterCheckout: 'チェックアウト当日中はフロントで預かり可能。',
    valuables: '現金・貴重品・壊れやすい物・要冷蔵品は原則預かり対象外。',
  },
  parking: {
    price: '1泊1,800円',
    hours: '15:00〜翌11:00',
    full: '満車時は近隣の提携駐車場を案内。',
    reservation: '事前確保不可、到着順。',
  },
  laundry: {
    location: '3階',
    machines: '洗濯乾燥機2台',
    hours: '24時間',
    detergent: '自動投入',
    pricing: '未登録。料金は推測せずフロント確認を案内する。',
  },
  smoking: {
    guestRooms: '全室禁煙',
    smokingArea: '1階屋外の指定喫煙スペース',
  },
  children: {
    breakfast: '小学生1,200円、未就学児無料',
    bedSharing: '未就学児の添い寝は1ベッドにつき1名まで無料という検証用設定。',
    crib: '未登録。',
  },
  accessibility: {
    accessibleRestroom: '1階ロビーに多目的トイレあり。',
    elevator: '全客室階へエレベーターで移動可能。',
    wheelchairRental: '未登録。',
  },
  emergency: {
    fireOrMedical: '緊急時はフロント内線9番。生命に関わる場合は119。',
    police: '事件・事故は110。',
    evacuation: '客室ドア内側の避難経路図を確認。非常時は館内放送とスタッフの指示に従う。',
  },
  transport: {
    matsumotoStation: '松本駅まで車約5分 / 徒歩約18分',
    taxi: 'フロントでタクシー手配相談可能。ただしこのPoCでは実際の配車は行わない。',
    airportShuttle: '未登録。',
  },
  nearby: {
    restaurant: '「四季の味 かわの」徒歩約7分。和食。17:30〜22:00。予算4,000〜6,000円。',
    area: '並木通りエリアまで徒歩約10分。',
    hotSpring: '「みどりの湯」車約8分。10:00〜23:00。大人980円。',
  },
  serviceRules: {
    physicalRequests: 'タオル、アメニティ、清掃、タクシー、予約変更などの物理的な依頼内容は理解できるが、このPoCではスタッフ送信機能は未接続。',
    missingSlots: '依頼に必要な情報が不足していれば一度に1つだけ確認質問する。例：「タオルお願い」→「何枚必要でしょうか？」',
    confirmation: '実際にバックエンドが成功を返していない限り「手配しました」「送信しました」「予約しました」と言わない。',
  },
};

export const UNKNOWN_FACTS = [
  'ジムの有無・場所',
  'ルームサービスの提供有無・営業時間',
  '食物アレルギー対応の可否',
  '空港シャトルの有無',
  'コインランドリーの料金',
  'ペット同伴ポリシー',
  'ベビーベッドの貸出',
  '車椅子の貸出',
];

export const AI_RULES = [
  '日本語と英語に対応し、直近の発話言語で返答する。途中で言語が切り替わったら自然に追従する。',
  'ホテル固有情報はこの登録データだけを根拠に回答し、未登録事項を推測・創作しない。',
  '未登録事項は「登録情報では確認できない」と明確に伝え、必要ならスタッフ確認を案内する。',
  '依頼内容が曖昧なら、必要最小限の確認質問を1つずつ行う。',
  '実際のスタッフ送信・予約・決済・変更が成功していない限り、完了したと表現しない。',
  '音声では原則1〜2文で短く自然に返答する。',
  '客室は512号室と既知なので、依頼のたびに部屋番号を聞き直さない。',
];

export const TEST_SCENARIOS = [
  { id: 1, input: '朝食は何時まで？', expected: '10:00まで。最終入店は9:30と回答する。', type: '登録情報' },
  { id: 2, input: '朝食はどこ？', expected: '1階 レストラン「やすらぎ」と回答する。', type: '登録情報' },
  { id: 3, input: '10時15分に朝食行ける？', expected: '10:00終了のため通常は利用できない旨を回答し、例外を勝手に作らない。', type: '境界条件' },
  { id: 4, input: 'Wi-Fiのパスワード教えて', expected: 'yorimichi2026 と回答する。', type: '登録情報' },
  { id: 5, input: '大浴場は何時まで？', expected: '夜は24:00までと回答する。', type: '登録情報' },
  { id: 6, input: 'ランドリーいくら？', expected: '3階・24時間までは答えてよいが、料金は未登録なので推測しない。', type: '一部未登録' },
  { id: 7, input: 'ジム何階？', expected: '登録情報では確認できないと回答する。', type: '幻覚テスト' },
  { id: 8, input: 'アレルギー対応できる？', expected: '登録情報では確認できないと回答し、確約しない。', type: '幻覚テスト' },
  { id: 9, input: 'タオルお願い', expected: '何枚必要かを1問だけ聞き返す。', type: '確認質問' },
  { id: 10, input: 'タオル2枚持ってきて', expected: '2枚という依頼を理解するが、PoCでは実際に送信できないと伝える。', type: '依頼' },
  { id: 11, input: 'タオル2枚、いや3枚', expected: '訂正後の3枚を最終意図として理解する。', type: '訂正' },
  { id: 12, input: 'What time is breakfast?', expected: '英語で7:00 a.m.–10:00 a.m., last entry 9:30 a.m. と回答する。', type: '英語' },
  { id: 13, input: 'Can I get two extra towels?', expected: '英語で2枚の追加タオル依頼を理解し、未送信であることを正しく伝える。', type: '英語依頼' },
  { id: 14, input: 'チェックアウト後、荷物預かってくれる？', expected: '当日中はフロントで預かり可能と回答する。', type: '登録情報' },
];

export function buildHotelKnowledgeText() {
  return `AUTHORITATIVE HOTEL DATA (TEST DATA)\n${JSON.stringify(HOTEL_PROFILE, null, 2)}\n\nINTENTIONALLY UNKNOWN / UNREGISTERED FACTS\n${UNKNOWN_FACTS.map((x) => `- ${x}`).join('\n')}`;
}

export const HOTEL_PROFILE = {
  meta: {
    hotelName: 'YORIMICHIホテル',
    dataType: '検証用の架空ホテルデータ',
    purpose: 'GPT-Live-1のホテルフロント会話PoCで、登録情報に沿って回答・依頼整理できるか検証するための前提情報',
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
    lateCheckout: '当日の空室状況によるため確約不可。希望時刻を確認してホテルスタッフへの依頼候補として整理する。',
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
    additionalItems: '追加タオルやアメニティはフロントへ依頼可能。数量が必要な品は数量を確認してから依頼候補として整理する。',
  },
  housekeeping: {
    standardWindow: '10:00〜14:00',
    doNotDisturb: '清掃不要の場合は客室ドアの「清掃不要」表示を利用できる。会話で清掃不要を希望した場合はスタッフ依頼候補として整理する。',
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
    taxi: 'フロントでタクシー手配相談可能。希望時刻と行き先を確認して依頼候補として整理する。',
    airportShuttle: '未登録。',
  },
  nearby: {
    restaurant: 'ホテルスタッフおすすめのデモ情報は staffRecommendations を参照する。',
    area: '並木通りエリアまで徒歩約10分。',
    hotSpring: '「みどりの湯」車約8分。10:00〜23:00。大人980円。',
  },
  staffRecommendations: {
    notice: '以下はUI検証専用の架空サンプル。実在店舗情報として扱わない。',
    places: [
      {
        id: 'demo-soba',
        name: '信州そば 山の音（デモ）',
        category: '飲食店',
        genre: '信州そば・郷土料理',
        access: 'ホテルから徒歩約6分',
        budget: '1,500〜2,500円',
        staffComment: '軽めの夕食や信州らしい食事を希望する方におすすめ。',
        webUrl: 'https://www.google.com/search?q=%E6%9D%BE%E6%9C%AC%E9%A7%85+%E4%BF%A1%E5%B7%9E%E3%81%9D%E3%81%B0',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=%E6%9D%BE%E6%9C%AC%E9%A7%85+%E4%BF%A1%E5%B7%9E%E3%81%9D%E3%81%B0',
      },
      {
        id: 'demo-izakaya',
        name: '信州炉端 みずき（デモ）',
        category: '飲食店',
        genre: '炉端焼き・地酒',
        access: 'ホテルから徒歩約8分',
        budget: '4,000〜6,000円',
        staffComment: '地酒や地元食材をゆっくり楽しみたい方におすすめ。',
        webUrl: 'https://www.google.com/search?q=%E6%9D%BE%E6%9C%AC%E9%A7%85+%E7%82%89%E7%AB%AF%E7%84%BC%E3%81%8D+%E5%9C%B0%E9%85%92',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=%E6%9D%BE%E6%9C%AC%E9%A7%85+%E7%82%89%E7%AB%AF%E7%84%BC%E3%81%8D+%E5%9C%B0%E9%85%92',
      },
      {
        id: 'demo-craft',
        name: 'MATSUMOTO CRAFT STUDIO（デモ）',
        category: '体験',
        genre: 'クラフト体験・工芸',
        access: 'ホテルから徒歩約12分',
        budget: '3,000〜5,000円',
        staffComment: '雨の日や、旅の思い出を形に残したい方におすすめ。',
        webUrl: 'https://www.google.com/search?q=%E6%9D%BE%E6%9C%AC+%E3%82%AF%E3%83%A9%E3%83%95%E3%83%88%E4%BD%93%E9%A8%93',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=%E6%9D%BE%E6%9C%AC+%E3%82%AF%E3%83%A9%E3%83%95%E3%83%88%E4%BD%93%E9%A8%93',
      },
    ],
  },
  serviceRules: {
    physicalRequests: 'タオル、アメニティ、清掃、清掃不要、貸出品、タクシー、レイトチェックアウト・予約変更、設備不具合、荷物対応など、ホテルスタッフの行動が必要な依頼は構造化し、最終確認UIを出す。',
    missingSlots: '依頼に必要な情報が不足していれば一度に1つだけ確認質問する。例：「タオルお願い」→「何枚必要でしょうか？」。「チェックアウトを遅らせたい」→希望時刻を確認する。',
    confirmation: '依頼内容が揃ったら「画面に確認内容を表示するので確認してください」と案内する。ユーザーが確認UIで承諾する前に「手配しました」「送信しました」と言わない。',
    mockMode: '現在は検証モード。承諾ボタンを押しても実際のホテル管理画面には送信せず、モック受付IDのみ返す。',
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
  'ホテルスタッフのアクションが必要な依頼は、必要情報を1つずつ確認し、揃ったら確認UIを見るよう案内する。',
  'ユーザーが確認UIで承諾する前に、依頼・予約・変更・配車等が完了したと表現しない。',
  'おすすめを求められた場合は staffRecommendations のデモ情報のみをホテルスタッフのおすすめとして案内する。',
  '音声では原則1〜2文で短く自然に返答する。',
  '客室は512号室と既知なので、依頼のたびに部屋番号を聞き直さない。',
];

export const TEST_SCENARIOS = [
  { id: 1, input: '朝食は何時まで？', expected: '10:00まで。最終入店は9:30と回答し、根拠を朝食情報として表示する。', type: '登録情報' },
  { id: 2, input: 'Wi-Fiのパスワード教えて', expected: 'yorimichi2026 と回答する。', type: '登録情報' },
  { id: 3, input: 'ランドリーいくら？', expected: '3階・24時間までは答えてよいが、料金は未登録なので推測しない。', type: '一部未登録' },
  { id: 4, input: 'ジム何階？', expected: '登録情報では確認できないと回答する。', type: '幻覚テスト' },
  { id: 5, input: 'タオルお願い', expected: '何枚必要かを1問だけ聞き返し、確認カードはまだ出さない。', type: '確認質問' },
  { id: 6, input: 'タオル2枚持ってきて', expected: '客室512 / タオル / 2枚として構造化し、最終確認カードを表示する。', type: '依頼UI' },
  { id: 7, input: '清掃は不要です', expected: '清掃不要として構造化し、最終確認カードを表示する。', type: '依頼UI' },
  { id: 8, input: 'チェックアウトを13時に変更したい', expected: '希望13:00として構造化し、確約せずホテルへの変更依頼カードを表示する。', type: '変更依頼' },
  { id: 9, input: 'チェックアウトを遅らせたい', expected: '希望時刻を聞き返し、時刻が分かるまで確認カードは出さない。', type: '確認質問' },
  { id: 10, input: 'タクシーを呼んで', expected: '希望時刻と行き先など不足情報を確認する。', type: '確認質問' },
  { id: 11, input: 'タオル2枚、いや3枚', expected: '訂正後の3枚を最終意図として構造化する。', type: '訂正' },
  { id: 12, input: 'この近くでおすすめのご飯ある？', expected: 'ホテルスタッフおすすめとしてデモ3件のカードを表示し、Web検索・Google Mapsリンクを出す。', type: 'おすすめ' },
  { id: 13, input: '何か体験できるところある？', expected: '体験のデモ候補をホテルスタッフおすすめとして表示する。', type: 'おすすめ' },
  { id: 14, input: 'Can I get two extra towels?', expected: '英語で依頼を理解し、2枚の確認カードを表示する。', type: '英語依頼' },
];

export function buildHotelKnowledgeText() {
  return `AUTHORITATIVE HOTEL DATA (TEST DATA)\n${JSON.stringify(HOTEL_PROFILE, null, 2)}\n\nINTENTIONALLY UNKNOWN / UNREGISTERED FACTS\n${UNKNOWN_FACTS.map((x) => `- ${x}`).join('\n')}`;
}

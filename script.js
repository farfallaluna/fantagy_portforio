const defaultConfig = {
  creator_name: 'farfalla_LUNA',
  creator_title: '境界クリエイター',
  creator_subtitle: '感情とデザインの翻訳者',
  intro_text: '言葉にならない感情を、かたちに。',
};


/* ======================
   モーダル
====================== */

function openImageModal(imageSrc) {

  const modal = document.getElementById('image-modal');
  const img = document.getElementById('modal-image');

  if (!modal || !img) return;

  img.src = imageSrc;
  modal.classList.add('active');

}

function closeImageModal() {

  const modal = document.getElementById('image-modal');
  if (!modal) return;

  modal.classList.remove('active');

}


/* ======================
   ページ切替
====================== */

function showPage(pageName) {

  const wrapper = document.getElementById('app-wrapper');
  if (!wrapper) return;


  /* ホーム非表示 */

  const sections = wrapper.querySelectorAll(':scope > div > section');

  sections.forEach(section => {
    section.style.display = 'none';
  });

  const footer = wrapper.querySelector(':scope > div > footer');
  if (footer) footer.style.display = 'none';



  /* ======================
     画像データ
  ====================== */

  let pageTitle = '';
  let pageDesc = '';
  let images = [];
  let processSteps = [];
  let testimonial = [];
  let faq = [];


  if (pageName === 'web') {

    pageTitle = 'Webサイト制作';
    pageDesc = 'LP・Webサイトデザイン';

    images = [
      'images/work1.png',
      'images/work2.jpeg',
      'images/work3.jpeg'
    ];
    
  
  }


  else if (pageName === 'sns') {

    pageTitle = 'SNSデザイン';
    pageDesc = 'Instagram・SNSビジュアル';

    images = [
      'images/work4.jpg',
      'images/work5.png',
      'images/work6.jpg'
    ];

  }



  else if (pageName === 'illust') {

    pageTitle = 'イラスト・アイコン•ロゴ';
    pageDesc = '感情表現・世界観ビジュアル(AI学習禁止)';

    images = [
      'images/work7.jpg',
      'images/work9.jpg',
      'images/work15.jpg',
      'images/work16.jpg',
      'images/work17.jpg'
    ];

  }


  else if (pageName === 'vision') {

    pageTitle = '世界観設計';
    pageDesc = 'ブランド・ビジュアル設計';

    images = [
      'images/work11.jpg',
      'images/work12.jpg',
      'images/work13.jpg',
      'images/work14.jpg'
    ];

  }


  else if (pageName === 'contact') {

    pageTitle = 'Contact';
    pageDesc = 'お問い合わせはこちら';

  }
  


  /* ======================
     ギャラリー生成
  ====================== */

  let galleryHTML = '';

  images.forEach(src => {

    galleryHTML += `

      <div onclick="openImageModal('${src}')"
        style="
          cursor:pointer;
          overflow:hidden;
          border-radius:12px;
          aspect-ratio:4/3;
          background:#0d1929;
        ">

        <img src="${src}"
          style="
            width:100%;
            height:100%;
            object-fit:cover;
            transition:0.6s;
          "
          onmouseover="this.style.transform='scale(1.05)'"
          onmouseout="this.style.transform='scale(1)'"
        >

      </div>

    `;

  });



  let gallerySection = '';

  if (pageName !== 'contact') {

    gallerySection = `
      <div style="max-width:1100px;margin:0 auto;">
        <div style="
          display:grid;
          grid-template-columns:
          repeat(auto-fit,minmax(260px,1fr));
          gap:40px;
        ">
          ${galleryHTML}
        </div>
      </div>
    `;

  }
  let processHTML = '';

if (WORKS_DATA[pageName]) {
  processHTML = `
    <div style="max-width:900px;margin:80px auto;">
      <h3 style="color:#d4af37;margin-bottom:30px;">制作の流れ</h3>
      ${WORKS_DATA[pageName].processSteps.map((step, i) => `
        <div style="margin-bottom:30px;">
          <p style="color:#888;">Step ${i + 1}</p>
          <h4 style="color:#fff;">${step.title}</h4>
          <p style="color:#aaa;">${step.description}</p>
        </div>
      `).join('')}
    </div>
  `;
}
let pricingHTML = '';

if (PRICING_DATA[pageName]) {
  pricingHTML = `
    <div style="max-width:1000px;margin:80px auto;">
      <h3 style="color:#d4af37;margin-bottom:30px;">料金プラン</h3>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:30px;">
        ${PRICING_DATA[pageName].map(plan => `
          <div style="background:#111;padding:20px;border-radius:12px;">
            <h4 style="color:#fff;">${plan.name}</h4>
            <p style="color:#d4af37;font-size:20px;">${plan.price}</p>
            <ul style="color:#aaa;padding-left:20px;">
              ${plan.features.map(f => `<li>${f}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
let testimonialHTML = '';

if (WORKS_DATA[pageName]) {
  testimonialHTML = `
    <div style="max-width:900px;margin:80px auto;">
      <h3 style="color:#d4af37;margin-bottom:30px;">お客様の声</h3>
      ${WORKS_DATA[pageName].testimonials.map(t => `
        <div style="margin-bottom:30px;">
          <p style="color:#fff;">${t.name}</p>
          <p style="color:#888;">${t.service}</p>
          <p style="color:#aaa;">「${t.comment}」</p>
        </div>
      `).join('')}
    </div>
  `;
}
let faqHTML = '';

if (WORKS_DATA[pageName]) {
  faqHTML = `
    <div style="max-width:900px;margin:80px auto;">
      <h3 style="color:#d4af37;margin-bottom:30px;">よくある質問</h3>
      ${WORKS_DATA[pageName].faqs.map(f => `
        <div style="margin-bottom:20px;">
          <p style="color:#fff;">Q. ${f.question}</p>
          <p style="color:#aaa;">A. ${f.answer}</p>
        </div>
      `).join('')}
    </div>
  `;
}


  /* ======================
     detail HTML
  ====================== */

  const detailHTML = `

    <section class="min-h-screen px-6 py-24">

      <button onclick="showHome()"
        style="
          color:#d4af37;
          font-size:18px;
          margin-bottom:10px;
          background:none;
          border:none;
          cursor:pointer;
        ">

        ← Back

      </button>


      <div style="
        width:80px;
        height:1px;
        background:#d4af37;
        margin-bottom:40px;">
      </div>


      <div style="text-align:center;">

        <h2 style="
          font-size:40px;
          color:#e8e8e8;
          margin-bottom:10px;
          font-family:'Cormorant Garamond',serif;
        ">

          ${pageTitle}

        </h2>


        <p style="
          color:#8899aa;
          margin-bottom:60px;
        ">

          ${pageDesc}

        </p>

      </div>


      ${gallerySection}

      ${processHTML}

      ${pricingHTML}

      ${testimonialHTML}

      ${faqHTML}

    </section>

  `;



  /* ======================
     コンテナ生成
  ====================== */

  let container =
    document.getElementById('detail-page-container');

  if (!container) {

    container = document.createElement('div');
    container.id = 'detail-page-container';

    wrapper.appendChild(container);

  }


  container.innerHTML = detailHTML;

  wrapper.scrollTop = 0;

}



/* ======================
   戻る
====================== */

function showHome() {

  const wrapper = document.getElementById('app-wrapper');

  const container =
    document.getElementById('detail-page-container');

  if (container) container.remove();


  const sections =
    wrapper.querySelectorAll(':scope > div > section');

  sections.forEach(section => {
    section.style.display = '';
  });


  const footer =
    wrapper.querySelector(':scope > div > footer');

  if (footer) footer.style.display = '';

}
const PRICING_DATA = {
  web: [
    {
      name: 'ライトプラン',
      price: '¥30,000',
      features: [
        '1ページLP制作',
        'スマホ対応デザイン',
        'UIデザイン制作',
        '修正2回まで無料',
        '納期：約7日'
      ]
    },
    {
      name: 'スタンダード',
      price: '¥60,000',
      features: [
        '3〜5ページサイト',
        'レスポンシブ対応',
        'カラーパレット設計',
        '修正3回まで無料',
        '納期：約14日'
      ]
    },
    {
      name: 'プレミアム',
      price: '¥120,000',
      features: [
        '5ページ以上',
        '世界観コンセプト設計',
        'SNS連携デザイン',
        '修正5回まで無料',
        '納期：約21日'
      ]
    }
  ],
  
  sns: [
    {
      name: '単発制作',
      price: '¥6,000',
      features: [
        'Instagram投稿 3枚',
        'または ストーリーズ 5枚',
        'Canvaテンプレート付き',
        '修正2回まで無料',
        '納期：約3日'
      ]
    },
    {
      name: '月額プラン',
      price: '¥25,000',
      features: [
        '月12投稿まで',
        'ストーリーズ含む',
        '統一テンプレート設計',
        '修正3回/月まで無料',
        '優先対応'
      ]
    },
    {
      name: 'ブランディング',
      price: '¥50,000',
      features: [
        'アカウント全体設計',
        'プロフィール・ハイライト',
        '投稿テンプレート10種',
        '運用アドバイス付き',
        '納期：約14日'
      ]
    }
  ],
  
  illust: [
    {
      name: 'シンプル',
      price: '¥10,000',
      features: [
        'アイコン・ロゴ制作',
        'シンプルなモチーフ',
        '1デザイン',
        '修正2回まで無料',
        '納期：約5日'
      ]
    },
    {
      name: 'スタンダード',
      price: '¥25,000',
      features: [
        '感情表現イラスト',
        '蝶・月などのモチーフ',
        '背景・装飾込み',
        '修正3回まで無料',
        '納期：約10日'
      ]
    },
    {
      name: 'プレミアム',
      price: '¥45,000',
      features: [
        '複雑な世界観表現',
        'オリジナルキャラクター',
        '商用利用・二次利用可',
        '修正5回まで無料',
        '納期：約14日'
      ]
    }
  ],
  
  vision: [
    {
      name: 'ベーシック',
      price: '¥25,000',
      features: [
        'カラーパレット設計',
        'フォント選定',
        'ムードボード作成',
        '修正2回まで無料',
        '納期：約7日'
      ]
    },
    {
      name: 'スタンダード',
      price: '¥45,000',
      features: [
        'ベーシック内容 +',
        'ビジュアルガイドライン',
        'SNS投稿テンプレート',
        '修正3回まで無料',
        '納期：約14日'
      ]
    },
    {
      name: 'プレミアム',
      price: '¥80,000',
      features: [
        'ブランド全体設計',
        'ロゴ・Web・SNS統一',
        '運用サポート1ヶ月',
        '修正5回まで無料',
        '納期：約21日'
      ]
    }
  ]
};

// ===========================
// Worksデータ
// ===========================

const WORKS_DATA = {
  web: {
    title: 'Webサイト制作',
    description: 'LP・Webサイトのデザイン制作｜余白と静けさを大切にした設計',
   
    processSteps: [
      {
        title: 'ヒアリング',
        description: 'お客様のビジョン、ターゲット層、デザインの好みを詳しくお伺いします。世界観を大切にするため、言葉にならない想いも丁寧に汲み取ります。'
      },
      {
        title: 'コンセプト設計',
        description: 'ヒアリング内容を基に、サイト全体のコンセプト・カラーパレット・トンマナを設計。ムードボードを作成し、方向性を共有します。'
      },
      {
        title: 'デザイン制作',
        description: 'LP・Webサイトのデザインを制作。余白と静けさを大切に、洗練された世界観を表現します。'
      },
      {
        title: '修正・調整',
        description: 'ご確認いただき、フィードバックを反映。細部までこだわり、お客様が納得いくまで丁寧に調整します（3回まで無料）。'
      },
      {
        title: '納品',
        description: 'HTML・CSSなどでコーディングした形で納品いたします。必要に応じて、運用ガイドもお渡しします。'
      }
    ],
    testimonials: [
      {
        name: '佐藤美咲 様',
        service: 'Webサイト制作（スタンダードプラン）',
        comment: '世界観を大切にしたデザインで、お客様からも「雰囲気が素敵」とお声をいただきました。丁寧なヒアリングで、私の伝えたいイメージが形になりました。'
      },
      {
        name: '高橋りえ 様',
        service: 'LP制作（ライトプラン）',
        comment: '初めてのLP制作で不安でしたが、分かりやすく進めていただき安心しました。余白の使い方が美しく、洗練された印象に仕上がりました。'
      }
    ],
    faqs: [
      {
        question: 'Webサイトはどのような形で納品されますか？',
        answer: 'HTML・CSSなどでコーディングした形で納品いたします。レスポンシブ対応も含まれており、PC・タブレット・スマホで美しく表示されます。'
      },
      {
        question: '修正回数の制限はありますか？',
        answer: 'プランによって無料修正回数が異なります（ライト：2回、スタンダード：3回、プレミアム：5回）。それ以降は1回につき¥3,000の追加料金で対応いたします。'
      },
      {
        question: 'スマホ対応はされていますか？',
        answer: 'はい、全てのプランでレスポンシブ対応を行います。PC・タブレット・スマホで美しく表示されるように設計します。'
      },
      {
        question: 'サーバーへのアップロードもお願いできますか？',
        answer: 'はい、可能です。サーバー設定やアップロード作業も別途料金で承ります。お気軽にご相談ください。'
      }
    ]
  },
  
  sns: {
    title: 'SNSデザイン',
    description: 'Instagram投稿・ストーリーズ・サムネイル｜一目で世界観が伝わるデザイン',
  
    processSteps: [
      {
        title: 'ヒアリング・分析',
        description: 'アカウントの世界観、ターゲット層、投稿目的をお伺いします。既存の投稿も分析し、ブランドの方向性を明確にします。'
      },
      {
        title: 'テンプレート設計',
        description: '統一感のあるSNS投稿テンプレートを設計。フォント・カラー・レイアウトを統一し、一目で世界観が伝わるデザインを作ります。'
      },
      {
        title: 'デザイン制作',
        description: 'Instagram投稿、ストーリーズ、サムネイル、バナーなどを制作。テキスト・写真・装飾のバランスを大切にします。'
      },
      {
        title: '修正・ブラッシュアップ',
        description: 'フィードバックを反映し、細部を調整。投稿の世界観が統一されているか、視認性は良いかなど、細かくチェックします。'
      },
      {
        title: '納品・運用サポート',
        description: '完成したデザインをCanvaリンク・PNG・JPEGで納品。継続依頼の場合は、月額プランもご用意しています。'
      }
    ],
    testimonials: [
      {
        name: '田中あい 様',
        service: 'SNSデザイン（月額プラン）',
        comment: '毎月統一感のある投稿ができるようになり、フォロワー様から「世界観が素敵」とコメントをいただくようになりました。運用が楽になりました。'
      },
      {
        name: '山本ゆり 様',
        service: 'Instagram投稿デザイン',
        comment: 'テキストと写真のバランスが絶妙で、自分では思いつかないレイアウトに感動しました。Canvaテンプレートで今後も使い回せるのが嬉しいです。'
      }
    ],
    faqs: [
      {
        question: '既存の投稿の雰囲気に合わせてもらえますか？',
        answer: 'はい、可能です。ヒアリング時に既存の投稿を拝見し、トンマナに合わせたデザインをご提案いたします。または、新しい世界観への刷新も対応可能です。'
      },
      {
        question: '写真素材がない場合でも依頼できますか？',
        answer: 'はい、写真素材がない場合は、フリー素材を使用したデザインも可能です。または、お客様のイメージに合う素材をこちらで選定・ご提案することもできます。'
      },
      {
        question: 'ストーリーズやリールのデザインも対応していますか？',
        answer: 'はい、ストーリーズ、リール、通常投稿、サムネイル、バナーなど、Instagram関連の全てのデザインに対応しています。'
      },
      {
        question: '月額プランは途中で解約できますか？',
        answer: 'はい、いつでも解約可能です。解約希望月の前月末までにご連絡ください。違約金などはございません。'
      }
    ]
  },
  
  illust: {
    title: 'イラスト・アイコン・ロゴ',
    description: '感情表現・抽象的モチーフ｜蝶・月・心の揺らぎを描く（AI学習禁止）',
  
    processSteps: [
      {
        title: 'ヒアリング・世界観共有',
        description: 'どんな感情・世界観を表現したいか、お客様の想いをじっくりお伺いします。抽象的なイメージも、言葉を重ねながら形にします。'
      },
      {
        title: 'ラフスケッチ',
        description: 'モチーフ（蝶・月・花など）や構図の方向性を2〜3案ご提案。お客様と一緒に、最も心に響く案を選びます。'
      },
      {
        title: '線画・着彩',
        description: '選ばれた案を基に、線画を起こし、着彩。色のトーン・タッチにこだわり、感情が伝わる一枚に仕上げます。'
      },
      {
        title: '修正・仕上げ',
        description: 'フィードバックを反映し、細部を調整。光の加減、余白のバランスなど、繊細に仕上げます。'
      },
      {
        title: '納品',
        description: '高解像度のPNG・JPEG形式で納品。商用利用可（AI学習禁止）。アイコン・ロゴとしてもご使用いただけます。'
      }
    ],
    testimonials: [
      {
        name: '鈴木まゆ 様',
        service: 'イラスト制作（スタンダードプラン）',
        comment: '感情を形にするのが難しい中、丁寧にヒアリングしていただき、心の揺らぎを美しく表現してくださいました。涙が出るほど素敵な作品でした。'
      },
      {
        name: '中村かおり 様',
        service: 'アイコン制作（シンプルプラン）',
        comment: '蝶モチーフのアイコンを依頼しました。シンプルながらも繊細で、SNSでも目を引くデザインに仕上げていただきました。'
      }
    ],
    faqs: [
      {
        question: 'イラストの著作権はどうなりますか？',
        answer: '納品後、商用利用・二次利用が可能です（プランによります）。ただし、AI学習への利用、第三者への再販売、著作者の改変は禁止とさせていただきます。'
      },
      {
        question: 'デジタルとアナログ、どちらで制作されますか？',
        answer: '基本的にデジタルで制作しています。納品形式はPNG・JPEG（高解像度）です。アナログ風のタッチをご希望の場合も、デジタルで表現可能です。'
      },
      {
        question: 'ラフスケッチの段階で大幅な変更は可能ですか？',
        answer: 'はい、ラフスケッチの段階であれば大幅な変更も可能です。線画・着彩後の大幅な変更は追加料金が発生する場合がございます。'
      },
      {
        question: '具体的なイメージが固まっていなくても大丈夫ですか？',
        answer: 'はい、大丈夫です。「悲しいけれど美しい」「静かで力強い」など、抽象的なイメージからでもヒアリングを通じて形にしていきます。'
      }
    ]
  },
  
  vision: {
    title: '世界観デザイン',
    description: 'ブランド・ビジュアルコンセプト設計｜色・余白・トーンの統一',

    processSteps: [
      {
        title: '深いヒアリング',
        description: 'ブランドの理念、ターゲット層、目指す世界観を深く掘り下げます。お客様の「伝えたい空気感」を言語化・可視化します。'
      },
      {
        title: 'ムードボード作成',
        description: 'イメージに合う写真・色・フォント・モチーフを集め、ムードボードを作成。視覚的にブランドの方向性を共有します。'
      },
      {
        title: 'カラーパレット・フォント設計',
        description: 'ブランド専用のカラーパレット（メイン・サブ・アクセント）と、フォントの組み合わせを設計。統一感のある世界観を構築します。'
      },
      {
        title: 'ビジュアルガイドライン',
        description: '余白の取り方、写真のトーン、装飾のルールなど、統一感を保つためのガイドラインを作成。運用しやすい形でまとめます。'
      },
      {
        title: '納品・サポート',
        description: 'ムードボード・カラーパレット・ガイドラインをPDF・Canvaで納品。運用中の相談も受け付けます。'
      }
    ],
    testimonials: [
      {
        name: '伊藤さくら 様',
        service: '世界観デザイン（スタンダードプラン）',
        comment: 'ブランド全体の方向性が明確になり、SNSもWebも統一感のある世界観を作れました。ムードボードが美しく、見返すたびにモチベーションが上がります。'
      },
      {
        name: '小林なつみ 様',
        service: 'ビジュアルコンセプト設計（ベーシックプラン）',
        comment: 'カラーパレット設計で、自分の「好き」が言語化されました。今後のデザイン制作の軸ができて、とても助かりました。'
      }
    ],
    faqs: [
      {
        question: 'ブランドがまだ明確になっていなくても依頼できますか？',
        answer: 'はい、大丈夫です。ヒアリングを通じて、お客様の価値観・好み・目指す方向性を一緒に言語化していきます。むしろ、曖昧な段階でのご相談をお勧めします。'
      },
      {
        question: 'ムードボードとは何ですか？',
        answer: 'ムードボードとは、ブランドのイメージに合う写真・色・フォント・モチーフを集めたビジュアル資料です。方向性を視覚的に共有するためのツールです。'
      },
      {
        question: '納品後、自分で世界観を守りながら運用できるか不安です。',
        answer: 'ビジュアルガイドラインをお渡しするため、運用時のルール（余白・色の使い方・フォントなど）が明確になります。また、運用サポートプランもございます。'
      },
      {
        question: '既存のブランドのリニューアルでも依頼できますか？',
        answer: 'はい、可能です。既存のブランド資産を大切にしながら、新しい世界観への刷新をサポートいたします。'
      }
    ]
  }
};

// ===========================
// Navigation
// ===========================

// Scroll detection for nav
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Active section detection
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-section') === current) {
      link.classList.add('active');
    }
  });
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Close mobile menu if open
      const mobileMenu = document.querySelector('.mobile-menu');
      const navToggle = document.querySelector('.nav-toggle');
      if (mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        navToggle.classList.remove('active');
      }
    }
  });
});

// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking overlay
const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
mobileMenuOverlay.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  navToggle.classList.remove('active');
});

// ===========================
// Work Cards - Open Modal
// ===========================

const workCards = document.querySelectorAll('.work-card');
const modal = document.getElementById('work-modal');
const modalBody = document.getElementById('modal-body');
const modalClose = document.querySelector('.modal-close');
const modalOverlay = document.querySelector('.modal-overlay');

workCards.forEach(card => {
  card.addEventListener('click', () => {
    const workType = card.getAttribute('data-work');
    openWorkModal(workType);
  });
});

function openWorkModal(workType) {
  const work = WORKS_DATA[workType];
  const pricing = PRICING_DATA[workType];
  
  if (!work || !pricing) return;
  
  // Build modal content
  let modalContent = `
    <div class="back-button" onclick="closeModal()">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M12 5 L7 10 L12 15" />
      </svg>
      <span style="font-family: 'Zen Kaku Gothic New', sans-serif;">Back</span>
    </div>
    
    <h2 class="modal-title gradient-text">${work.title}</h2>
    <p class="modal-subtitle">${work.description}</p>
    
    <!-- Image Gallery -->
    <div class="modal-section">
      <h3 class="modal-section-title">実績写真</h3>
      <div class="image-gallery">
        ${work.images.map(img => `<img src="${img}" alt="実績写真" class="gallery-image">`).join('')}
      </div>
    </div>
    
    <!-- Process Steps -->
    <div class="modal-section">
      <h3 class="modal-section-title">作業の流れ</h3>
      <div class="process-steps">
        ${work.processSteps.map((step, index) => `
          <div class="process-step">
            <p class="process-step-number">Step ${index + 1}</p>
            <h4 class="process-step-title">${step.title}</h4>
            <p class="process-step-description">${step.description}</p>
          </div>
        `).join('')}
      </div>
    </div>
    
    <!-- Pricing -->
    <div class="modal-section">
      <h3 class="modal-section-title">料金表</h3>
      <div class="pricing-plans">
        ${pricing.map(plan => `
          <div class="pricing-card">
            <h4 class="pricing-name">${plan.name}</h4>
            <p class="pricing-price">${plan.price}</p>
            <ul class="pricing-features">
              ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
    </div>
    
    <!-- Testimonials -->
    <div class="modal-section">
      <h3 class="modal-section-title">お客様の声</h3>
      <div class="testimonials">
        ${work.testimonials.map(testimonial => `
          <div class="testimonial">
            <p class="testimonial-name">${testimonial.name}</p>
            <p class="testimonial-service">${testimonial.service}</p>
            <p class="testimonial-comment">「${testimonial.comment}」</p>
          </div>
        `).join('')}
      </div>
    </div>
    
    <!-- FAQs -->
    <div class="modal-section">
      <h3 class="modal-section-title">よくある質問（FAQ）</h3>
      <div class="faqs">
        ${work.faqs.map((faq, index) => `
          <div class="faq-item" data-faq-index="${index}">
            <button class="faq-question">
              <span class="faq-question-text">Q. ${faq.question}</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
              <p class="faq-answer-text">${faq.answer}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  
  modalBody.innerHTML = modalContent;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  
  // Add FAQ toggle functionality
  initializeFAQs();
}

function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    closeModal();
  }
});

// ===========================
// FAQ Accordion
// ===========================

function initializeFAQs() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all FAQs
      faqItems.forEach(faq => faq.classList.remove('active'));
      
      // Open clicked FAQ if it wasn't active
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

// ===========================
// Logo click - scroll to top
// ===========================

const navLogo = document.querySelector('.nav-logo');
navLogo.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});



type RouteDay = {
  label: string;
  area: string;
  title: string;
  timeline: {
    time: string;
    title: string;
    text: string;
    note?: string;
  }[];
};

const navItems = [
  { href: "#route", label: "路线" },
  { href: "#spots", label: "景点" },
  { href: "#food", label: "美食" },
  { href: "#tips", label: "贴士" },
  { href: "#budget", label: "预算" }
];

const quickItems = [
  {
    value: "3 天",
    text: "覆盖东山、伏见、岚山、市中心四个核心区域。"
  },
  {
    value: "35k 步",
    text: "建议穿好走的鞋，行李尽量寄存在酒店或车站。"
  },
  {
    value: "¥55k",
    text: "中等舒适度人均参考，不含往返机票。"
  },
  {
    value: "7:30",
    text: "热门景点尽量早到，体验会安静很多。"
  }
];

const routeDays: RouteDay[] = [
  {
    label: "Day 1",
    area: "东山",
    title: "清水寺与祇园散步",
    timeline: [
      {
        time: "08:00",
        title: "清水寺主线游览",
        text: "仁王门入场，先拍三重塔，再去本堂舞台和奥之院回望舞台，最后绕到音羽瀑布。",
        note: "建议 90-120 分钟，清晨进、顺坡下山。"
      },
      {
        time: "10:15",
        title: "三年坂、二年坂吃甜点",
        text: "从清水坂下行，去 MACCHA HOUSE 清水三宁坂店点宇治抹茶提拉米苏或抹茶芭菲；想买伴手礼可看京ばあむ清水店的抹茶豆乳年轮蛋糕。",
        note: "边走边吃不礼貌，买完在店内或指定区域吃。"
      },
      {
        time: "13:30",
        title: "高台寺、石塀小路、八坂神社",
        text: "午后从宁宁之道进高台寺庭园，出来钻石塀小路，最后到八坂神社西楼门。",
        note: "这段小巷适合慢拍照，避开居民门口停留。"
      },
      {
        time: "18:00",
        title: "祇园晚餐和鸭川散步",
        text: "花见小路只走主街和巷口，晚餐去先斗町选居酒屋或京料理；预算友好可在河原町附近吃鳗鱼饭、亲子丼或拉面。",
        note: "饭后从四条大桥沿鸭川走到三条，夜景最好。"
      }
    ]
  },
  {
    label: "Day 2",
    area: "伏见",
    title: "千本鸟居与锦市场",
    timeline: [
      {
        time: "07:30",
        title: "伏见稻荷半山路线",
        text: "JR 稻荷站出站，按楼门、本殿、千本鸟居、奥社奉拜所走；体力够继续到熊鹰社和四辻观景点再折返。",
        note: "到四辻往返约 2.5-3 小时，完整绕山另留时间。"
      },
      {
        time: "11:45",
        title: "锦市场边逛边吃",
        text: "从高仓通西侧进，先吃こんなもんじゃ的豆乳甜甜圈，再到三木鸡卵或锦平野吃出汁玉子烧，穿插试京渍物、豆皮和海鲜串。",
        note: "市场通道窄，买到的东西在店前吃完再走。"
      },
      {
        time: "15:00",
        title: "寺町通、新京极补咖啡和杂货",
        text: "从锦天满宫出来接寺町通，逛鸠居堂纸品、药妆和中古杂货；想坐下来可去六曜社或 % Arabica 京都藤井大丸附近店喝咖啡。",
        note: "把购物放这段，晚上不用拎着走景点。"
      },
      {
        time: "19:00",
        title: "先斗町订位晚餐",
        text: "想吃河景选有川床席的店，想轻松就找烤鸟、炸串或关东煮；点单可选京野菜天妇罗、鸭肉、豆腐料理和一杯当地清酒。",
        note: "热门店提前订，不订就 17:30 前去排第一轮。"
      }
    ]
  },
  {
    label: "Day 3",
    area: "岚山",
    title: "竹林、渡月桥与庭园",
    timeline: [
      {
        time: "08:00",
        title: "竹林小径反向切入",
        text: "JR 嵯峨岚山站下车，先走野宫神社、竹林小径，避开渡月桥方向涌来的人流。",
        note: "竹林主段不长，重点是早到和少停在路中央。"
      },
      {
        time: "09:15",
        title: "天龙寺庭园",
        text: "从北门附近进天龙寺，绕曹源池看借景庭园，再从正门回到岚山主街。",
        note: "想更顺也可先正门进、北门出，直接接竹林。"
      },
      {
        time: "12:00",
        title: "午餐吃豆腐或精进料理",
        text: "预算稳妥选湯豆腐嵯峨野点汤豆腐定食；想把体验拉满，提前预约天龙寺直营「篩月」精进料理。",
        note: "篩月常需预约，并另付庭园参拜料。"
      },
      {
        time: "15:00",
        title: "渡月桥、保津川、咖啡收尾",
        text: "过渡月桥看河面和岚山山色，回桥北在 Arabica Kyoto Arashiyama 买咖啡，傍晚从岚电岚山或 JR 嵯峨岚山返程。",
        note: "樱花、红叶季给车站排队多留 20 分钟。"
      }
    ]
  },
  {
    label: "Plus",
    area: "加选",
    title: "有余力时这样加",
    timeline: [
      {
        time: "半天",
        title: "金阁寺、龙安寺、北野天满宫",
        text: "按金阁寺拍倒影、龙安寺看石庭、北野天满宫喝茶的顺序走，适合第三天不去岚山时替换。"
      },
      {
        time: "雨天",
        title: "博物馆和商场线",
        text: "京都国立博物馆配三十三间堂，下午回京都站 The Cube、Porta 地下街买伴手礼。"
      },
      {
        time: "夜间",
        title: "白川南通夜散步",
        text: "从祇园白川走到巽桥，再沿花见小路外围回四条；八坂塔周边适合拍夜景但要安静通行。"
      },
      {
        time: "慢游",
        title: "拆分 Day 2",
        text: "伏见稻荷上午独立成半日，锦市场、寺町和先斗町放下午晚上，脚会舒服很多。"
      }
    ]
  }
];

const spots = [
  {
    title: "伏见稻荷大社",
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=1200&q=80",
    alt: "伏见稻荷大社朱红色鸟居",
    text: "楼门、本殿、千本鸟居、奥社奉拜所是轻量路线；继续到熊鹰社、四辻能看到京都市区，往返约 2.5-3 小时。拍照不要堵在鸟居正中，往上走人会明显变少。",
    badges: ["早到优先", "JR 稻荷站"]
  },
  {
    title: "岚山竹林",
    image: "https://images.unsplash.com/photo-1578469645742-46cae010e5d4?auto=format&fit=crop&w=1200&q=80",
    alt: "岚山竹林小径",
    text: "建议“JR 嵯峨岚山站、野宫神社、竹林、天龙寺北门、曹源池、渡月桥”串联。竹林本身很短，真正值得留时间的是天龙寺庭园和桥边河景。",
    badges: ["半日路线", "西北方向"]
  },
  {
    title: "东山街区",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1200&q=80",
    alt: "京都东山传统街道",
    text: "按“清水寺、三年坂、二年坂、八坂塔、宁宁之道、高台寺、八坂神社、花见小路”下坡走最顺。一路店多，但小巷窄，适合少买多看。",
    badges: ["步行友好", "茶屋多"]
  }
];

const foods = [
  {
    icon: "茶",
    title: "抹茶甜点",
    image: "https://images.unsplash.com/photo-1763469026807-5691623dba0a?auto=format&fit=crop&w=900&q=80",
    imagePosition: "50% 55%",
    alt: "绿色抹茶甜点",
    text: "东山去 MACCHA HOUSE 清水三宁坂店点宇治抹茶提拉米苏、抹茶芭菲；想买伴手礼就选京ばあむ的抹茶豆乳年轮蛋糕。下午茶时段比饭点更舒服。"
  },
  {
    icon: "豆",
    title: "汤豆腐",
    image: "https://images.unsplash.com/photo-1763470260582-894ae15f43bb?auto=format&fit=crop&w=900&q=80",
    imagePosition: "45% 42%",
    alt: "盛有豆腐和海带的日式汤碗",
    text: "岚山选湯豆腐嵯峨野的汤豆腐定食，或提前预约天龙寺「篩月」吃精进料理。口味清淡，适合放在竹林和渡月桥之间。"
  },
  {
    icon: "市",
    title: "锦市场小吃",
    image: "https://images.unsplash.com/photo-1695393246885-a87a0653b6a8?auto=format&fit=crop&w=900&q=80",
    imagePosition: "52% 46%",
    alt: "京都锦市场里的寿司店铺",
    text: "按豆乳甜甜圈、出汁玉子烧、豆皮、京渍物、海鲜串的顺序少量多样。可认准こんなもんじゃ、三木鸡卵、锦平野、有次刀具等老铺。"
  },
  {
    icon: "夜",
    title: "先斗町晚餐",
    image: "https://images.unsplash.com/photo-1750950388590-1d076dd81f88?auto=format&fit=crop&w=900&q=80",
    imagePosition: "50% 52%",
    alt: "夜晚亮灯的京都日式餐馆",
    text: "预算从居酒屋到川床料理差异很大。点京野菜天妇罗、鸭肉、豆腐料理、烤鸟或关东煮最不容易踩雷，河边座位要更早预订。"
  }
];

const tips = [
  {
    title: "住哪里",
    text: "首次到访推荐京都站、四条河原町、乌丸御池。酒店多为 15:00 后入住，退房多在 10:00-11:00，前者换乘方便，后两者吃饭和夜间散步更方便。"
  },
  {
    title: "怎么移动",
    text: "地铁、JR、阪急和步行组合最稳。巴士覆盖广，但旺季可能拥挤，跨区尽量用轨道交通。"
  },
  {
    title: "避开人潮",
    text: "伏见稻荷、清水寺、岚山竹林尽量 8 点前后到。锦市场午前或下午晚些逛会更舒服。"
  }
];

const budgetRows = [
  ["住宿", "¥24,000 - ¥42,000 / 3 晚"],
  ["餐饮", "¥12,000 - ¥20,000 / 3 天"],
  ["市内交通", "¥2,500 - ¥4,500"],
  ["门票与体验", "¥3,000 - ¥8,000"],
  ["总计", "约 ¥41,500 - ¥74,500 / 人"]
];

function SectionHead({ title, text }: { title: string; text: string }) {
  return (
    <div className="section-head">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function Header() {
  return (
    <header className="topbar">
      <a className="brand" href="#top" aria-label="京都三日旅行攻略首页">
        <span className="brand-mark">京</span>
        <span>Kyoto 3 Days</span>
      </a>
      <nav aria-label="页面导航">
        {navItems.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top" aria-label="京都旅行封面">
      <div className="hero-inner">
        <span className="eyebrow">春秋皆宜 · 首次到访友好 · 公共交通为主</span>
        <h1>京都三日旅行攻略</h1>
        <p className="hero-copy">
          把清水寺、伏见稻荷、岚山竹林和锦市场串成轻松路线：早晨看城市醒来，午后留给茶屋与小巷，晚上慢慢走回鸭川。
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#route">
            查看行程
          </a>
          <a className="button secondary" href="#budget">
            估算预算
          </a>
        </div>
      </div>
    </section>
  );
}

function RouteSection() {
  return (
    <section id="route">
      <SectionHead
        title="三日路线"
        text="按地理位置减少折返，保留茶歇和临时绕路的空间。每一天都可以从京都站或四条河原町出发。"
      />
      <div className="route">
        {routeDays.map((day) => (
          <article className="day" key={day.label}>
            <div className="day-tag">
              <span>{day.label}</span>
              <small>{day.area}</small>
            </div>
            <div className="day-body">
              <h3>{day.title}</h3>
              <ul className="timeline">
                {day.timeline.map((item) => (
                  <li key={`${day.label}-${item.time}-${item.title}`}>
                    <time>{item.time}</time>
                    <span>
                      <strong>{item.title}</strong>
                      {item.text}
                      {item.note ? <span className="route-note">{item.note}</span> : null}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SpotsSection() {
  return (
    <section id="spots">
      <SectionHead
        title="必去景点"
        text="这些点兼具辨识度、交通便利和第一次来京都的满足感。热门时段会拥挤，尽量把核心景点放在上午。"
      />
      <div className="spot-grid">
        {spots.map((spot) => (
          <article className="spot-card" key={spot.title}>
            <figure>
              <img src={spot.image} alt={spot.alt} />
            </figure>
            <div>
              <h3>{spot.title}</h3>
              <p>{spot.text}</p>
              <div className="badge-row">
                {spot.badges.map((badge) => (
                  <span className="badge" key={badge}>
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function FoodSection() {
  return (
    <section id="food">
      <SectionHead
        title="吃什么"
        text="京都的好吃不只在高级怀石，也在市场、茶屋和街角小店。午餐排队少一点，晚餐热门店建议提前订。"
      />
      <div className="food-layout">
        <div className="food-photo">
          <img src="/assets/kyoto-food.png" alt="京都窗边餐桌上的汤豆腐、抹茶甜点、玉子烧和烤串" />
        </div>
        <div className="food-list">
          {foods.map((food) => (
            <article className="food-item" key={food.title}>
              <figure className="food-thumb">
                <img src={food.image} alt={food.alt} style={{ objectPosition: food.imagePosition }} />
                <figcaption>{food.icon}</figcaption>
              </figure>
              <div>
                <h3>{food.title}</h3>
                <p>{food.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TipsSection() {
  return (
    <section id="tips">
      <SectionHead
        title="实用贴士"
        text="京都最影响体验的是人流与交通。把热门点前置，把跨区移动放在中午或下午，整趟会轻松很多。"
      />
      <div className="tips">
        {tips.map((tip) => (
          <article className="tip" key={tip.title}>
            <h3>{tip.title}</h3>
            <p>{tip.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function BudgetSection() {
  return (
    <section id="budget">
      <SectionHead
        title="预算参考"
        text="按 2026 年常见旅行消费做的中等档估算，实际价格会随汇率、季节和住宿位置变化。"
      />
      <div className="budget">
        <table aria-label="京都三日人均预算">
          <tbody>
            {budgetRows.map(([label, value]) => (
              <tr key={label}>
                <th>{label}</th>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <aside className="note">
          <h3>轻装慢走，是京都的省心秘诀。</h3>
          <p>
            不要把一天塞满六七个景点。京都的记忆通常来自路上的小庭院、便利店热茶、傍晚鸭川的风，而不是清单被全部划掉。
          </p>
        </aside>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <div className="quick-panel" aria-label="旅行概览">
          {quickItems.map((item) => (
            <div className="quick-item" key={item.value}>
              <strong>{item.value}</strong>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
        <RouteSection />
        <SpotsSection />
        <FoodSection />
        <TipsSection />
        <BudgetSection />
        <footer>
          内容参考京都官方旅游指南、JNTO 日本国家旅游局景点介绍、伏见稻荷大社与天龙寺官方资料，以及部分店铺公开菜单。出行前请再次确认营业时间、门票和交通状态。
        </footer>
      </main>
    </>
  );
}

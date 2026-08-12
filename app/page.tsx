"use client";

type Milestone = {
  year: string;
  title: string;
  eyebrow: string;
  people: string;
  companies: string[];
  summary: string;
  shift: string;
  tech: string[];
  image?: string;
  imageAlt?: string;
  credit?: string;
  creditUrl?: string;
};

type Era = {
  id: string;
  number: string;
  years: string;
  title: string;
  thesis: string;
  color: string;
  milestones: Milestone[];
};

const eras: Era[] = [
  {
    id: "optics",
    number: "01",
    years: "1021—1826",
    title: "让光留下痕迹",
    thesis: "先理解光如何成像，再寻找一种能把它固定下来的材料。",
    color: "#e8ff6a",
    milestones: [
      {
        year: "1021",
        title: "暗箱：相机的光学骨架",
        eyebrow: "从观察工具到成像装置",
        people: "伊本·海赛姆 Ibn al-Haytham",
        companies: ["光学原理"],
        summary: "小孔把外部场景投射成倒像。暗箱还不能保存图像，却确立了相机最基本的结构：封闭空间、进光孔与成像平面。",
        shift: "图像第一次可以被光自动“画”出来，但仍然转瞬即逝。",
        tech: ["小孔成像", "倒像投影", "几何光学"],
        image: "/timeline/camera-obscura.jpg",
        imageAlt: "暗箱原理版画：光线穿过小孔，在暗室内投射出外部景物的倒像",
        credit: "Photoion · Camera Obscura",
        creditUrl: "https://www.photoion.co.uk/blog/camera-obscura/",
      },
      {
        year: "1826",
        title: "第一张被永久保存的相机照片",
        eyebrow: "曝光从一瞬变成数小时",
        people: "约瑟夫·尼塞福尔·涅普斯",
        companies: ["Heliography"],
        summary: "涅普斯把犹太沥青涂在白镴板上，在暗箱中长时间曝光，制成《窗外风景》。光学影像第一次被化学材料永久固定。",
        shift: "摄影从“看见投影”跨入“保存现实”，真正成为一种媒介。",
        tech: ["感光沥青", "白镴板", "超长曝光"],
      },
    ],
  },
  {
    id: "chemistry",
    number: "02",
    years: "1839—1871",
    title: "化学把时间缩短",
    thesis: "银盐、负片与干版，让曝光从分钟走向秒，也让照片可以复制。",
    color: "#ff9b73",
    milestones: [
      {
        year: "1839",
        title: "达盖尔银版：摄影成为一门公共技术",
        eyebrow: "清晰、精细，但每张都是孤本",
        people: "路易·达盖尔 · 阿尔丰斯·吉鲁",
        companies: ["Giroux", "法国科学院"],
        summary: "银镀铜板经碘蒸气感光、汞蒸气显影，可获得前所未有的细节。法国政府公开工艺，吉鲁制造了首批商业相机。",
        shift: "肖像不再只属于能请画师的人；相机开始成为可购买的设备。",
        tech: ["银镀铜板", "汞蒸气显影", "不可复制正像"],
        image: "/timeline/daguerreotype.jpeg",
        imageAlt: "1839 年吉鲁制造的木质达盖尔银版相机，带黄铜镜头和滑动式机身",
        credit: "Deutsches Museum · Le Daguerreotype",
        creditUrl: "https://www.deutsches-museum.de/en/museum-island/exhibitions/photography-and-film",
      },
      {
        year: "1841",
        title: "卡罗式摄影：一张负片，多张照片",
        eyebrow: "复制性进入摄影",
        people: "威廉·亨利·福克斯·塔尔博特",
        companies: ["Calotype"],
        summary: "纸负片可以反复接触印相。相比银版的唯一性，负—正体系把摄影变成了可复制、可传播的图像工业。",
        shift: "今天胶片与数字文件的“母版—副本”逻辑，在这里第一次成形。",
        tech: ["纸负片", "接触印相", "可复制"],
      },
      {
        year: "1871",
        title: "明胶干版：摄影师终于不用背着暗房",
        eyebrow: "预制、储存、随时拍摄",
        people: "理查德·利奇·马多克斯",
        companies: ["Ilford", "Agfa"],
        summary: "明胶溴化银干版比湿版更敏感，而且可预先生产、长期保存。相机快门变得必要，手持拍摄开始可行。",
        shift: "从“现场制备化学品”变成“装好感光材料就能出发”。",
        tech: ["明胶乳剂", "玻璃干版", "快速快门"],
      },
    ],
  },
  {
    id: "film",
    number: "03",
    years: "1888—1948",
    title: "摄影成为大众产品",
    thesis: "卷片、标准画幅与即时显影，持续降低拍照的技能门槛。",
    color: "#74cfff",
    milestones: [
      {
        year: "1888",
        title: "Kodak No. 1：你按快门，其余交给我们",
        eyebrow: "摄影的第一次平台化",
        people: "乔治·伊士曼",
        companies: ["Kodak"],
        summary: "相机预装可拍 100 张的卷片；拍完后整机寄回柯达冲洗、印相和重新装片。技术、服务与品牌被打包成一个系统。",
        shift: "拍照从化学师的工作，变成普通人的日常动作；“快照文化”诞生。",
        tech: ["柔性卷片", "固定焦点", "冲印服务"],
        image: "/timeline/kodak-no1.jpg",
        imageAlt: "1888 年 Kodak No. 1 盒式相机，皮革包覆机身并配有卷片旋钮",
        credit: "Camera-Wiki · Kodak No. 1",
        creditUrl: "https://camera-wiki.org/wiki/Kodak_No._1",
      },
      {
        year: "1925",
        title: "Leica I：35mm 把相机带上街头",
        eyebrow: "小底片换来真正的机动性",
        people: "奥斯卡·巴纳克",
        companies: ["Leitz", "Leica"],
        summary: "巴纳克把电影用 35mm 胶片横向输送，形成 24×36mm 画幅。精密机身、小型镜头与快速卷片，使抓拍和新闻摄影成为可能。",
        shift: "摄影不再等待场景摆好；相机开始追上正在发生的世界。",
        tech: ["35mm 胶片", "焦平面快门", "可更换镜头"],
        image: "/timeline/leica-i.jpg",
        imageAlt: "Leica I 35mm 相机，黑色机身配可收缩的 Elmar 镜头",
        credit: "Science Museum Group · Leica I",
        creditUrl: "https://collection.sciencemuseumgroup.org.uk/objects/co8205029/leica-i-camera",
      },
      {
        year: "1948",
        title: "Polaroid Model 95：暗房被折进相机",
        eyebrow: "拍完一分钟就能看到",
        people: "埃德温·兰德",
        companies: ["Polaroid"],
        summary: "负片与正片通过滚轴压合，显影药剂在两层之间扩散。相机不只记录图像，也完成最关键的后期处理。",
        shift: "“拍摄—等待—观看”的时间差被压缩，照片第一次成为即时社交物件。",
        tech: ["扩散转印", "内置滚轴", "即时正片"],
        image: "/timeline/polaroid-model95.jpg",
        imageAlt: "展开状态的 Polaroid Land Camera Model 95，带折叠皮腔和金属支架",
        credit: "MIT Museum / Wikimedia Commons",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Polaroid_Land_Camera_Model_95_-_MIT_Museum_-_DSC03766.JPG",
      },
    ],
  },
  {
    id: "systems",
    number: "04",
    years: "1959—1969",
    title: "相机成为精密系统",
    thesis: "模块化镜头、测光与自动控制，把专业能力逐步写进机身。",
    color: "#c4a7ff",
    milestones: [
      {
        year: "1959",
        title: "Nikon F：一套能应对一切的单反系统",
        eyebrow: "从一台相机到一个专业生态",
        people: "日本光学工程团队",
        companies: ["Nippon Kogaku", "Nikon"],
        summary: "可更换取景器、马达卷片与庞大镜头群，让 35mm 单反覆盖新闻、体育、科学和工业摄影。模块化成为专业相机的核心竞争力。",
        shift: "设备不再定义单一用途；摄影师围绕一个卡口扩展整套工作流。",
        tech: ["单镜头反光", "F 卡口", "模块化附件"],
      },
      {
        year: "1963",
        title: "自动曝光：把测光结果直接交给快门",
        eyebrow: "从辅助判断到自动控制",
        people: "相机电子工程团队",
        companies: ["Topcon", "Pentax", "Canon"],
        summary: "TTL 测光让传感器通过拍摄镜头读取光线，电子系统开始自动联动光圈与快门。相机第一次参与“决定”如何曝光。",
        shift: "复杂操作被隐藏，拍摄者可以把注意力重新放回瞬间。",
        tech: ["TTL 测光", "自动曝光", "机电联动"],
      },
    ],
  },
  {
    id: "digital",
    number: "05",
    years: "1969—1999",
    title: "光变成数据",
    thesis: "传感器、处理器与存储器取代胶片，图像进入可计算的世界。",
    color: "#5ee6b5",
    milestones: [
      {
        year: "1969",
        title: "CCD：电子之眼的诞生",
        eyebrow: "把光子转移成可读取的电荷",
        people: "威拉德·博伊尔 · 乔治·史密斯",
        companies: ["Bell Labs"],
        summary: "CCD 最初被设想为半导体存储器，很快显示出成像能力。像素阵列逐级转移电荷，让光的强弱可以被精确读出。",
        shift: "感光材料从一次性的化学介质，变成可重复使用的电子芯片。",
        tech: ["像素阵列", "电荷耦合", "电子读出"],
        image: "/timeline/ccd.jpg",
        imageAlt: "贝尔实验室研究者博伊尔与史密斯展示早期 CCD 摄像系统和监视器",
        credit: "Computer History Museum · Bell Labs CCD",
        creditUrl: "https://www.computerhistory.org/revolution/memory-storage/8/263/1117",
      },
      {
        year: "1975",
        title: "第一台全数字相机原型",
        eyebrow: "0.01MP、3.6kg、23 秒写入一张照片",
        people: "史蒂文·萨松 Steven Sasson",
        companies: ["Kodak", "Fairchild"],
        summary: "萨松用 Fairchild CCD、电影镜头、数模转换器与磁带机拼出原型。它证明照片可以完全脱离胶片，被捕获、存储并在屏幕上重现。",
        shift: "相机的核心从精密化学工业，转向半导体与计算机工业。",
        tech: ["100×100 像素", "数字存储", "磁带记录"],
        image: "/timeline/first-digital.jpg",
        imageAlt: "史蒂文·萨松与柯达首台数码相机原型，机身外露电路和蓝色镜头筒",
        credit: "Great Big Photography World · Sasson prototype",
        creditUrl: "https://greatbigphotographyworld.com/history-of-photography/",
      },
      {
        year: "1991",
        title: "Kodak DCS 100：数码进入职业现场",
        eyebrow: "从实验室原型到可交付工具",
        people: "Jim McGarvey · 柯达工程团队",
        companies: ["Kodak", "Nikon"],
        summary: "柯达把 1.3MP CCD 装入 Nikon F3 机身，并连接独立存储单元。笨重昂贵，却让新闻机构首次绕过胶片冲洗直接获得数字文件。",
        shift: "“拍完立刻传稿”开始比画质与成本更有价值。",
        tech: ["1.3MP CCD", "硬盘存储", "数字工作流"],
      },
    ],
  },
  {
    id: "computational",
    number: "06",
    years: "2000—现在",
    title: "相机变成软件",
    thesis: "手机、CMOS 与多帧算法，让“拍一张”变成一次实时计算。",
    color: "#ffd75f",
    milestones: [
      {
        year: "2000",
        title: "J-SH04：相机、网络与屏幕合为一体",
        eyebrow: "照片第一次在同一设备上拍摄与发送",
        people: "夏普移动影像团队",
        companies: ["Sharp", "J-Phone"],
        summary: "约 11 万像素的内置相机并不追求专业画质，它真正改变的是链路：拍摄、查看、传输与社交发生在同一个口袋设备中。",
        shift: "相机从独立产品变成通信设备的一个功能，图像数量开始爆炸。",
        tech: ["CMOS 模组", "彩色屏幕", "移动传输"],
      },
      {
        year: "2008",
        title: "Lumix G1：无反结构缩短光路",
        eyebrow: "拿掉反光镜，让传感器始终看见世界",
        people: "松下影像工程团队",
        companies: ["Panasonic", "Olympus"],
        summary: "Micro Four Thirds 取消反光镜与光学取景通道，以实时传感器画面完成取景和对焦。机身更短、更轻，也为视频与高速连拍打开空间。",
        shift: "镜头仍然重要，但传感器读出与电子取景开始重写相机结构。",
        tech: ["无反光镜", "电子取景器", "短法兰距"],
      },
      {
        year: "2016",
        title: "HDR+：一次快门，实际拍下许多帧",
        eyebrow: "算法开始超过单次曝光的物理限制",
        people: "Marc Levoy · Google Research",
        companies: ["Google", "Qualcomm"],
        summary: "手机在按下快门前后缓存多帧短曝光，再对齐、降噪与融合。小型传感器用计算换取动态范围、夜景与细节。",
        shift: "摄影结果不再等同于某一个瞬间的曝光，而是多帧信息的推断。",
        tech: ["多帧融合", "计算 HDR", "语义处理"],
      },
      {
        year: "现在",
        title: "堆栈传感器 + AI：相机开始理解场景",
        eyebrow: "从记录光线，到预测你想要的照片",
        people: "全球光学、芯片与算法团队",
        companies: ["Sony", "Apple", "Google", "Canon"],
        summary: "堆栈式 CMOS 提高读出速度，多摄像头协同不同焦段，神经网络参与去噪、对焦、景深与色彩。现代相机已经是一台专用视觉计算机。",
        shift: "决定画面的不再只有镜头和传感器，还包括模型、数据与软件更新。",
        tech: ["堆栈 CMOS", "多摄融合", "端侧 AI"],
      },
    ],
  },
];

const layers = [
  { label: "成像", before: "小孔 / 单片镜头", now: "多镜组 / 潜望长焦" },
  { label: "感光", before: "银版 / 胶片", now: "堆栈式 CMOS" },
  { label: "控制", before: "手动估算", now: "预测对焦 / 自动曝光" },
  { label: "处理", before: "暗房化学", now: "多帧融合 / 神经网络" },
  { label: "传播", before: "印相 / 邮寄", now: "拍摄即分享" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="光影机械首页">
          <span className="brand-mark" aria-hidden="true"><i /></span>
          <span>光影机械</span>
        </a>
        <nav className="top-nav" aria-label="主要导航">
          <a href="#timeline">技术时间线</a>
          <a href="#stack">技术栈</a>
          <a href="#sources">图片来源</a>
        </nav>
        <span className="edition">ARCHIVE 001 · 2026</span>
      </header>

      <section className="hero" id="top">
        <div className="hero-kicker"><span /> 一部从设备内部讲起的摄影史</div>
        <h1>从一间暗室，<br />到一枚<span>会思考</span>的芯片。</h1>
        <div className="hero-bottom">
          <p>摄影技术并不是一连串孤立的发明。它是一条持续压缩的链路：更短的曝光、更小的设备、更快的观看，以及更少的操作。</p>
          <a className="start-link" href="#timeline">开始穿越 1000 年 <b>↓</b></a>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="lens-ring ring-1" />
          <div className="lens-ring ring-2" />
          <div className="lens-ring ring-3" />
          <div className="lens-core"><span>f / 0.95</span></div>
          <div className="ray ray-a" />
          <div className="ray ray-b" />
          <p>LIGHT → SIGNAL → MEMORY</p>
        </div>
      </section>

      <section className="stack" id="stack">
        <div className="section-label">THE CAMERA STACK <span>技术并没有消失，只是被折叠了</span></div>
        <div className="stack-intro">
          <h2>今天按下一次快门，<br />同时启动了五段历史。</h2>
          <p>现代手机看似简单，却把暗箱、胶片、测光表、暗房和冲印店全部压缩在一块玻璃背后。下面的时间线沿着这五层技术向前追溯。</p>
        </div>
        <div className="layer-grid">
          {layers.map((layer, index) => (
            <div className="layer" key={layer.label}>
              <span className="layer-index">0{index + 1}</span>
              <h3>{layer.label}</h3>
              <div><small>曾经</small><b>{layer.before}</b></div>
              <div><small>现在</small><b>{layer.now}</b></div>
            </div>
          ))}
        </div>
      </section>

      <div className="era-nav" aria-label="时代快速导航">
        <span>跳转至</span>
        {eras.map((era) => <a href={`#${era.id}`} key={era.id}><i style={{ background: era.color }} />{era.years.split("—")[0]}</a>)}
      </div>

      <section className="timeline" id="timeline">
        {eras.map((era) => (
          <section className="era" id={era.id} key={era.id} style={{ "--era-color": era.color } as React.CSSProperties}>
            <header className="era-heading">
              <span className="era-number">{era.number}</span>
              <div><span className="era-years">{era.years}</span><h2>{era.title}</h2></div>
              <p>{era.thesis}</p>
            </header>
            <div className="milestones">
              {era.milestones.map((item) => (
                <article className={`milestone ${item.image ? "has-image" : ""}`} key={`${era.id}-${item.year}`}>
                  <div className="year-column"><span>{item.year}</span><i /></div>
                  <div className="milestone-copy">
                    <span className="eyebrow">{item.eyebrow}</span>
                    <h3>{item.title}</h3>
                    <p className="people">{item.people}</p>
                    <p className="summary">{item.summary}</p>
                    <div className="shift"><small>它改变了什么</small><p>{item.shift}</p></div>
                    <div className="tags">
                      {item.tech.map((tag) => <span key={tag}>{tag}</span>)}
                      {item.companies.map((company) => <span className="company" key={company}>{company}</span>)}
                    </div>
                  </div>
                  {item.image ? (
                    <figure>
                      <div className="image-frame"><img src={item.image} alt={item.imageAlt || ""} /></div>
                      <figcaption><span>图像档案</span>{item.creditUrl ? <a href={item.creditUrl} target="_blank" rel="noreferrer">{item.credit} ↗</a> : item.credit}</figcaption>
                    </figure>
                  ) : (
                    <div className="tech-plate" aria-hidden="true">
                      <span>{item.year}</span>
                      <div className="plate-grid" />
                      <b>{item.tech[0]}</b>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>
        ))}
      </section>

      <section className="today">
        <span className="section-label">THE PATTERN</span>
        <h2>摄影设备的终点，<br />不是更大的相机，而是<span>更短的距离。</span></h2>
        <div className="today-grid">
          <p>从光进入暗箱，到照片被看见，曾经要跨越几小时、几天、甚至一个冲印网络。今天这条路径只需要几百毫秒。</p>
          <ol>
            <li><b>1826</b><span>曝光与观看相隔数小时</span></li>
            <li><b>1948</b><span>缩短到约一分钟</span></li>
            <li><b>2000</b><span>拍摄与发送合为一体</span></li>
            <li><b>现在</b><span>相机在快门前就开始计算</span></li>
          </ol>
        </div>
      </section>

      <section className="sources" id="sources">
        <div>
          <span className="section-label">EDITORIAL NOTE</span>
          <h2>关于这条时间线</h2>
        </div>
        <p>这不是一份穷尽所有型号的器材年表，而是一张“关键限制如何被解决”的路线图。节点优先选择改变了设备结构、生产方式或使用习惯的技术。历史设备图片来自博物馆、机构与开放档案，出处已标注在每张图片下方。</p>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark" aria-hidden="true"><i /></span><span>光影机械</span></a>
        <p>PHOTOGRAPHIC TECHNOLOGY, EXPOSED.</p>
        <a href="#top">回到顶部 ↑</a>
      </footer>
    </main>
  );
}

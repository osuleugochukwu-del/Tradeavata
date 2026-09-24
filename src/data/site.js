export const site = {
  name: 'Trade Avata',
  tagline: 'Trade Simple.',
  description: 'Trade Avata builds practical products, technology, tools, applications, resources and education that make trading simpler.',
  philosophy: "Trading doesn't have to be complicated when you have the right tools."
};

export const courses = [
  { slug:'trading-for-complete-beginners', title:'Trading for Complete Beginners', level:'Beginner', modules:12, lessons:60, duration:'4h 20m', access:'Free with account', progression:'Module sequential', description:'Start from zero. Learn market basics, trading vocabulary, charts, orders, risk, psychology, cTrader and how to build a first trading plan.', featured:true },
  { slug:'technical-analysis-foundations', title:'Technical Analysis Foundations', level:'Beginner → Intermediate', modules:8, lessons:32, duration:'3h 10m', access:'Members', progression:'Sequential', description:'Build a structured framework for reading price, trends, levels, momentum and trade scenarios.' },
  { slug:'risk-management', title:'Risk Management', level:'All levels', modules:6, lessons:24, duration:'2h 05m', access:'Members', progression:'Sequential', description:'Learn position sizing, risk limits, drawdown, R-multiples and the mechanics of protecting trading capital.' }
];

export const products = [
  { slug:'goldhunter', name:'GoldHunter', type:'Indicator', platforms:['cTrader'], devices:['Windows','macOS'], category:'Indicators', price:0, priceLabel:'Coming soon', availability:'Coming Soon', featured:true, version:'0.1', description:'A focused market-structure and gold trading tool built for disciplined analysis.', short:'cTrader indicator for structured gold-market analysis.', requirements:'cTrader desktop or supported cTrader environment.', included:['Indicator files','Documentation','Installation guide'], demo:'#', documentation:'#' },
  { slug:'trade-avata-trading-journal', name:'Trade Avata Trading Journal', type:'Application', platforms:['Web','Windows','macOS','Android','iOS'], devices:['Web','Windows','macOS','Android','iOS'], category:'Trading Applications', price:0, priceLabel:'Planned', availability:'Planned', version:'0.1', description:'A future cross-platform journal designed to make trade review, screenshots, notes and statistics simple.', short:'A cross-platform workspace for recording and reviewing trades.', requirements:'To be announced.', included:['Trade journal','Review workflow','Performance summaries'], demo:'#', documentation:'#' },
  { slug:'trade-avata-risk-calculator', name:'Trade Avata Risk Calculator', type:'Tool', platforms:['Web'], devices:['Web','Mobile'], category:'Trading Tools', price:0, priceLabel:'Free', availability:'Available', featured:true, version:'1.0', description:'Plan position size and risk before entering a trade.', short:'A lightweight risk and position-sizing utility.', requirements:'Modern web browser.', included:['Risk calculator','Position sizing workflow','Risk/reward planning'], demo:'#', documentation:'#' },
  { slug:'trading-for-complete-beginners', name:'Trading for Complete Beginners', type:'Course', platforms:['Web'], devices:['Web','Mobile'], category:'Courses', price:0, priceLabel:'Free with account', availability:'Available', version:'1.0', description:'A structured beginner course covering the foundations of trading.', short:'Start trading education from zero with a clear learning path.', requirements:'Trade Avata account.', included:['12 modules','60 lessons','Progress tracking'], demo:'#', documentation:'#', courseSlug:'trading-for-complete-beginners' },
  { slug:'trade-avata-toolkit', name:'Trade Avata Toolkit', type:'Digital resource', platforms:['Web'], devices:['Web','Mobile'], category:'Templates & Resources', price:0, priceLabel:'Planned', availability:'Planned', version:'0.1', description:'A growing collection of practical checklists, templates and workflow resources.', short:'Practical resources for a cleaner trading workflow.', requirements:'To be announced.', included:['Trading checklist','Journal templates','Planning resources'], demo:'#', documentation:'#' },
  { slug:'mt5-indicator-pack', name:'MT5 Indicator Pack', type:'Indicator', platforms:['MT5'], devices:['Windows'], category:'Indicators', price:0, priceLabel:'Coming soon', availability:'Coming Soon', version:'0.1', description:'A future collection of Trade Avata indicators for MetaTrader 5.', short:'Trade Avata indicator collection for MT5.', requirements:'MetaTrader 5.', included:['Indicator package','Documentation'], demo:'#', documentation:'#' },
  { slug:'tradingview-workspace-tools', name:'TradingView Workspace Tools', type:'Tool', platforms:['TradingView'], devices:['Web','Mobile'], category:'Trading Tools', price:0, priceLabel:'Coming soon', availability:'Coming Soon', version:'0.1', description:'Future TradingView tools designed around a simpler analysis workflow.', short:'TradingView tools for a cleaner analysis process.', requirements:'TradingView account where required.', included:['Tools','Setup guide'], demo:'#', documentation:'#' },
  { slug:'desktop-market-workspace', name:'Trade Avata Market Workspace', type:'Application', platforms:['Windows','macOS','Web'], devices:['Windows','macOS','Web'], category:'Trading Applications', price:0, priceLabel:'Planned', availability:'Planned', version:'0.1', description:'A future multi-platform market workspace bringing charts, replay, tools and trading workflow into one flexible environment.', short:'A future trading workspace built around simplicity.', requirements:'To be announced.', included:['Market workspace','Charting foundation','Workflow tools'], demo:'#', documentation:'#' }
];

export const beginnerModules = [
  ['01','Trading Foundations',['What is trading?','What can people trade?','Why price moves','Trading vs investing']],
  ['02','Trading Vocabulary',['Bid & Ask','Spread','Pip','Lot','Leverage','Margin']],
  ['03','Reading the Market',['Candlesticks','Timeframes','Trend vs range','Support & resistance']],
  ['04','Orders & Execution',['Market vs pending orders','Limit vs stop entry','Stop loss & take profit']],
  ['05','Analysis',['Technical analysis','Fundamental analysis','Combining both']],
  ['06','Risk Management',['Protecting the account','Risk percentage','Risk-to-reward','Position sizing','Drawdown']],
  ['07','Building a Strategy',['Strategy components','Confluence','Backtesting']],
  ['08','Trading Psychology',['Beginner traps','Discipline','Process over emotion']],
  ['09','Trading Workflow',['Beginner workflow','Demo trading','Pre-trade routine']],
  ['10','Trading Journal',['What to record','Measure the process']],
  ['11','cTrader',['Platform areas','Before clicking Buy/Sell']],
  ['12','Safety & First Plan',['Scams & red flags','Trading risk','Your first trading plan','Go-live checklist']]
].map(([number,title,lessons]) => ({number,title,lessons}));

export const indicators = products.filter(p => p.type === 'Indicator');

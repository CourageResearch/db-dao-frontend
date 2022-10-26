import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Link from 'next/link';

const news = [
    // {
    //     title: '',
    //     url: '',
    //     content: '',
    // },
    {
        title: 'Introducing the CoinList Seed Fall 2022 Batch',
        url: 'https://blog.coinlist.co/introducing-the-coinlist-seed-fall-2022-batch/',
        content: 'Despite the crypto winter among us, bullish investors are still deploying capital into crypto startups, and curious crypto users are still experimenting with new products.',
    },
    {
        title: 'CurateDAO Launches Decentralized, Pinterest-Like Data Curations Powered by Incentives on Avalanche',
        url: 'https://medium.com/avalancheavax/curatedao-launches-decentralized-pinterest-like-data-curations-powered-by-incentives-on-avalanche-8756cef261c9',
        content: 'Curators are rewarded tokens for assembling diverse lists benefitting users.',
    },
    {
        title: 'Pinterest for Web3: Project launches curation ecosystem on Avalanche',
        url: 'https://cointelegraph.com/news/pinterest-for-web3-project-launches-curation-ecosystem-on-avalanche',
        content: 'CurateDAO launched an Avalanche-based “curate-to-earn” platform where participants can earn by contributing to databases.',
    },
    {
        title: 'Pinterest, but you get paid to use it.',
        url: 'https://www.web3daily.co/articles/pinterest-but-you-get-paid-to-use-it',
        content: `Something that'll have your minds racing with ideas. ...and we think we may have just found it.`,
    },
    {
        title: 'CurateDAO: Curate to Earn',
        nameAuthor: 'Ali Airaj Ahsan',
        url: 'https://daoyouknow.substack.com/p/curatedao-curate-to-earn',
        content: 'CurateDAO is a community curated blockchain database. Imagine trying to organize the world’s information through a series of Pinterest boards and being compensated if someone finds value in the board. This is what CurateDAO calls curate-to-earn.',
    },
    {
        title: 'CurateDAO: Curate to Earn',
        url: 'https://daoyouknow.substack.com/p/63c5e1b0-ddad-49ef-9ebe-b6cbddbd0ed0',
        content: 'CurateDAO is a community curated blockchain database. Imagine trying to organize the world’s information through a series of Pinterest boards and being compensated if someone finds value in the board. This is what CurateDAO calls curate-to-earn. ',
    },    
    {
        title: 'CurateDAO',
        url: 'https://medium.com/@ae4088609/kuratedao-b26dfc63ef68',
        content: 'CurateDAO, founded in 2022, sees today’s one-size-fits-all approach to curating online content as a bottleneck, holding back the growth of the Internet by a factor of 100. ',
    },    
    {
        title: 'CurateDAO — a new era of information systematization',
        url: 'https://medium.com/@redkooleg2002/kuratedao-a-new-era-of-information-systematization-5c52f816e6d8',
        content: 'Information is the most important resource of the 21st century. Our morals, habits and even worldview are formed exclusively by the information we receive from completely different sources.',
    },
    {
        title: 'A New Era Of Content Earn',
        url: 'https://oktavinc.medium.com/kuratedao-33ccd1413750',
        content: 'це база даних, побудована на блокчейні. CurateDAO прагне використовувати можливості web3 та спільнот для децентралізації процесу курації контенту. ',
    },
    {
        title: 'CurateDAO, the First Blockchain-based Database Community',
        url: 'https://medium.com/@ae4088609/kuratedao-b26dfc63ef68',
        content: 'CurateDAO is the first blockchain-based, community curated database for Web3 applications.',
    },            
    {
        title: 'CurateDAO — curate 2 earn',
        url: 'https://medium.com/@shamil.suleimanov73/kuratedao-curate-2-earn-da27a44fea8e',
        content: 'Это сообщества, которые экономически заинтересованы в организации данных по определенной теме. Примерами тем являются рабочие места в определенном секторе, музыка определенного жанра, NFT для галереи, научные статьи по криптографии, обзоры продуктов аппаратных кошельков, рецепты, рассказы на определенном языке, кураторский набор веб-приложений и многие другие. более.',
    },
    {
        title: 'Глоссарий',
        url: 'https://medium.com/@koloristova/%D0%B3%D0%BB%D0%BE%D1%81%D1%81%D0%B0%D1%80%D0%B8%D0%B9-%D0%B0%D0%BA%D1%82%D0%B8%D0%B2%D1%8B-%D0%BF%D0%BE%D0%B4-%D1%83%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%D0%BC-aum-%D0%BA%D0%BE%D0%B3%D0%B4%D0%B0-%D1%81%D1%82%D1%80%D0%BE%D0%BA%D0%B8-%D0%BE%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D1%8F%D1%8E%D1%82%D1%81%D1%8F-%D0%BA%D0%B0%D0%BA-%D0%B2%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5-%D0%B8%D0%BB%D0%B8-%D0%B8%D1%81%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5-%D0%B8%D0%B7-5e1c36d833be',
        content: 'Когда строки определяются как включенные или исключенные из базы данных, токены фиксируются в контракте и засчитываются в AUM контракта. Контрактам с большим AUM отдается предпочтение в критериях упорядочивания на главной странице.',
    },
    {
        title: 'CurateDAO – инновационная база данных на блокчейне',
        url: 'https://steemit.com/kuratedao/@rustam-02/kuratedao-innovacionnaya-baza-dannykh-na-blokcheine',
        content: 'Курирование контента – это поиск, обработка, систематизация и распространение контента, в основе которого лежат чужие материалы. Другими словами, курировать – значит найти релевантный контент и поделиться им с аудиторией.',
    },

    {
        title: 'CurateDAO — курируй и зарабатывай',
        url: 'https://crypto-positive.medium.com/kuratedao-curate-to-earn-52c4e9a990db',
        content: 'CurateDAO — первая база данных приложений Web3, курируемая сообществом. Конечная цель проекта — создание и использование криптоэкономических игр для курирования информации по всему миру.',
    },
    {
        title: 'CurateDAO современнная база данных?',
        url: 'https://kub198828.medium.com/kuratedao-%D1%81%D0%BE%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D0%BD%D0%B0%D1%8F-%D0%B1%D0%B0%D0%B7%D0%B0-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85-1baf3c113f67',
        content: 'Можно сказать, что CurateDAO это база данных на блокчейне.',
    },
    {
        title: 'основным-преимуществом-curatedao-является-возможность-монетизировать-контент-для-спонсоров',
        url: 'https://medium.com/@invest.info.new/%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D1%8B%D0%BC-%D0%BF%D1%80%D0%B5%D0%B8%D0%BC%D1%83%D1%89%D0%B5%D1%81%D1%82%D0%B2%D0%BE%D0%BC-kuratedao-%D1%8F%D0%B2%D0%BB%D1%8F%D0%B5%D1%82%D1%81%D1%8F-%D0%B2%D0%BE%D0%B7%D0%BC%D0%BE%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D1%8C-%D0%BC%D0%BE%D0%BD%D0%B5%D1%82%D0%B8%D0%B7%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C-%D0%BA%D0%BE%D0%BD%D1%82%D0%B5%D0%BD%D1%82-%D0%B4%D0%BB%D1%8F-%D1%81%D0%BF%D0%BE%D0%BD%D1%81%D0%BE%D1%80%D0%BE%D0%B2-%D0%B8-fac343a4bc6',
        content: 'У участников сообщества есть роли, которые они выполняют для достижения определенных результатов: - Наставники. Создает базу данных, на основе которой впоследствии разрабатывается приложение. Именно они определяют устав и принимают решение о включении контента в базу данных.',
    },
    {
        title: 'CurateDAO: обзор и новости',
        url: 'https://vincodc.medium.com/kuratedao-%D0%BE%D0%B1%D0%B7%D0%BE%D1%80-%D0%B8-%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8-f8b1f4f007',
        content: 'CurateDAO — весьма интересный проект на базе блокчейна, ориентированный на ценителей качественного цифрового контента. Он представляет собой одновременно криптовалютную игру и базу данных, которую ведут пользователи — Кураторы.',
    },
    {
        title: 'CurateDAO',
        url: 'https://medium.com/@loved_platinum_panda_556/kuratedao-58164896882f',
        content: 'While searching for new blockchain-based databases, I found the recent CurateDAO community and was pleasantly surprised by its work. The project is designed for Web3 applications, with the goal of applying crypto-economic games to curate the information world.',
    },
    {
        title: 'CurateDAO Acquires $6.85M',
        url: 'https://steemit.com/c2e/@saysaysayhello/kuratedao-acquires-usd6-85m',
        content: `CurateDAO recently announced a new $6.85 million investment round led by investment firm Polychain Capital. The project aims to use "cryptoeconomic games to curate the world's information," according to the KurateDAO white paper.`,
    },    
    {
        title: 'КОРОТКО О ГЛАВНОМ',
        url: 'https://www.linkedin.com/pulse/kuratedao-%D0%BA%D0%BE%D1%80%D0%BE%D1%82%D0%BA%D0%BE-%D0%BE-%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%BE%D0%BC-inna-pavlova/?published=t',
        content: 'Всем привет, сегодня мне хотелось бы познакомить вас с интересным проектом под названием CurateDAO, который представляет собой основанную на блокчейне базу данных для приложений Web3, курируемую сообществом.',
    },
    {
        title: 'About CurateDAO',
        url: 'https://innapavlova439.medium.com/kuratedao-briefly-about-the-main-ab278e1cf2fe',
        content: 'Hello everyone, today I would like to introduce you to an interesting project called CurateDAO, which is a blockchain-based, community-curated database for Web3 applications.',
    },    
    {
        title: 'Web3 amplia proteção ao ambiente de produção de conteúdo',
        url: 'https://www.bloomberglinea.com.br/2022/04/11/web3-amplia-protecao-ao-ambiente-de-producao-de-conteudo/',
        content: 'A Web3, a internet que promete mais privacidade e segurança aos usuários por meio da descentralização, costuma ser associada apenas à ideia de que eles serão donos de seus dados novamente, reduzindo o controle de grandes empresas de tecnologia, as big techs. As vantagens, no entanto, vão além. A produção de conteúdo está entre as mais beneficiadas.',
    },
    {
        title: 'Что такое CurateDAO?',
        url: 'https://medium.com/@koloristova/%D1%87%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5-kuratedao-71e06b176d71',
        content: 'CurateDAO – это первая курируемая сообществом база данных на основе блокчейна для приложений Web3.',
    },
    {
        title: "CurateDAO: It's Time To Redefine Creators",
        url: 'https://pandaily.com/kuratedao-its-time-to-redefine-creators/',
        content: 'It has been a consensus that the creator economy will be reformed and revolutionized during the era of Web3.',
    },    
    {
        title: 'Расскажите о протоколе CurateDAO?',
        url: 'https://kub198828.medium.com/kuratedao-%D1%87%D0%B0%D1%81%D1%82%D0%BE-%D0%B7%D0%B0%D0%B4%D0%B0%D0%B2%D0%B0%D0%B5%D0%BC%D1%8B%D0%B5-%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D1%8B-%D0%B8-%D0%BD%D0%B0%D0%B3%D0%BB%D1%8F%D0%B4%D0%BD%D1%8B%D0%B5-%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80%D1%8B-77c7f46d46ad',
        content: 'Кураторская модель CurateDAO аналогична трем ветвям американского правительства. В правительстве США есть исполнительная',
    },
    {
        title: 'Как работает протокол',
        url: 'https://medium.com/@ismailrahmatov1995/%D0%BF%D1%80%D0%BE%D1%82%D0%BE%D0%BA%D0%BE%D0%BB-ddadc83ae886',
        content: 'CurateDAO оптимизирован для предоставления зрителям наилучшей информации. Мы предлагаем новый способ курирования баз данных, ориентированный на пользователя и направленный снизу вверх. ',
    },
    {
        title: 'Как получить роли',
        url: 'https://medium.com/@ismailrahmatov1995/%D1%80%D0%BE%D0%BB%D0%B8-aed20297e32b',
        content: 'В CurateDAO существует три различные роли. Каждая из них оплачивается или оплачивается в зависимости от количества ценности, которую они предоставляют.',
    },    
    {
        title: 'CurateDAO.Часто задаваемые вопросы про кураторские сообщества.',
        url: 'https://kub198828.medium.com/kuratedao-%D1%87%D0%B0%D1%81%D1%82%D0%BE-%D0%B7%D0%B0%D0%B4%D0%B0%D0%B2%D0%B0%D0%B5%D0%BC%D1%8B%D0%B5-%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D1%8B-%D0%BF%D1%80%D0%BE-%D0%BA%D1%83%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%81%D0%BA%D0%B8%D0%B5-%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D1%81%D1%82%D0%B2%D0%B0-58ecce064521',
        content: 'Как мне попасть в whitelist? Присоединяйтесь к Discord и следите за инструкциями по whitelist в Twitter . Кто поддержал проект?',
    },
    {
        title: 'Кураторство криптовалют',
        url: 'https://medium.com/@ismailrahmatov1995/%D0%BA%D1%83%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%81%D1%82%D0%B2%D0%BE-%D0%BA%D1%80%D0%B8%D0%BF%D1%82%D0%BE%D0%B2%D0%B0%D0%BB%D1%8E%D1%82-%D0%B4%D0%BE%D0%B2%D0%B5%D1%80%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5-%D0%BF%D1%83%D0%BB%D1%8B-%D0%B4%D0%BB%D1%8F-%D1%81%D1%82%D0%B5%D0%B9%D0%BA%D0%B8%D0%BD%D0%B3%D0%B0-defi-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D0%B8-%D0%BD%D0%B5-%D0%B8%D0%BC%D0%B5%D1%8E%D1%82-%D1%85%D0%BE%D1%80%D0%BE%D1%88%D0%B5%D0%B3%D0%BE-e2b10ad877d2',
        content: 'Доверенные пулы для стейкинга DeFi: Пользователи не имеют хорошего представления о том, что такое надежные пулы для стейкинга или доходного фермерства.',
    },
    {
        title: 'Пример курирования на web3',
        url: 'https://medium.com/@ismailrahmatov1995/%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80%D1%8B-%D1%81%D1%83%D1%89%D0%B5%D1%81%D1%82%D0%B2%D1%83%D0%B5%D1%82-%D0%BC%D0%BD%D0%BE%D0%B6%D0%B5%D1%81%D1%82%D0%B2%D0%BE-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B9-%D0%BA%D0%BE%D1%82%D0%BE%D1%80%D1%8B%D0%B5-%D0%BC%D0%BE%D0%B3%D1%83%D1%82-%D0%B1%D1%8B%D1%82%D1%8C-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D1%8B-%D1%81-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5%D0%BC-kuratedao-ba9cef6d74eb',
        content: 'Примеры Существует множество приложений, которые могут быть созданы с использованием CurateDAO. Каждое приложение опирается на создание курируемой базы данных.',
    },
    {
        title: 'Что такое CurateDAO',
        url: 'https://medium.com/@ismailrahmatov1995/%D1%87%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5-kuratedao-d1f7e593fdb3',
        content: 'CurateDAO — это первая база данных на основе блокчейна, курируемая сообществом, для приложений Web3. В чем заключается миссия CurateDAO?'
    },
    {
        title: 'What is CurateDAO?',
        content: 'CurateDAO is the first community curated blockchain-based database for Web3 applications. The basis of everything is the curator and curation. Let’s look at this in more detail. ',
        url: 'https://medium.com/@dimabeloc1/what-is-kuratedao-fd64c47de477'
    },
    {
        title: 'CurateDAO：确保每个人都有成名的15分钟',
        content: '来自印度的贫民窟少年根据自己的生活经历恰巧知道了 100 美元上印的是美国的哪一位总统，又恰巧知道了印度的摩罗神右手握着的武器，他知道剑桥的情报部门在哪个城市工作，就这样他赢得了答题节目中的百万奖金，这是电影《贫民窟的百万富翁》的故事。',
        url: 'https://www.theblockbeats.info/news/29970'
    },
    {
        title: 'CurateDAO — curation as a way to earn',
        content: 'CurateDAO is an information base constructed on the blockchain. As a database layer, CurateDAO sees itself as supporting a new generation, the truth and usefulness of which is determined in many ways.',
        url: 'https://medium.com/@kirifornication/kuratedao-curation-as-a-way-to-earn-119d1f039efe'
    },
    {
        title: 'CurateDAO的AMBASSADOR ROLE 身份获取教程',
        content: '在测试网正式启动之前，我们将正式在Discord开设大使馆！完成相应的任务可以获得对应任务的大使角色。通过执行所有步骤并填写此消息底部的表格，您可以获得 4 个角色中的一个。',
        url: 'https://mirror.xyz/0xE2027B05D620c0109e2d8e751A10A2aAda3e490A/-bVN9_G907HASDXVwrrHdANw9Rfr2tlyxza6ae-mVtU'
    },
    {
        title: 'Новые роли, будущий тестнет и амбассадорская программа в CurateDAO',
        content: 'CurateDAO продолжает раздавать различные роли. Пойдём по порядку',
        url: 'https://medium.com/@zxcrypto/%D0%BD%D0%BE%D0%B2%D1%8B%D0%B5-%D1%80%D0%BE%D0%BB%D0%B8-%D0%B1%D1%83%D0%B4%D1%83%D1%89%D0%B8%D0%B9-%D1%82%D0%B5%D1%81%D1%82%D0%BD%D0%B5%D1%82-%D0%B8-%D0%B0%D0%BC%D0%B1%D0%B0%D1%81%D1%81%D0%B0%D0%B4%D0%BE%D1%80%D1%81%D0%BA%D0%B0%D1%8F-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0-%D0%B2-kuratedao-43af8d3339be'
    },
    {
        title: 'Вступ. Спільнота дегенів з високими стандартами',
        content: 'CurateDAO — це перша база даних на основі блокчейну, яка курується спільнотою для додатків Web3.',
        url: 'https://kuratedao-ua.gitbook.io/kuratedao/'
    },
    {
        title: 'What value do Web3 curators provide? What are the projects related to this?',
        url: 'https://coinyuppie.com/what-value-do-web3-curators-provide-what-are-the-projects-related-to-this/',
        content: 'In the context of Web3, the meaning of Curator is inclined towards digital curation. Recently, there have been some discussions about Web3 Curator on Chinese Twitter. This article is a guide to talk about the curator project CurateDAO’s practice, and put forward some superficial thoughts.',
    },    
    {
        title: 'CurateDAO. Расказываю о чем и зачем.',
        content: 'Наверное каждый из нас периодически произносит фразу “а вот раньше…”. И обычно это сравнение в пользу того что было раньше.',
        url: 'https://medium.com/@julia457/kuratedao-%D1%80%D0%B0%D1%81%D0%BA%D0%B0%D0%B7%D1%8B%D0%B2%D0%B0%D1%8E-%D0%BE-%D1%87%D0%B5%D0%BC-%D0%B8-%D0%B7%D0%B0%D1%87%D0%B5%D0%BC-57c3ad763e5b'
    },
    {
        title: 'CurateDAO的Testnet Wallet Holder身份获取教程',
        content: 'CurateDAO的Testnet Wallet Holder 有关如何为测试网设置钱包的分步说明',
        url: 'https://mirror.xyz/0xE2027B05D620c0109e2d8e751A10A2aAda3e490A/S6gEmIl0fQiMl7jd_PRnZfsLVeS6RurzjzJBIzaxvnU'
    },
    {
        title: 'CurateDAO bảo đảm 6,85 triệu đô la trong khoản tài trợ hạt giống do Polychain Capital dẫn dắt để phát triển danh mục “Quản lý để kiếm tiền”',
        content: 'Nhiệm vụ của CurateDAO là sử dụng các động lực kinh tế để quản lý thông tin của thế giới.',
        url: 'https://medium.com/@Taybew/kuratedao-b%E1%BA%A3o-%C4%91%E1%BA%A3m-6-85-tri%E1%BB%87u-%C4%91%C3%B4-la-trong-kho%E1%BA%A3n-t%C3%A0i-tr%E1%BB%A3-h%E1%BA%A1t-gi%E1%BB%91ng-do-polychain-capital-d%E1%BA%ABn-d%E1%BA%AFt-%C4%91%E1%BB%83-e41ba6487b5e'
    },
    {
        title: 'CurateDAO — EL5: Thiết kế giao thức CurateDAO',
        content: 'Đối với bất kỳ ai đang đọc nó, nếu nó cảm thấy nhàm chán, chỉ cần cuộn qua các meme. Họ sẽ cung cấp cho bạn một bản tóm tắt về bài đăng trên blog.',
        url: 'https://medium.com/@Taybew/100x-internet-b%E1%BA%B1ng-c%C3%A1ch-tr%E1%BB%9F-n%C3%AAn-tinh-t%E1%BA%BF-h%C6%A1n-e166425c13ca'
    },
    {
        title: 'CurateDAO — EL5: Thiết kế giao thức CurateDAO',
        content: 'Mọi việc kiểm duyệt đều bắt đầu với cơ sở dữ liệu CurateDAO. Có 3 người chơi',
        url: 'https://medium.com/@Taybew/el5-thi%E1%BA%BFt-k%E1%BA%BF-giao-th%E1%BB%A9c-kuratedao-bbf62d309d30'
    },
    {
        title: 'CurateDAO қызметкері Майкл Фишер Табыс табу үшін қауымдастықтарды және т.б. түсіндіреді',
        content: 'Бұл белгілі бір тақырып төңірегінде деректерді ұйымдастыруға экономикалық ынталандырылған қауымдастықтар.',
        url: 'https://docs.google.com/document/d/1OYbz50_uYI7XrNvXKG4cuYaAMkLtZy5sqSzPqDpzq6Q/edit'
    },
    {
        title: '通过20个问题，CurateDAO的创始人Michael Fischer带你了解什么是Curate-To-Earn社区',
        content: 'Curate-To-Earn 社区是指那些收到经济激励能围绕特定主题组织数据的社区。主题的示例包括特定领域的工作、特定类型的音乐、画廊的NFT、加密领域学术论文、硬件钱包的产品评论、食谱、特定语言的短篇小说、一组精选的Web3应用程序以及很多其他方面。有趣的是，这些社区不需要相互了解。每个人都会被我们开发的代币学模型激励而收集数据。',
        url: 'https://mirror.xyz/shandonguniversity.eth/PphkxtSKUXQ3-Xub6j6FgnOijqPGZpH1QwRLJIR5pnQ'
    },
    {
        title: 'Обзорная статья про базу данных CurateDAO',
        content: 'В поисках новых баз данных, основанных на блокчейне, нашел недавно появившееся сообщество CurateDAO и был приятно удивлен его работой.',
        url: 'https://medium.com/@Misharemmah/%D0%BE%D0%B1%D0%B7%D0%BE%D1%80%D0%BD%D0%B0%D1%8F-%D1%81%D1%82%D0%B0%D1%82%D1%8C%D1%8F-%D0%BF%D1%80%D0%BE-%D0%B1%D0%B0%D0%B7%D1%83-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85-kuratedao-691dff7a50e6'
    },
    {
        title: 'Giới thiệu.  Một cộng đồng các degens với tiêu chuẩn cao',
        content: 'CurateDAO là cơ sở dữ liệu dựa trên blockchain được cộng đồng quản lý đầu tiên cho các ứng dụng Web3.',
        url: 'https://maythuyle.gitbook.io/kuratedao.vietnamese/'
    },
    {
        title: 'Введение Сообщество дегенов с высокими стандартами',
        content: 'Что такое CurateDAO? CurateDAO - это первая база данных на основе блокчейна, курируемая сообществом, для приложений Web3.',
        url: 'https://kuratedao-ru.gitbook.io/kuratedao/'
    },
    {
        title: 'Как CurateDAO сделает х100 в децентрализации сети?',
        content: 'Универсальный подход к курированию контента оставляет позади много отличного контента. Контент в интернете когда-то курировался «профессионалами» — людьми, которые следили за тем, чтобы контент, опубликованный на их платформе, соответствовал целям и стандартам организации.',
        url: 'https://medium.com/@kostyainvest/%D0%BA%D0%B0%D0%BA-kuratedao-%D1%81%D0%B4%D0%B5%D0%BB%D0%B0%D0%B5%D1%82-%D1%85100-%D0%B2-%D0%B4%D0%B5%D1%86%D0%B5%D0%BD%D1%82%D1%80%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B8-%D1%81%D0%B5%D1%82%D0%B8-df814d0d05b4'
    },
    {
        title: 'CurateDAO — Web3内容数据库一个介绍',
        content: 'Web3.0的概念最早出现在2014年，由以太坊联合创始人及波卡创建者Gavin Wood首次提及，笼统地说是指基于区块链技术搭建的「去中心化生态系统网络」，此系统会包含一系列开源协议，能够为应用程序的开发者提供构建模块，而基于区块链技术构建的Web3.0平台和应用程序不由传统的中心化企业所有，网络所赋予的权利和资产归开发者和用户所有。',
        url: 'https://medium.com/@melody8848/kuratedao-web3%E5%86%85%E5%AE%B9%E6%95%B0%E6%8D%AE%E5%BA%93-5df1efba9bef'
    },
    {
        title: '浅析Kurate Dao：真实与创造在新世界中重新连结',
        content: '实际上，CurateDAO 很大程度上在承担一个基础层与应用层的“平台型”角色，而非单纯的是“某个项目”，而如果此类平台型能够顺势成长，那么很多刻意叙事的伪需求将受到严重打击，而人们真正在乎和尚未发掘的需要将被一一呈现。同时KurateDAO所设计的链上数据库、策展人等功能模块和角色在Kurate DAO 状态机以及链上日志和用户的监督下，有望塑造高效的价值与创造力流动。',
        url: 'https://medium.com/@zxcrypto/%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B0%D0%B5%D0%BC-%D1%80%D0%BE%D0%BB%D0%B8-%D0%B2-kuratedao-2b64380b40f3'
    },
    {
        title: 'Получаем роли в CurateDAO: Сайт: Твиттер, Дискорд, Инстаграмм, Вайтпепер на английском языке, Вайтпепер на русском языке',
        content: 'Как использовать КуратеДАО. Переходим в Дискорд, во вкладке “#announcements” ищем последний пост;',
        url: 'https://medium.com/@zxcrypto/%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B0%D0%B5%D0%BC-%D1%80%D0%BE%D0%BB%D0%B8-%D0%B2-kuratedao-2b64380b40f3'
    },
    {
        title: 'О проекте CurateDAO — первой базе данных, построенной на блокчейне',
        content: ' CurateDAO объявила о завершении раунда начального финансирования в размере',
        url: 'https://medium.com/@lyazakem/%D0%BE-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B5-kuratedao-%D0%BF%D0%B5%D1%80%D0%B2%D0%BE%D0%B9-%D0%B1%D0%B0%D0%B7%D0%B5-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85-%D0%BF%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9-%D0%BD%D0%B0-%D0%B1%D0%BB%D0%BE%D0%BA%D1%87%D0%B5%D0%B9%D0%BD%D0%B5-950ac56753dc'
    },
    {
        title: 'What is the CurateDAO Community? Интервью с CurateDAO',
        content: 'Это сообщества, которые экономически заинтересованы в организации данных по определенной теме.',
        url: 'https://medium.com/@talandaniel/%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B2%D1%8C%D1%8E-%D1%81-kuratedao-bb1a39521c3e'
    },
    {
        title: '“Curate to Earn”的Web3内容数据库CurateDAO是什么？',
        content: 'CurateDAO 是第一个用于Web3 应用程序的、基于区块链的、社区策展的数据库。',
        url: 'https://mirror.xyz/shandonguniversity.eth/LqZR0yByz2GVOLeWoJDrw4ohwMTMrCURPDMJIZzktGY'
    },
    {
        title: '今天给大家介绍一个基于区块链的数据库 CurateDAO',
        content: 'CurateDAO 是第一个用于 Web3 应用程序的社区策划的基于区块链的数据库。CurateDAO的使命是：使用加密经济游戏来管理世界信息。',
        url: 'https://medium.com/@okman/kuratedao%E9%A1%B9%E7%9B%AE%E4%BB%8B%E7%BB%8D-ac97ec7c88e3'
    },
    {
        title: 'CurateDAO Secures $6.85M Seed Funding Led by Polychain Capital',
        content: 'CurateDAO today announced the close of its $6.85 Million seed funding round, led by Polychain Capital.',
        url: 'https://mirror.xyz/0x1d1Caa3A187AfBdF298a32a79DfC34F3BB22952F/rHYYHqpJitMelYGCTpCDTC8TDOH9nAgpmbFsLY20TbM'
    },
    {
        title: "CurateDAO's Inspiration: Legislative, Executive, and Judicial",
        content: "CurateDAO's curation model is inspired by the three branches of the American government.",
        url: 'https://mirror.xyz/0x1d1Caa3A187AfBdF298a32a79DfC34F3BB22952F/3hAW9AEE_mCP-EIAapFydyI66dwGx1DXnJ0Gjyb4qEQ'
    },
    {
        title: "Tech Ideas for the Future: Subnets, Validators, and CRUD dApps",
        content: "As a database, CurateDAO needs a platform that is fast, low cost, and eco-friendly.",
        url: 'https://mirror.xyz/0x1d1Caa3A187AfBdF298a32a79DfC34F3BB22952F/ur8HpL_UDQCK2M4tmsPA2hvClTTra_GspI44V24pPkQ'
    },
    {
        title: "A Web2 and Web3 Example: Curation for News Curation and DeFi ",
        content: "Example of CurateDAO being used for News Curation in Web2 and DeFi in Web3.",
        url: 'https://mirror.xyz/0x1d1Caa3A187AfBdF298a32a79DfC34F3BB22952F/GuJaEfgu2staMMU6Xys0Z7mgkUSA5nko4B1da5vUp-8'
    },    
    {
        title: '100x the quality and size of the Internet by being more subtle',
        content: 'The one-size-fits-all approach to content curation leaves a lot of great content behind.',
        url: 'https://mirror.xyz/0x1d1Caa3A187AfBdF298a32a79DfC34F3BB22952F/1yLMWP-a6ZckWfu4SaBAA_XEgJcWA5oEy62z2J5Jb8Q'
    },
    {
        title: 'ELI5: How the CurateDAO Protocol Works',
        content: 'Curators, scouts, and viewers work together to curate a database using a novel prediction market.',
        url: 'https://mirror.xyz/0x1d1Caa3A187AfBdF298a32a79DfC34F3BB22952F/qeEitRhtBE1JXy769Aha4zThkAW6B3f3dIx_yDwuRuA'
    },
]


function renderNews(item:any, index:number){
    return <div key={index} className="col-sm-4">
        <div className='mb-4'>
            <Link href={ item.url } >
                <a className={styles.greenlink} >
                    {item.title}
                </a>
            </Link>
            <div className='text-gray-500'>
                {item.content}
            </div>
        </div>
    </div>
}

const News: NextPage = () => {
    return (
        <>
            <Header web3={false} />
            <div className={styles.description}>
                Videos
            </div>
            <div className="container">
                { news.map(renderNews) }
            </div>
        </>
    );
};

export default News;
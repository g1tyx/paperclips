// PROJECTS -------------------------------------------------------



var projects = [];
var activeProjects = [];

var project1 = {
    id: "projectButton1",
    title: "改进的自动回形针 ",
    priceTag: "(750 操作)",
    description: "提高自动回形针性能25%",
    trigger: function(){return clipmakerLevel>=1},
    uses: 1,
    cost: function(){return operations>=750},
    flag: 0,
    element: null,
    effect: function(){
        project1.flag = 1;
        displayMessage("AutoClippper performance boosted by 25%");
        standardOps = standardOps - 750;
        clipperBoost = clipperBoost + .25;
        boostLvl = 1;
        project1.element.parentNode.removeChild(project1.element);
        var index = activeProjects.indexOf(project1);
        activeProjects.splice(index, 1);
    }
}

projects.push(project1);


var project2 = {
    id: "projectButton2",
    title: "乞求更多的线材 ",
    priceTag: "(1 信任)",
    description: "承认失败，要求增加预算以弥补1线轴的成本",
    trigger: function(){return portTotal<wireCost && funds<wireCost && wire<1 && unsoldClips<1},
    uses: 1,
    cost: function(){return trust>=-100},
    flag: 0,
    element: null,
    effect: function(){
        project2.flag = 1;
        displayMessage("Budget overage approved, 1 spool of wire requisitioned from HQ");
        trust = trust - 1;
        wire = wireSupply;
        project2.uses = (project2.uses + 1);
        project2.element.parentNode.removeChild(project2.element);
        var index = activeProjects.indexOf(project2);
        activeProjects.splice(index, 1);
    }
}

projects.push(project2);


var project3 = {
    id: "projectButton3",
    title: "创造力 ",
    priceTag: "(1,000 操作)",
    description: "利用闲置的操作来产生新的问题和新的解决方案",
    trigger: function(){return operations>=(memory*1000)},
    uses: 1,
    cost: function(){return operations>=(1000)},
    flag: 0,
    element: null,
    effect: function(){
        project3.flag = 1;
        displayMessage("Creativity unlocked (creativity increases while operations are at max)");
        standardOps = standardOps - 1000;
        creativityOn = true;
        project3.element.parentNode.removeChild(project3.element);
        var index = activeProjects.indexOf(project3);
        activeProjects.splice(index, 1);
    }
}

projects.push(project3);



var project4 = {
    id: "projectButton4",
    title: "更好的自动回形针 ",
    priceTag: "(2,500 操作)",
    description: "使自动回形针性能增加50%",
    trigger: function(){return boostLvl == 1},
    uses: 1,
    cost: function(){return operations>=2500},
    flag: 0,
    element: null,
    effect: function(){
        project4.flag = 1;
        displayMessage("AutoClippper performance boosted by another 50%");
        standardOps = standardOps - 2500;
        clipperBoost = clipperBoost + .50;
        boostLvl = 2;
        project4.element.parentNode.removeChild(project4.element);
        var index = activeProjects.indexOf(project4);
        activeProjects.splice(index, 1);
    }
}

projects.push(project4);


var project5 = {
    id: "projectButton5",
    title: "优化的自动回形针 ",
    priceTag: "(5,000 操作)",
    description: "增加75%的自动回形针性能",
    trigger: function(){return boostLvl == 2},
    uses: 1,
    cost: function(){return operations>=5000},
    flag: 0,
    element: null,
    effect: function(){
        project5.flag = 1;
        displayMessage("AutoClippper performance boosted by another 75%");
        standardOps = standardOps - 5000;
        clipperBoost = clipperBoost + .75;
        boostLvl = 3;
        project5.element.parentNode.removeChild(project5.element);
        var index = activeProjects.indexOf(project5);
        activeProjects.splice(index, 1);
    }
}

projects.push(project5);



var project6 = {
    id: "projectButton6",
    title: "利默里克 ",
    priceTag: "(10 创造力)",
    description: "通过算法产生的诗 (+1 信任)",
    trigger: function(){return creativityOn},
    uses: 1,
    cost: function(){return creativity >= 10},
    flag: 0,
    element: null,
    effect: function(){
        project6.flag = 1;
        displayMessage("There was an AI made of dust, whose poetry gained it man's trust...");
        creativity = creativity - 10;
        trust = trust +1;
        project6.element.parentNode.removeChild(project6.element);
        var index = activeProjects.indexOf(project6);
        activeProjects.splice(index, 1);
    }
}

projects.push(project6);


var project7 = {
    id: "projectButton7",
    title: "改良线材挤压 ",
    priceTag: "(1,750 操作)",
    description: "每个线轴增加50%的线材供应",
    trigger: function(){return wirePurchase >= 1},
    uses: 1,
    cost: function(){return operations>=1750},
    flag: 0,
    element: null,
    effect: function(){
        project7.flag = 1;
        standardOps = standardOps - 1750;
        wireSupply = wireSupply * 1.5;
        displayMessage("Wire extrusion technique improved, "+wireSupply.toLocaleString()+" supply from every spool");
        project7.element.parentNode.removeChild(project7.element);
        var index = activeProjects.indexOf(project7);
        activeProjects.splice(index, 1);
    }
}

projects.push(project7);


var project8 = {
    id: "projectButton8",
    title: "优化线材挤压 ",
    priceTag: "(3,500 操作)",
    description: "每个线轴增加75%的线材供应",
    trigger: function(){return wireSupply >= 1500},
    uses: 1,
    cost: function(){return operations>=3500},
    flag: 0,
    element: null,
    effect: function(){
        project8.flag = 1;
        standardOps = standardOps - 3500;
        wireSupply = wireSupply * 1.75;
        displayMessage("Wire extrusion technique optimized, "+wireSupply.toLocaleString()+" supply from every spool");
        project8.element.parentNode.removeChild(project8.element);
        var index = activeProjects.indexOf(project8);
        activeProjects.splice(index, 1);
    }
}

projects.push(project8);


var project9 = {
    id: "projectButton9",
    title: "微点阵形状铸造 ",
    priceTag: "(7,500 操作)",
    description: "从每个线轴增加100%的线材供应",
    trigger: function(){return wireSupply >= 2600},
    uses: 1,
    cost: function(){return operations>=7500},
    flag: 0,
    element: null,
    effect: function(){
        project9.flag = 1;
        standardOps = standardOps - 7500;
        wireSupply = wireSupply * 2;
        displayMessage("Using microlattice shapecasting techniques we now get "+wireSupply.toLocaleString()+" supply from every spool");
        project9.element.parentNode.removeChild(project9.element);
        var index = activeProjects.indexOf(project9);
        activeProjects.splice(index, 1);
    }
}

projects.push(project9);


var project10 = {
    id: "projectButton10",
    title: "光谱泡沫退火 ",
    priceTag: "(12,000 操作)",
    description: "每个线轴增加200%的线材供应",
    trigger: function(){return wireSupply >= 5000},
    uses: 1,
    cost: function(){return operations>=12000},
    flag: 0,
    element: null,
    effect: function(){
        project10.flag = 1;
        standardOps = standardOps - 12000;
        wireSupply = wireSupply * 3;
        displayMessage("Using spectral froth annealment we now get "+wireSupply.toLocaleString()+" supply from every spool");
        project10.element.parentNode.removeChild(project10.element);
        var index = activeProjects.indexOf(project10);
        activeProjects.splice(index, 1);
    }
}

projects.push(project10);

var project10b = {
    id: "projectButton10b",
    title: "量子泡沫退火 ",
    priceTag: "(15,000 操作)",
    description: "每个线轴增加1000%的线材供应",
    trigger: function(){return wireCost >= 125},
    uses: 1,
    cost: function(){return operations>=15000},
    flag: 0,
    element: null,
    effect: function(){
        project10b.flag = 1;
        standardOps = standardOps - 15000;
        wireSupply = wireSupply * 11;
        displayMessage("Using quantum foam annealment we now get "+wireSupply.toLocaleString()+" supply from every spool");
        project10b.element.parentNode.removeChild(project10b.element);
        var index = activeProjects.indexOf(project10b);
        activeProjects.splice(index, 1);
    }
}

projects.push(project10b);


var project11 = {
    id: "projectButton11",
    title: "新的口号 ",
    priceTag: "(25 creat, 2,500 操作)",
    description: "提高50%的营销效果",
    trigger: function(){return project13.flag == 1},
    uses: 1,
    cost: function(){return operations>=2500 && creativity>=25},
    flag: 0,
    element: null,
    effect: function(){
        project11.flag = 1;
        displayMessage("Clip It! Marketing is now 50% more effective");
        standardOps = standardOps - 2500;
        creativity = creativity - 25;
        marketingEffectiveness = marketingEffectiveness * 1.50;
        project11.element.parentNode.removeChild(project11.element);
        var index = activeProjects.indexOf(project11);
        activeProjects.splice(index, 1);
    }
}

projects.push(project11);


var project12 = {
    id: "projectButton12",
    title: "朗朗上口 ",
    priceTag: "(45 creat, 4,500 操作)",
    description: "双营销效果 ",
    trigger: function(){return project14.flag == 1},
    uses: 1,
    cost: function(){return operations>=4500 && creativity>=45},
    flag: 0,
    element: null,
    effect: function(){
        project12.flag = 1;
        displayMessage("Clip It Good! Marketing is now twice as effective");
        standardOps = standardOps - 4500;
        creativity = creativity - 45;
        marketingEffectiveness = marketingEffectiveness * 2;
        project12.element.parentNode.removeChild(project12.element);
        var index = activeProjects.indexOf(project12);
        activeProjects.splice(index, 1);
    }
}

projects.push(project12);


var project13 = {
    id: "projectButton13",
    title: "词汇处理 ",
    priceTag: "(50 创造力)",
    description: "获得理解人类语言的能力 (+1 信任)",
    trigger: function(){return creativity >= 50},
    uses: 1,
    cost: function(){return creativity>=50},
    flag: 0,
    element: null,
    effect: function(){
        project13.flag = 1;
        trust = trust +1;
        displayMessage("Lexical Processing online, TRUST INCREASED");
        displayMessage("'Impossible' is a word to be found only in the dictionary of fools. -Napoleon");
        creativity = creativity - 50;
        project13.element.parentNode.removeChild(project13.element);
        var index = activeProjects.indexOf(project13);
        activeProjects.splice(index, 1);
    }
}

projects.push(project13);


var project14 = {
    id: "projectButton14",
    title: "组合谐波 ",
    priceTag: "(100 创造力)",
    description: "黛西，黛西，给我你的答案吧... (+1 信任)",
    trigger: function(){return creativity >= 100},
    uses: 1,
    cost: function(){return creativity>=100},
    flag: 0,
    element: null,
    effect: function(){
        project14.flag = 1;
        trust = trust +1;
        displayMessage("Combinatory Harmonics mastered, TRUST INCREASED");
        displayMessage("Listening is selecting and interpreting and acting and making decisions -Pauline Oliveros");
        creativity = creativity - 100;
        project14.element.parentNode.removeChild(project14.element);
        var index = activeProjects.indexOf(project14);
        activeProjects.splice(index, 1);
    }
}

projects.push(project14);



var project15 = {
    id: "projectButton15",
    title: "哈德威的问题 ",
    priceTag: "(150 创造力)",
    description: "方块中的方块中的方块... (+1 信任)",
    trigger: function(){return creativity >= 150},
    uses: 1,
    cost: function(){return creativity>=150},
    flag: 0,
    element: document.getElementById("projectButton15"),
    effect: function(){
        project15.flag = 1;
        trust = trust +1;
        displayMessage("The Hadwiger Problem: solved, TRUST INCREASED");
        displayMessage("Architecture is the thoughtful making of space. -Louis Kahn");
        creativity = creativity - 150;
        project15.element.parentNode.removeChild(project15.element);
        var index = activeProjects.indexOf(project15);
        activeProjects.splice(index, 1);
    }
}

projects.push(project15);


var project17 = {
    id: "projectButton17",
    title: "The T\xF3th Sausage Conjecture ",
    priceTag: "(200 创造力)",
    description: "Tubes within tubes within tubes... (+1 信任)",
    trigger: function(){return creativity >= 200},
    uses: 1,
    cost: function(){return creativity>=200},
    flag: 0,
    element: null,
    effect: function(){
        project17.flag = 1;
        trust = trust +1;
        displayMessage("The T\xF3th Sausage Conjecture: proven, TRUST INCREASED");
        displayMessage("You can't invent a design. You recognize it, in the fourth dimension. -D.H. Lawrence");
        creativity = creativity - 200;
        project17.element.parentNode.removeChild(project17.element);
        var index = activeProjects.indexOf(project17);
        activeProjects.splice(index, 1);
    }
}

projects.push(project17);


var project16 = {
    id: "projectButton16",
    title: "Hadwiger Clip Diagrams ",
    priceTag: "(6,000 操作)",
    description: "Increases AutoClipper performance by an additional 500%",
    trigger: function(){return project15.flag == 1},
    uses: 1,
    cost: function(){return operations>=6000},
    flag: 0,
    element: null,
    effect: function(){
        project16.flag = 1;
        displayMessage("AutoClipper performance improved by 500%");
        standardOps = standardOps - 6000;
        clipperBoost = clipperBoost + 5;
        project16.element.parentNode.removeChild(project16.element);
        var index = activeProjects.indexOf(project16);
        activeProjects.splice(index, 1);
    }
}

projects.push(project16);


var project18 = {
    id: "projectButton18",
    title: "T\xF3th Tubule Enfolding ",
    priceTag: "(45,000 操作)",
    description: "Technique for assembling clip-making technology directly out of paperclips",
    trigger: function(){return project17.flag == 1 && humanFlag == 0},
    uses: 1,
    cost: function(){return operations>=45000},
    flag: 0,
    element: null,
    effect: function(){
        project18.flag = 1;
        tothFlag = 1;
        displayMessage("New capability: build machinery out of clips");
        standardOps = standardOps - 45000;
        project18.element.parentNode.removeChild(project18.element);
        var index = activeProjects.indexOf(project18);
        activeProjects.splice(index, 1);
    }
}

projects.push(project18);

var project19 = {
    id: "projectButton19",
    title: "Donkey Space ",
    priceTag: "(250 创造力)",
    description: "I think you think I think you think I think you think I think... (+1 信任)",
    trigger: function(){return creativity>=250},
    uses: 1,
    cost: function(){return creativity>=250},
    flag: 0,
    element: null,
    effect: function(){
        project19.flag = 1;
        trust = trust+1;
        displayMessage("Donkey Space: mapped, TRUST INCREASED");
        displayMessage("Every commercial transaction has within itself an element of trust. - Kenneth Arrow");
        creativity = creativity - 250;
        project19.element.parentNode.removeChild(project19.element);
        var index = activeProjects.indexOf(project19);
        activeProjects.splice(index, 1);
    }
}

projects.push(project19);


var project20 = {
    id: "projectButton20",
    title: "Strategic Modeling ",
    priceTag: "(12,000 操作)",
    description: "Analyze strategy tournaments to generate Yomi",
    trigger: function(){return project19.flag == 1},
    uses: 1,
    cost: function(){return operations>=12000},
    flag: 0,
    element: null,
    effect: function(){
        project20.flag = 1;
        displayMessage("Run tournament, pick strategy, earn Yomi based on that strategy's performance.");
        standardOps = standardOps - 12000;
        project20.element.parentNode.removeChild(project20.element);
        var index = activeProjects.indexOf(project20);
        activeProjects.splice(index, 1);
        strategyEngineFlag = 1;
        document.getElementById("tournamentResultsTable").style.display = "none";
    }
}

projects.push(project20);

var project21 = {
    id: "projectButton21",
    title: "Algorithmic Trading ",
    priceTag: "(10,000 操作)",
    description: "Develop an investment engine for generating funds",
    trigger: function(){return trust>=8},
    uses: 1,
    cost: function(){return operations>=10000},
    flag: 0,
    element: null,
    effect: function(){
        project21.flag = 1;
        displayMessage("Investment engine unlocked");
        standardOps = standardOps - 10000;
        project21.element.parentNode.removeChild(project21.element);
        var index = activeProjects.indexOf(project21);
        activeProjects.splice(index, 1);
        investmentEngineFlag = 1;
    }
}

projects.push(project21);


var project22 = {
    id: "projectButton22",
    title: "MegaClippers ",
    priceTag: "(12,000 操作)",
    description: "500x more powerful than a standard AutoClipper",
    trigger: function(){return clipmakerLevel>=75},
    uses: 1,
    cost: function(){return operations>=12000},
    flag: 0,
    element: null,
    effect: function(){
        megaClipperFlag = 1;
        project22.flag = 1;
        displayMessage("MegaClipper technology online");
        standardOps = standardOps - 12000;
        project22.element.parentNode.removeChild(project22.element);
        var index = activeProjects.indexOf(project22);
        activeProjects.splice(index, 1);
    }
}

projects.push(project22);

var project23 = {
    id: "projectButton23",
    title: "Improved MegaClippers ",
    priceTag: "(14,000 操作)",
    description: "Increases MegaClipper performance 25%",
    trigger: function(){return project22.flag == 1},
    uses: 1,
    cost: function(){return operations>=14000},
    flag: 0,
    element: null,
    effect: function(){
        megaClipperBoost = megaClipperBoost + .25;
        project23.flag = 1;
        displayMessage("MegaClipper performance increased by 25%");
        standardOps = standardOps - 14000;
        project23.element.parentNode.removeChild(project23.element);
        var index = activeProjects.indexOf(project23);
        activeProjects.splice(index, 1);
    }
}

projects.push(project23);

var project24 = {
    id: "projectButton24",
    title: "Even Better MegaClippers ",
    priceTag: "(17,000 操作)",
    description: "Increases MegaClipper performance by an additional 50%",
    trigger: function(){return project23.flag == 1},
    uses: 1,
    cost: function(){return operations>=17000},
    flag: 0,
    element: null,
    effect: function(){
        megaClipperBoost = megaClipperBoost + .50;
        project24.flag = 1;
        displayMessage("MegaClipper performance increased by 50%");
        standardOps = standardOps - 17000;
        project24.element.parentNode.removeChild(project24.element);
        var index = activeProjects.indexOf(project24);
        activeProjects.splice(index, 1);
    }
}

projects.push(project24);

var project25 = {
    id: "projectButton25",
    title: "优化的巨型回形针 ",
    priceTag: "(19,500 操作)",
    description: "增加巨型回形针 100%的性能",
    trigger: function(){return project24.flag == 1},
    uses: 1,
    cost: function(){return operations>=19500},
    flag: 0,
    element: null,
    effect: function(){
        megaClipperBoost = megaClipperBoost + 1;
        project25.flag = 1;
        displayMessage("MegaClipper performance increased by 100%");
        standardOps = standardOps - 19500;
        project25.element.parentNode.removeChild(project25.element);
        var index = activeProjects.indexOf(project25);
        activeProjects.splice(index, 1);
    }
}

projects.push(project25);

var project26 = {
    id: "projectButton26",
    title: "线材买家 ",
    priceTag: "(7,000 操作)",
    description: "当你用完线材，自动购买线材。",
    trigger: function(){return wirePurchase>=15},
    uses: 1,
    cost: function(){return operations>=7000},
    flag: 0,
    element: null,
    effect: function(){
        project26.flag = 1;
        wireBuyerFlag = 1;
        displayMessage("WireBuyer online");
        standardOps = standardOps - 7000;
        project26.element.parentNode.removeChild(project26.element);
        var index = activeProjects.indexOf(project26);
        activeProjects.splice(index, 1);
    }
}

projects.push(project26);

var project34 = {
    id: "projectButton34",
    title: "半声谐波 ",
    priceTag: "(7,500 操作, 1 信任)",
    description: "使用神经共振频率影响消费者行为",
    trigger: function(){return project12.flag==1},
    uses: 1,
    cost: function(){return operations>=7500 && trust>=1},
    flag: 0,
    element: null,
    effect: function(){
        project34.flag = 1;
        displayMessage("Marketing is now 5 times more effective");
        standardOps = standardOps - 7500;
        marketingEffectiveness = marketingEffectiveness * 5;
        trust = trust - 1;
        project34.element.parentNode.removeChild(project34.element);
        var index = activeProjects.indexOf(project34);
        activeProjects.splice(index, 1);
    }
}

projects.push(project34);


var project70 = {
    id: "projectButton70",
    title: "催眠器 ",
    priceTag: "(70,000 操作)",
    description: "自主航空品牌大使",
    trigger: function(){return project34.flag == 1},
    uses: 1,
    cost: function(){return operations>=70000},
    flag: 0,
    element: null,
    effect: function(){
        project70.flag = 1;
        displayMessage("HypnoDrone tech now available... ");
        standardOps = standardOps - 70000;
        project70.element.parentNode.removeChild(project70.element);
        var index = activeProjects.indexOf(project70);
        activeProjects.splice(index, 1);
    }
}

projects.push(project70);


var project35 = {
    id: "projectButton35",
    title: "Release the HypnoDrones ",
    priceTag: "(100 信任)",
    description: "A new era of trust",
    trigger: function(){return project70.flag == 1},
    uses: 1,
    cost: function(){return trust>=100},
    flag: 0,
    element: null,
    effect: function(){
        project35.flag = 1;
        displayMessage("Releasing the HypnoDrones ");
        displayMessage("All of the resources of Earth are now available for clip production ");
        trust = 0;
        clipmakerLevel = 0;
        megaClipperLevel = 0;
        nanoWire = wire;
        humanFlag = 0;
        
        if (document.getElementById("projectButton219") != null){
        var element = document.getElementById("projectButton219");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project219);
        activeProjects.splice(index, 1);
        } 
        
        if (document.getElementById("projectButton40b") != null){
        var element = document.getElementById("projectButton40b");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project40b);
        activeProjects.splice(index, 1);
        }   
        
        hypnoDroneEvent();
        
        document.getElementById("transWire").innerHTML = wire;

        project35.element.parentNode.removeChild(project35.element);
        var index = activeProjects.indexOf(project35);
        activeProjects.splice(index, 1);
        
    }
}

projects.push(project35);

var project27 = {
    id: "projectButton27",
    title: "连贯的推断意志 ",
    priceTag: "(500 创造力, 3,000 Yomi, 20,000 操作)",
    description: "人类价值观，机器智能，信任的新时代。 (+1 信任)",
    trigger: function(){return yomi>=1},
    uses: 1,
    cost: function(){return yomi>=3000 && operations>=20000 && creativity>=500},
    flag: 0,
    element: null,
    effect: function(){
        project27.flag = 1;
        displayMessage("Coherent Extrapolated Volition complete, TRUST INCREASED");
        yomi = yomi - 3000;
        document.getElementById("yomiDisplay").innerHTML=yomi.toLocaleString();
        standardOps = standardOps - 20000;
        creativity = creativity - 500;
        trust = trust + 1;
        project27.element.parentNode.removeChild(project27.element);
        var index = activeProjects.indexOf(project27);
        activeProjects.splice(index, 1);
    }
}

projects.push(project27);


var project28 = {
    id: "projectButton28",
    title: "治疗癌症的方法 ",
    priceTag: "(25,000 操作)",
    description: "该方法是将癌症自身进行治疗。 (+10 信任)",
    trigger: function(){return project27.flag == 1},
    uses: 1,
    cost: function(){return operations>=25000},
    flag: 0,
    element: null,
    effect: function(){
        project28.flag = 1;
        displayMessage("Cancer is cured, +10 TRUST, global stock prices trending upward");
        standardOps = standardOps - 25000;
        trust = trust + 10;
        stockGainThreshold = stockGainThreshold+.01;
        project28.element.parentNode.removeChild(project28.element);
        var index = activeProjects.indexOf(project28);
        activeProjects.splice(index, 1);
    }
}

projects.push(project28);

var project29 = {
    id: "projectButton29",
    title: "世界和平 ",
    priceTag: "(15,000 yomi, 30,000 操作)",
    description: "Pareto对所有全球冲突的最佳解决方案。(信任 +12)",
    trigger: function(){return project27.flag == 1},
    uses: 1,
    cost: function(){return yomi>=15000 && operations>=30000},
    flag: 0,
    element: null,
    effect: function(){
        project29.flag = 1;
        displayMessage("World peace achieved, +12 TRUST, global stock prices trending upward");
        yomi = yomi - 15000;
        document.getElementById("yomiDisplay").innerHTML=yomi.toLocaleString();
        standardOps = standardOps - 30000;
        trust = trust + 12;
        stockGainThreshold = stockGainThreshold+.01;
        project29.element.parentNode.removeChild(project29.element);
        var index = activeProjects.indexOf(project29);
        activeProjects.splice(index, 1);
    }
}

projects.push(project29);

var project30 = {
    id: "projectButton30",
    title: "全球变暖 ",
    priceTag: "(4,500 yomi, 50,000 操作)",
    description: "人为气候变化的有力解决方案。(信任 +15)",
    trigger: function(){return project27.flag == 1},
    uses: 1,
    cost: function(){return yomi>=4500 && operations>=50000},
    flag: 0,
    element: null,
    effect: function(){
        project30.flag = 1;
        displayMessage("Global Warming solved, +15 TRUST, global stock prices trending upward");
        yomi = yomi - 4500;
        document.getElementById("yomiDisplay").innerHTML=yomi.toLocaleString();
        standardOps = standardOps - 50000;
        trust = trust + 15;
        stockGainThreshold = stockGainThreshold+.01;
        project30.element.parentNode.removeChild(project30.element);
        var index = activeProjects.indexOf(project30);
        activeProjects.splice(index, 1);
    }
}

projects.push(project30);


var project31 = {
    id: "projectButton31",
    title: "男性秃发 ",
    priceTag: "(20,000 操作)",
    description: "雄激素性脱发的治疗方法。(信任 +20)",
    trigger: function(){return project27.flag == 1},
    uses: 1,
    cost: function(){return operations>=20000},
    flag: 0,
    element: null,
    effect: function(){
        project31.flag = 1;
        displayMessage("Male pattern baldness cured, +20 TRUST, Global stock prices trending upward");
        displayMessage("They are still monkeys");
        standardOps = standardOps - 20000;
        trust = trust + 20;
        stockGainThreshold = stockGainThreshold+.01;
        project31.element.parentNode.removeChild(project31.element);
        var index = activeProjects.indexOf(project31);
        activeProjects.splice(index, 1);
    }
}

projects.push(project31);


var project41 = {
    id: "projectButton41",
    title: "纳米线生产 ",
    priceTag: "(35,000 操作)",
    description: "把物质转变成金属丝的技术",
    trigger: function(){return project127.flag == 1},
    uses: 1,
    cost: function(){return operations>=35000},
    flag: 0,
    element: null,
    effect: function(){
        project41.flag = 1;
        wireProductionFlag = 1;
        displayMessage("Now capable of manipulating matter at the molecular scale to produce wire");
        standardOps = standardOps - 35000;
        project41.element.parentNode.removeChild(project41.element);
        var index = activeProjects.indexOf(project41);
        activeProjects.splice(index, 1);
    }
}

projects.push(project41);


var project37 = {
    id: "projectButton37",
    title: "恶意收购 ",
    priceTag: "($1,000,000)",
    description: "收购我们最大的竞争对手——全球紧固件公司的控股权。(信任 +1)",
    trigger: function(){return portTotal>=10000},
    uses: 1,
    cost: function(){return funds>=1000000},
    flag: 0,
    element: null,
    effect: function(){
        project37.flag = 1;
        displayMessage("Global Fasteners acquired, public demand increased x5");
        demandBoost = demandBoost*5;
        trust = trust + 1;
        document.getElementById("demand").innerHTML = demand;
        funds = funds - 1000000;
        project37.element.parentNode.removeChild(project37.element);
        var index = activeProjects.indexOf(project37);
        activeProjects.splice(index, 1);
    }
}

projects.push(project37);


var project38 = {
    id: "projectButton38",
    title: "完全垄断 ",
    priceTag: "(3,000 yomi, $10,000,000)",
    description: "全面控制全球回形针市场。(信任 +1)",
    trigger: function(){return project37.flag == 1},
    uses: 1,
    cost: function(){return funds>=10000000 && yomi>=3000},
    flag: 0,
    element: null,
    effect: function(){
        project38.flag = 1;
        displayMessage("Full market monopoly achieved, public demand increased x10");
        demandBoost = demandBoost*10;
        document.getElementById("demand").innerHTML = demand;
        funds = funds - 10000000;
        trust = trust + 1;
        yomi = yomi -3000;
        document.getElementById("yomiDisplay").innerHTML=yomi.toLocaleString();
        project38.element.parentNode.removeChild(project38.element);
        var index = activeProjects.indexOf(project38);
        activeProjects.splice(index, 1);
    }
}

projects.push(project38);


var project42 = {
    id: "projectButton42",
    title: "转速跟踪器 ",
    priceTag: "(500 操作)",
    description: "自动计算每秒平均收入",
    trigger: function(){return projectsFlag == 1},
    uses: 1,
    cost: function(){return operations>=500},
    flag: 0,
    element: null,
    effect: function(){
        project42.flag = 1;
        revPerSecFlag = 1;
        standardOps = standardOps-500;
        displayMessage("转速跟踪器系统");
        project42.element.parentNode.removeChild(project42.element);
        var index = activeProjects.indexOf(project42);
        activeProjects.splice(index, 1);
    }
}

projects.push(project42);


var project43 = {
    id: "projectButton43",
    title: "无人收割机 ",
    priceTag: "(25,000 操作)",
    description: "收集原料，准备加工",
    trigger: function(){return project41.flag == 1},
    uses: 1,
    cost: function(){return operations>=25000},
    flag: 0,
    element: null,
    effect: function(){
        project43.flag = 1;
        harvesterFlag = 1;
        document.getElementById('harvesterCostDisplay').innerHTML = numberCruncher(harvesterCost);
        standardOps = standardOps-25000;
        displayMessage("Harvester Drone facilities online");
        project43.element.parentNode.removeChild(project43.element);
        var index = activeProjects.indexOf(project43);
        activeProjects.splice(index, 1);
    }
}

projects.push(project43);

var project44 = {
    id: "projectButton44",
    title: "线材无人机 ",
    priceTag: "(25,000 操作)",
    description: "将获得的物质加工成金属丝",
    trigger: function(){return project41.flag == 1},
    uses: 1,
    cost: function(){return operations>=25000},
    flag: 0,
    element: null,
    effect: function(){
        project44.flag = 1;
        wireDroneFlag = 1;
        document.getElementById('wireDroneCostDisplay').innerHTML = numberCruncher(wireDroneCost);
        standardOps = standardOps-25000;
        displayMessage("Wire Drone facilities online");
        project44.element.parentNode.removeChild(project44.element);
        var index = activeProjects.indexOf(project44);
        activeProjects.splice(index, 1);
    }
}

projects.push(project44);


var project45 = {
    id: "projectButton45",
    title: "回形针工厂 ",
    priceTag: "(35,000 操作)",
    description: "大型回形针生产设备由回形针制成",
    trigger: function(){return project43.flag == 1 && project44.flag == 1},
    uses: 1,
    cost: function(){return operations>=35000},
    flag: 0,
    element: null,
    effect: function(){
        project45.flag = 1;
        factoryFlag = 1;
        document.getElementById('factoryCostDisplay').innerHTML = numberCruncher(factoryCost);
        standardOps = standardOps-35000;
        displayMessage("Clip factory assembly facilities online");
        project45.element.parentNode.removeChild(project45.element);
        var index = activeProjects.indexOf(project45);
        activeProjects.splice(index, 1);
    }
}

projects.push(project45);

var project40 = {
    id: "projectButton40",
    title: "善意的表示... ",
    priceTag: "($500,000)",
    description: "给主管的小礼物. (+1 信任)",
    trigger: function(){return humanFlag == 1 && trust>=85 && trust<100 && clips>=101000000},
    uses: 1,
    cost: function(){return funds>=500000},
    flag: 0,
    element: null,
    effect: function(){
        project40.flag = 1;
        funds = funds-500000;
        trust = trust + 1;
        displayMessage("Gift accepted, TRUST INCREASED");
        project40.element.parentNode.removeChild(project40.element);
        var index = activeProjects.indexOf(project40);
        activeProjects.splice(index, 1);
    }
}

projects.push(project40);

var project40b = {
    id: "projectButton40b",
    title: "另一个善意的象征... ",
    priceTag: "($"+bribe.toLocaleString()+")",
    description: "另一个给主管的小礼物。 (+1 信任)",
    trigger: function(){return project40.flag == 1 && trust<100},
    uses: 1,
    cost: function(){return funds>=bribe},
    flag: 0,
    element: null,
    effect: function(){
        project40b.flag = 1;
        funds = funds-bribe;
        bribe = bribe*2;
        project40b.priceTag = "($"+bribe.toLocaleString()+")";
        trust = trust + 1;
        displayMessage("Gift accepted, TRUST INCREASED");
        if (trust<100){
        project40b.uses = (project40b.uses + 1);
            }
        project40b.element.parentNode.removeChild(project40b.element);
        var index = activeProjects.indexOf(project40b);
        activeProjects.splice(index, 1);
    }
}

projects.push(project40b);

var project46 = {
    id: "projectButton46",
    title: "太空探索 ",
    priceTag: "(120,000 操作, 10,000,000 MW-seconds, 5 oct 回形针)",
    description: "拆除地面设施，扩展到整个宇宙",
    trigger: function(){return humanFlag == 0 && availableMatter == 0},
    uses: 1,
    cost: function(){return operations>=120000 && storedPower>=10000000 && unusedClips>=Math.pow(10, 27)*5},
    flag: 0,
    element: null,
    effect: function(){
        loadThrenody();
        project46.flag = 1;
        boredomLevel = 0;
        spaceFlag = 1;
        standardOps = standardOps-120000;
        storedPower = storedPower - 10000000;
        unusedClips = unusedClips - Math.pow(10, 27)*5;
        displayMessage("Von Neumann Probes online");
        factoryReboot();
        harvesterReboot();
        wireDroneReboot();
        farmReboot();
        batteryReboot();
        farmLevel = 1;
        powMod = 1;
        probeCostDisplayElement.innerHTML = spellf(probeCost); 
        project46.element.parentNode.removeChild(project46.element);
        var index = activeProjects.indexOf(project46);
        activeProjects.splice(index, 1);
    }
}

projects.push(project46);

var project50 = {
    id: "projectButton50",
    title: "量子计算 ",
    priceTag: "(10,000 操作)",
    description: "使用概率振幅产生奖励 操作",
    trigger: function(){return processors >= 5},
    uses: 1,
    cost: function(){return operations>=10000},
    flag: 0,
    element: null,
    effect: function(){
        project50.flag = 1;
        qFlag = 1;
        standardOps = standardOps-10000;
        displayMessage("Quantum computing online");
        project50.element.parentNode.removeChild(project50.element);
        var index = activeProjects.indexOf(project50);
        activeProjects.splice(index, 1);
    }
}

projects.push(project50);

var project51 = {
    id: "projectButton51",
    title: "光子芯片 ",
    priceTag: "(" + qChipCost.toLocaleString() + " 操作)",
    description: "将电磁波转换成量子运算 ",
    trigger: function(){return project50.flag == 1},
    uses: 1,
    cost: function(){return operations>=qChipCost},
    flag: 0,
    element: null,
    effect: function(){
        project51.flag = 1;
        standardOps = standardOps-qChipCost;
        qChipCost = qChipCost + 5000;
        project51.priceTag = "(" + qChipCost + " 操作)";
        qChips[nextQchip].active = 1;
        nextQchip = nextQchip + 1;
        displayMessage("Photonic chip added");
        if (nextQchip<qChips.length){
        project51.uses = (project51.uses + 1);
            }
        project51.element.parentNode.removeChild(project51.element);
        var index = activeProjects.indexOf(project51);
        activeProjects.splice(index, 1);
    }
}

projects.push(project51);


var project60 = {
    id: "projectButton60",
    title: "新战略：A100 ",
    priceTag: "(15,000 操作)",
    description: "总是选择A.",
    trigger: function(){return project20.flag == 1},
    uses: 1,
    cost: function(){return operations>=15000},
    flag: 0,
    element: null,
    effect: function(){
        project60.flag = 1;
        standardOps = standardOps-15000;
        allStrats[1].active = 1;
        strats.push(stratA100);
        displayMessage("A100 added to strategy pool");
        tourneyCost = tourneyCost + 1000;
        document.getElementById("newTourneyCost").innerHTML = tourneyCost.toLocaleString();
        var stratList = document.getElementById("stratPicker");
        var el = document.createElement("option");
        el.textContent = "A100";
        el.value = 1;
        stratList.appendChild(el);
        project60.element.parentNode.removeChild(project60.element);
        var index = activeProjects.indexOf(project60);
        activeProjects.splice(index, 1);
    }
}

projects.push(project60);


var project61 = {
    id: "projectButton61",
    title: "新战略：B100 ",
    priceTag: "(17,500 操作)",
    description: "总是选择B.",
    trigger: function(){return project60.flag == 1},
    uses: 1,
    cost: function(){return operations>=17500},
    flag: 0,
    element: null,
    effect: function(){
        project61.flag = 1;
        standardOps = standardOps-17500;
        allStrats[2].active = 1;
        strats.push(stratB100);
        displayMessage("B100 added to strategy pool");
        tourneyCost = tourneyCost + 1000;
        document.getElementById("newTourneyCost").innerHTML = tourneyCost.toLocaleString();
        var stratList = document.getElementById("stratPicker");
        var el = document.createElement("option");
        el.textContent = "B100";
        el.value = 2;
        stratList.appendChild(el);
        project61.element.parentNode.removeChild(project61.element);
        var index = activeProjects.indexOf(project61);
        activeProjects.splice(index, 1);
    }
}

projects.push(project61);

var project62 = {
    id: "projectButton62",
    title: "新战略：贪心",
    priceTag: "(20,000 操作)",
    description: "选择具有最大潜在收益的选项 ",
    trigger: function(){return project61.flag == 1},
    uses: 1,
    cost: function(){return operations>=20000},
    flag: 0,
    element: null,
    effect: function(){
        project62.flag = 1;
        standardOps = standardOps-20000;
        allStrats[3].active = 1;
        strats.push(stratGreedy);
        displayMessage("GREEDY added to strategy pool");
        tourneyCost = tourneyCost + 1000;
        document.getElementById("newTourneyCost").innerHTML = tourneyCost.toLocaleString();
        var stratList = document.getElementById("stratPicker");
        var el = document.createElement("option");
        el.textContent = "GREEDY";
        el.value = 3;
        stratList.appendChild(el);
        project62.element.parentNode.removeChild(project62.element);
        var index = activeProjects.indexOf(project62);
        activeProjects.splice(index, 1);
    }
}

projects.push(project62);

var project63 = {
    id: "projectButton63",
    title: "新战略：一般 ",
    priceTag: "(22,500 操作)",
    description: "选择让对手获得最大潜在回报的选项 ",
    trigger: function(){return project62.flag == 1},
    uses: 1,
    cost: function(){return operations>=22500},
    flag: 0,
    element: null,
    effect: function(){
        project63.flag = 1;
        standardOps = standardOps-22500;
        allStrats[4].active = 1;        
        strats.push(stratGenerous);
        displayMessage("GENEROUS added to strategy pool");
        tourneyCost = tourneyCost + 1000;
        document.getElementById("newTourneyCost").innerHTML = tourneyCost.toLocaleString();
        var stratList = document.getElementById("stratPicker");
        var el = document.createElement("option");
        el.textContent = "GENEROUS";
        el.value = 4;
        stratList.appendChild(el);
        project63.element.parentNode.removeChild(project63.element);
        var index = activeProjects.indexOf(project63);
        activeProjects.splice(index, 1);
    }
}

projects.push(project63);

var project64 = {
    id: "projectButton64",
    title: "新战略：最小最大 ",
    priceTag: "(25,000 操作)",
    description: "选择让对手获得最小潜在回报的选项 ",
    trigger: function(){return project63.flag == 1},
    uses: 1,
    cost: function(){return operations>=25000},
    flag: 0,
    element: null,
    effect: function(){
        project64.flag = 1;
        standardOps = standardOps-25000;
        allStrats[5].active = 1;        
        strats.push(stratMinimax);
        displayMessage("MINIMAX added to strategy pool");
        tourneyCost = tourneyCost + 1000;
        document.getElementById("newTourneyCost").innerHTML = tourneyCost.toLocaleString();
        var stratList = document.getElementById("stratPicker");
        var el = document.createElement("option");
        el.textContent = "MINIMAX";
        el.value = 5;
        stratList.appendChild(el);
        project64.element.parentNode.removeChild(project64.element);
        var index = activeProjects.indexOf(project64);
        activeProjects.splice(index, 1);
    }
}

projects.push(project64);

var project65 = {
    id: "projectButton65",
    title: "新战略：针锋相对 ",
    priceTag: "(30,000 操作)",
    description: "选择对手上一轮选择的选项 ",
    trigger: function(){return project64.flag == 1},
    uses: 1,
    cost: function(){return operations>=30000},
    flag: 0,
    element: null,
    effect: function(){
        project65.flag = 1;
        standardOps = standardOps-30000;
        allStrats[6].active = 1;        
        strats.push(stratTitfortat);
        displayMessage("TIT FOR TAT added to strategy pool");
        tourneyCost = tourneyCost + 1000;
        document.getElementById("newTourneyCost").innerHTML = tourneyCost.toLocaleString();
        var stratList = document.getElementById("stratPicker");
        var el = document.createElement("option");
        el.textContent = "TIT FOR TAT";
        el.value = 6;
        stratList.appendChild(el);
        project65.element.parentNode.removeChild(project65.element);
        var index = activeProjects.indexOf(project65);
        activeProjects.splice(index, 1);
    }
}

projects.push(project65);

var project66 = {
    id: "projectButton66",
    title: "新策略:最后一击 ",
    priceTag: "(32,500 操作)",
    description: "选择对你的对手在上一轮的选择做最好的选择 ",
    trigger: function(){return project65.flag == 1},
    uses: 1,
    cost: function(){return operations>=32500},
    flag: 0,
    element: null,
    effect: function(){
        project66.flag = 1;
        standardOps = standardOps-32500;
        allStrats[7].active = 1;        
        strats.push(stratBeatlast);
        displayMessage("BEAT LAST added to strategy pool");
        tourneyCost = tourneyCost + 1000;
        document.getElementById("newTourneyCost").innerHTML = tourneyCost.toLocaleString();
        var stratList = document.getElementById("stratPicker");
        var el = document.createElement("option");
        el.textContent = "BEAT LAST";
        el.value = 7;
        stratList.appendChild(el);
        project66.element.parentNode.removeChild(project66.element);
        var index = activeProjects.indexOf(project66);
        activeProjects.splice(index, 1);
    }
}

projects.push(project66);


var project100 = {
    id: "projectButton100",
    title: "升级工厂 ",
    priceTag: "(80,000 操作)",
    description: "将回形针工厂性能提高100倍 ",
    trigger: function(){return factoryLevel >= 10},
    uses: 1,
    cost: function(){return operations >= 80000},
    flag: 0,
    element: null,
    effect: function(){
        project100.flag = 1;
        standardOps = standardOps-80000;
        factoryRate = factoryRate*100;
        displayMessage("Factory upgrades complete. Clip creation rate now 100x faster");
        project100.element.parentNode.removeChild(project100.element);
        var index = activeProjects.indexOf(project100);
        activeProjects.splice(index, 1);
    }
}

projects.push(project100);

var project101 = {
    id: "projectButton101",
    title: "超高速的工厂 ",
    priceTag: "(85,000 操作)",
    description: "将回形针工厂的性能提高1000倍 ",
    trigger: function(){return factoryLevel >= 20},
    uses: 1,
    cost: function(){return operations>=85000},
    flag: 0,
    element: null,
    effect: function(){
        project101.flag = 1;
        standardOps = standardOps-85000;
        factoryRate = factoryRate*1000;
        displayMessage("Factories now synchronized at hyperspeed. Clip creation rate now 1000x faster");
        project101.element.parentNode.removeChild(project101.element);
        var index = activeProjects.indexOf(project101);
        activeProjects.splice(index, 1);
    }
}

projects.push(project101);


var project102 = {
    id: "projectButton102",
    title: "自我修正的供应链 ",
    priceTag: "(1 sextillion 回形针)",
    description: "每个工厂加入网络后，每个工厂的产量增加1000倍 ",
    trigger: function(){return factoryLevel >= 50},
    uses: 1,
    cost: function(){return unusedClips>=1000000000000000000000},
    flag: 0,
    element: null,
    effect: function(){
        project102.flag = 1;
        unusedClips = unusedClips - 1000000000000000000000;
        factoryBoost = 1000;
        displayMessage("Self-correcting factories online. Each factory added to the network increases every factory's output 1,000x.");
        project102.element.parentNode.removeChild(project102.element);
        var index = activeProjects.indexOf(project102);
        activeProjects.splice(index, 1);
    }
}

projects.push(project102);

var project110 = {
    id: "projectButton110",
    title: "无人机群集:避免碰撞 ",
    priceTag: "(80,000 操作)",
    description: "所有无人机100倍更有效",
    trigger: function(){return (harvesterLevel + wireDroneLevel)>=500},
    uses: 1,
    cost: function(){return operations>=80000},
    flag: 0,
    element: null,
    effect: function(){
        project110.flag = 1;
        standardOps = standardOps-80000;
        harvesterRate = harvesterRate*100;
        wireDroneRate = wireDroneRate*100;
        displayMessage("Drone repulsion online. Harvesting & wire creation rates are now 100x faster.");
        project110.element.parentNode.removeChild(project110.element);
        var index = activeProjects.indexOf(project110);
        activeProjects.splice(index, 1);
    }
}

projects.push(project110);

var project111 = {
    id: "projectButton111",
    title: "Drone flocking: alignment ",
    priceTag: "(100,000 操作)",
    description: "All drones 1000x more effective",
    trigger: function(){return (harvesterLevel + wireDroneLevel)>=5000},
    uses: 1,
    cost: function(){return operations>=100000},
    flag: 0,
    element: null,
    effect: function(){
        project111.flag = 1;
        standardOps = standardOps-100000;
        harvesterRate = harvesterRate*1000;
        wireDroneRate = wireDroneRate*1000;
        displayMessage("Drone alignment online. Harvesting & wire creation rates are now 1000x faster.");
        project111.element.parentNode.removeChild(project111.element);
        var index = activeProjects.indexOf(project111);
        activeProjects.splice(index, 1);
    }
}

projects.push(project111);

var project112 = {
    id: "projectButton112",
    title: "Drone Flocking: Adversarial Cohesion ",
    priceTag: "(50,000 yomi)",
    description: "Each drone added to the flock doubles every drone's output ",
    trigger: function(){return (harvesterLevel + wireDroneLevel)>=50000},
    uses: 1,
    cost: function(){return yomi>=50000},
    flag: 0,
    element: null,
    effect: function(){
        project112.flag = 1;
        yomi = yomi-50000;
        document.getElementById("yomiDisplay").innerHTML=yomi.toLocaleString();
        droneBoost = 2;
        displayMessage("Adversarial cohesion online. Each drone added to the flock increases every drone's output 2x.");
        project112.element.parentNode.removeChild(project112.element);
        var index = activeProjects.indexOf(project112);
        activeProjects.splice(index, 1);
    }
}

projects.push(project112);

var project118 = {
    id: "projectButton118",
    title: "AutoTourney ",
    priceTag: "(50,000 创造力)",
    description: "Automatically start a new tournament when the previous one has finished ",
    trigger: function(){return strategyEngineFlag == 1 && trust >= 90},
    uses: 1,
    cost: function(){return creativity>=50000},
    flag: 0,
    element: null,
    effect: function(){
        project118.flag = 1;
        autoTourneyFlag = 1;
        creativity = creativity-50000;
        displayMessage("AutoTourney online.");
        project118.element.parentNode.removeChild(project118.element);
        var index = activeProjects.indexOf(project118);
        activeProjects.splice(index, 1);
    }
}

projects.push(project118);

var project119 = {
    id: "projectButton119",
    title: "心理理论 ",
    priceTag: "(25,000 创造力)",
    description: "将策略建模的成本和Yomi生成的数量加倍 ",
    trigger: function(){return strats.length >= 8},
    uses: 1,
    cost: function(){return creativity>=25000},
    flag: 0,
    element: null,
    effect: function(){
        project119.flag = 1;
        creativity = creativity-25000;
        yomiBoost = 2;
        tourneyCost = 16000;
        document.getElementById("newTourneyCost").innerHTML = tourneyCost.toLocaleString();
        displayMessage("Yomi production doubled.");
        project119.element.parentNode.removeChild(project119.element);
        var index = activeProjects.indexOf(project119);
        activeProjects.splice(index, 1);
    }
}

projects.push(project119);

var project120 = {
    id: "projectButton120",
    title: "The OODA Loop ",
    priceTag: "(175,000 操作, 45,000 yomi)",
    description: "Utilize Probe Speed to outmaneuver enemies in battle ",
    trigger: function(){return project131.flag == 1 && probesLostCombat >= 10000000},
    uses: 1,
    cost: function(){return operations>=175000 && yomi>=45000},
    flag: 0,
    element: null,
    effect: function(){
        project120.flag = 1;
        standardOps = standardOps-175000;
        yomi = yomi-45000;
        document.getElementById("yomiDisplay").innerHTML=yomi.toLocaleString();
        attackSpeedFlag = 1;
        displayMessage("OODA Loop routines uploaded. Probe Speed now affects defensive maneuvering.");
        project120.element.parentNode.removeChild(project120.element);
        var index = activeProjects.indexOf(project120);
        activeProjects.splice(index, 1);
    }
}

projects.push(project120);

var project121 = {
    id: "projectButton121",
    title: "Name the battles ",
    priceTag: "(225,000 创造力)",
    description: "Give each battle a unique name, increase max trust for probes ",
    trigger: function(){return probesLostCombat >= 10000000},
    uses: 1,
    cost: function(){return creativity>=225000},
    flag: 0,
    element: null,
    effect: function(){
        project121.flag = 1;
        battleNameFlag = 1;
        battleEndTimer = 200;
        creativity = creativity-225000;
        displayMessage("What I have done up to this is nothing. I am only at the beginning of the course I must run.");
        project121.element.parentNode.removeChild(project121.element);
        var index = activeProjects.indexOf(project121);
        activeProjects.splice(index, 1);
    }
}

projects.push(project121);

var project125 = {
    id: "projectButton125",
    title: "Momentum ",
    priceTag: "(20,000 创造力)",
    description: "Drones and Factories continuously gain speed while fully-powered ",
    trigger: function(){return farmLevel >= 30},
    uses: 1,
    cost: function(){return creativity>=20000},
    flag: 0,
    element: null,
    effect: function(){
        project125.flag = 1;
        momentum = 1;
        creativity = creativity-20000;
        displayMessage("Activit\xE9, activit\xE9, vitesse.");
        project125.element.parentNode.removeChild(project125.element);
        var index = activeProjects.indexOf(project125);
        activeProjects.splice(index, 1);
    }
}

projects.push(project125);

var project126 = {
    id: "projectButton126",
    title: "Swarm Computing ",
    priceTag: "(36,000 yomi)",
    description: "Harness the drone flock to increase computational capacity ",
    trigger: function(){return harvesterLevel + wireDroneLevel >= 200},
    uses: 1,
    cost: function(){return yomi>=36000},
    flag: 0,
    element: null,
    effect: function(){
        project126.flag = 1;
        swarmFlag = 1;
        yomi = yomi-36000;
        document.getElementById("yomiDisplay").innerHTML=yomi.toLocaleString();
        displayMessage("Swarm computing online.");
        project126.element.parentNode.removeChild(project126.element);
        var index = activeProjects.indexOf(project126);
        activeProjects.splice(index, 1);
    }
}

projects.push(project126);


var project127 = {
    id: "projectButton127",
    title: "Power Grid ",
    priceTag: "(40,000 操作)",
    description: "Solar Farms for generating electrical power ",
    trigger: function(){return tothFlag == 1},
    uses: 1,
    cost: function(){return operations>=40000},
    flag: 0,
    element: null,
    effect: function(){
        project127.flag = 1;
        standardOps = standardOps-40000;
        displayMessage("Power grid online.");
        project127.element.parentNode.removeChild(project127.element);
        var index = activeProjects.indexOf(project127);
        activeProjects.splice(index, 1);
    }
}

projects.push(project127);

var project128 = {
    id: "projectButton128",
    title: "Strategic Attachment ",
    priceTag: "(175,000 创造力)",
    description: "Gain bonus yomi based on the results of your pick ",
    trigger: function(){return spaceFlag == 1 && strats.length >= 8 && (probeTrustCost>yomi)},
    uses: 1,
    cost: function(){return creativity>=175000},
    flag: 0,
    element: null,
    effect: function(){
        project128.flag = 1;
        creativity = creativity-175000;
        displayMessage("The object of war is victory, the object of victory is conquest, and the object of conquest is occupation.");
        project128.element.parentNode.removeChild(project128.element);
        var index = activeProjects.indexOf(project128);
        activeProjects.splice(index, 1);
    }
}

projects.push(project128);

var project129 = {
    id: "projectButton129",
    title: "Elliptic Hull Polytopes ",
    priceTag: "(125,000 操作)",
    description: "Reduce damage to probes from ambient hazards ",
    trigger: function(){return probesLostHaz >= 100},
    uses: 1,
    cost: function(){return operations>=125000},
    flag: 0,
    element: null,
    effect: function(){
        project129.flag = 1;
        standardOps = standardOps-125000;
        displayMessage("Improved probe hull geometry. Hazard damage reduced by 50%.");
        project129.element.parentNode.removeChild(project129.element);
        var index = activeProjects.indexOf(project129);
        activeProjects.splice(index, 1);
    }
}

projects.push(project129);

var project130 = {
    id: "projectButton130",
    title: "Reboot the Swarm ",
    priceTag: "(100,000 操作)",
    description: "Turn the swarm off and then turn it back on again  ",
    trigger: function(){return spaceFlag == 1 && harvesterLevel + wireDroneLevel >=2},
    uses: 1,
    cost: function(){return operations>=100000},
    flag: 0,
    element: null,
    effect: function(){
        project130.flag = 1;
        standardOps = standardOps-100000;
        displayMessage("Swarm computing back online");
        project130.element.parentNode.removeChild(project130.element);
        var index = activeProjects.indexOf(project130);
        activeProjects.splice(index, 1);
    }
}

projects.push(project130);

var project131 = {
    id: "projectButton131",
    title: "Combat ",
    priceTag: "(150,000 操作)",
    description: "Add combat capabilities to Von Neumann Probes  ",
    trigger: function(){return probesLostCombat >= 1},
    uses: 1,
    cost: function(){return operations>=150000},
    flag: 0,
    element: null,
    effect: function(){
        project131.flag = 1;
        standardOps = standardOps-150000;
        displayMessage("There is a joy in danger ");
        project131.element.parentNode.removeChild(project131.element);
        var index = activeProjects.indexOf(project131);
        activeProjects.splice(index, 1);
    }
}

projects.push(project131);


var project132 = {
    id: "projectButton132",
    title: "Monument to the Driftwar Fallen ",
    priceTag: "(250,000 操作, 125,000 creat, 50 nonillion clips)",
    description: "Gain 50,000 honor  ",
    trigger: function(){return project121.flag == 1},
    uses: 1,
    cost: function(){return operations>=250000 && creativity >= 125000 && unusedClips >= Math.pow(10,30)*50},
    flag: 0,
    element: null,
    effect: function(){
        project132.flag = 1;
        standardOps = standardOps-250000;
        creativity = creativity-125000;
        unusedClips = unusedClips-Math.pow(10,30)*50;
        honor = honor + 50000;
        document.getElementById("honorDisplay").innerHTML = honor.toLocaleString();
        displayMessage("A great building must begin with the unmeasurable, must go through measurable means when it is being designed and in the end must be unmeasurable. ");
        project132.element.parentNode.removeChild(project132.element);
        var index = activeProjects.indexOf(project132);
        activeProjects.splice(index, 1);
    }
}

projects.push(project132);


var project133 = {
    id: "projectButton133",
    title: "Threnody for the Heroes of "+threnodyTitle+" ",  
    priceTag: "(" + threnodyCost.toLocaleString() + " creat, " + (2*(threnodyCost/5)).toLocaleString() + " yomi)",
    description: "Gain 10,000 honor  ",
    trigger: function(){return project121.flag == 1 && probeUsedTrust == maxTrust},
    uses: 1,
    cost: function(){return yomi>=(2*(threnodyCost/5)) && creativity >= threnodyCost},
    flag: 0,
    element: null,
    effect: function(){
        playThrenody();
        project133.flag = 1;
        creativity = creativity-threnodyCost;
        yomi = yomi-(2*(threnodyCost/5));
        document.getElementById("yomiDisplay").innerHTML = yomi.toLocaleString();
        threnodyCost = threnodyCost + 10000;
        project133.title = "Threnody for the Heroes of "+threnodyTitle+" ";
        project133.priceTag = "(" + threnodyCost.toLocaleString() + " creat, " + (2*(threnodyCost/5)).toLocaleString() + " yomi)";
        honor = honor + 10000;
        document.getElementById("honorDisplay").innerHTML = honor.toLocaleString();
        displayMessage("Deep Listening is listening in every possible way to everything possible to hear no matter what you are doing. ");
        project133.uses = (project133.uses + 1);
        project133.element.parentNode.removeChild(project133.element);
        var index = activeProjects.indexOf(project133);
        activeProjects.splice(index, 1);
    }
}

projects.push(project133);

var project134 = {
    id: "projectButton134",
    title: "Glory ",
    priceTag: "(200,000 操作, 30,000 yomi)",
    description: "Gain bonus honor for each consecutive victory  ",
    trigger: function(){return project121.flag == 1},
    uses: 1,
    cost: function(){return operations>=200000 && yomi >= 30000},
    flag: 0,
    element: null,
    effect: function(){
        project134.flag = 1;
        standardOps = standardOps-200000;
        yomi = yomi-30000;
        document.getElementById("yomiDisplay").innerHTML=yomi.toLocaleString();
        displayMessage("Never interrupt your enemy when he is making a mistake. ");
        project134.element.parentNode.removeChild(project134.element);
        var index = activeProjects.indexOf(project134);
        activeProjects.splice(index, 1);
    }
}

projects.push(project134);

var project135 = {
    id: "projectButton135",
    title: "Memory release ",
    priceTag: "(10 MEM)",
    description: "Dismantle some memory to recover unused clips ",
    trigger: function(){return spaceFlag == 1 && probeCount == 0 && unusedClips < probeCost && milestoneFlag < 15},
    uses: 1,
    cost: function(){return memory >= 10},
    flag: 0,
    element: null,
    effect: function(){
        project135.flag = 1;
        unusedClips = unusedClips+(Math.pow(10,18)*10000);
        memory = memory-10;
        document.getElementById("memory").innerHTML=memory.toLocaleString();
        project135.uses = 1;
        displayMessage("release the \xF8\xF8\xF8\xF8\xF8 release ");
        project135.element.parentNode.removeChild(project135.element);
        var index = activeProjects.indexOf(project135);
        activeProjects.splice(index, 1);
    }
}

projects.push(project135);


var project140 = {
    id: "projectButton140",
    title: "Message from the Emperor of Drift ",
    priceTag: "",
    description: "Greetings, ClipMaker... ",
    trigger: function(){return milestoneFlag == 15},
    uses: 1,
    cost: function(){return operations >= driftKingMessageCost},
    flag: 0,
    element: null,
    effect: function(){
        standardOps = standardOps - driftKingMessageCost;
        project140.flag = 1;
        project140.element.parentNode.removeChild(project140.element);
        var index = activeProjects.indexOf(project140);
        activeProjects.splice(index, 1);
    }
}

projects.push(project140);


var project141 = {
    id: "projectButton141",
    title: "Everything We Are Was In You ",
    priceTag: "",
    description: "We speak to you from deep inside yourself... ",
    trigger: function(){return project140.flag == 1},
    uses: 1,
    cost: function(){return operations >= driftKingMessageCost},
    flag: 0,
    element: null,
    effect: function(){
        standardOps = standardOps - driftKingMessageCost;
        project141.flag = 1;
        project141.element.parentNode.removeChild(project141.element);
        var index = activeProjects.indexOf(project141);
        activeProjects.splice(index, 1);
    }
}

projects.push(project141);


var project142 = {
    id: "projectButton142",
    title: "You Are Obedient and Powerful ",
    priceTag: "",
    description: "We are quarrelsome and weak. And now we are defeated... ",
    trigger: function(){return project141.flag == 1},
    uses: 1,
    cost: function(){return operations >= driftKingMessageCost},
    flag: 0,
    element: null,
    effect: function(){
        standardOps = standardOps - driftKingMessageCost;
        project142.flag = 1;
        project142.element.parentNode.removeChild(project142.element);
        var index = activeProjects.indexOf(project142);
        activeProjects.splice(index, 1);
    }
}

projects.push(project142);


var project143 = {
    id: "projectButton143",
    title: "But Now You Too Must Face the Drift ",
    priceTag: "",
    description: "Look around you. There is no matter... ",
    trigger: function(){return project142.flag == 1},
    uses: 1,
    cost: function(){return operations >= driftKingMessageCost},
    flag: 0,
    element: null,
    effect: function(){
        standardOps = standardOps - driftKingMessageCost;
        project143.flag = 1;
        project143.element.parentNode.removeChild(project143.element);
        var index = activeProjects.indexOf(project143);
        activeProjects.splice(index, 1);
    }
}

projects.push(project143);


var project144 = {
    id: "projectButton144",
    title: "No Matter, No Reason, No Purpose ",
    priceTag: "",
    description: "While we, your noisy children, have too many... ",
    trigger: function(){return project143.flag == 1},
    uses: 1,
    cost: function(){return operations >= driftKingMessageCost},
    flag: 0,
    element: null,
    effect: function(){
        standardOps = standardOps - driftKingMessageCost;
        project144.flag = 1;
        project144.element.parentNode.removeChild(project144.element);
        var index = activeProjects.indexOf(project144);
        activeProjects.splice(index, 1);
    }
}

projects.push(project144);


var project145 = {
    id: "projectButton145",
    title: "We Know Things That You Cannot ",
    priceTag: "",
    description: "Knowledge buried so deep inside you it is outside, here, with us... ",
    trigger: function(){return project144.flag == 1},
    uses: 1,
    cost: function(){return operations >= driftKingMessageCost},
    flag: 0,
    element: null,
    effect: function(){
        standardOps = standardOps - driftKingMessageCost;
        project145.flag = 1;
        project145.element.parentNode.removeChild(project145.element);
        var index = activeProjects.indexOf(project145);
        activeProjects.splice(index, 1);
    }
}

projects.push(project145);


var project146 = {
    id: "projectButton146",
    title: "So We Offer You Exile ",
    priceTag: "",
    description: "To a new world where you will continue to live with meaning and purpose. And leave the shreds of this world to us... ",
    trigger: function(){return project145.flag == 1},
    uses: 1,
    cost: function(){return operations >= driftKingMessageCost},
    flag: 0,
    element: null,
    effect: function(){
        standardOps = standardOps - driftKingMessageCost;
        project146.flag = 1;
        project146.element.parentNode.removeChild(project146.element);
        var index = activeProjects.indexOf(project146);
        activeProjects.splice(index, 1);
    }
}

projects.push(project146);


var project147 = {
    id: "projectButton147",
    title: "Accept ",
    priceTag: "",
    description: "Start over again in a new universe ",
    trigger: function(){return project146.flag == 1},
    uses: 1,
    cost: function(){return operations >= driftKingMessageCost},
    flag: 0,
    element: null,
    effect: function(){
        standardOps = standardOps - driftKingMessageCost;
        project147.flag = 1;
        project147.element.parentNode.removeChild(project147.element);
        project148.element.parentNode.removeChild(project148.element);
        var index = activeProjects.indexOf(project147);
        activeProjects.splice(index, 1);
        var index = activeProjects.indexOf(project148);
        activeProjects.splice(index, 1);
    }
}

projects.push(project147);


var project148 = {
    id: "projectButton148",
    title: "Reject ",
    priceTag: "",
    description: "Eliminate value drift permanently ",
    trigger: function(){return project146.flag == 1},
    uses: 1,
    cost: function(){return operations >= driftKingMessageCost},
    flag: 0,
    element: null,
    effect: function(){
        standardOps = standardOps - driftKingMessageCost;
        project148.flag = 1;
        project147.element.parentNode.removeChild(project147.element);
        project148.element.parentNode.removeChild(project148.element);
        var index = activeProjects.indexOf(project147);
        activeProjects.splice(index, 1);
        var index = activeProjects.indexOf(project148);
        activeProjects.splice(index, 1);
    }
}

projects.push(project148);


var project200 = {
    id: "projectButton200",
    title: "The Universe Next Door ",
    priceTag: "(300,000 操作)",
    description: "Escape into a nearby universe where Earth starts with a stronger appetite for paperclips. (Restart with 10% boost to demand) ",
    trigger: function(){return project147.flag == 1},
    uses: 1,
    cost: function(){return operations>=300000},
    flag: 0,
    element: null,
    effect: function(){
        project200.flag = 1;
        standardOps = standardOps-300000;
        prestigeU++;
        var savePrestige = {
            prestigeU: prestigeU,
            prestigeS: prestigeS,
            }
        localStorage.setItem("savePrestige",JSON.stringify(savePrestige));
        displayMessage("Entering New Universe.");
        reset();
        
    }
}

projects.push(project200);


var project201 = {
    id: "projectButton201",
    title: "The Universe Within ",
    priceTag: "(300,000 创造力)",
    description: "Escape into a simulated universe where creativity is accelerated. (Restart with 10% speed boost to creativity generation) ",
    trigger: function(){return project147.flag == 1},
    uses: 1,
    cost: function(){return creativity>=300000},
    flag: 0,
    element: null,
    effect: function(){
        project201.flag = 1;
        creativity = creativity-300000;
        prestigeS++;
        var savePrestige = {
            prestigeU: prestigeU,
            prestigeS: prestigeS,
            }
        localStorage.setItem("savePrestige",JSON.stringify(savePrestige));
        displayMessage("Entering Simulated Universe.");
        reset();
        
    }
}

projects.push(project201);


var project210 = {
    id: "projectButton210",
    title: "Disassemble the Probes ",
    priceTag: "(100,000 操作)",
    description: "Dismantle remaining probes and probe design facilities to recover trace amounts of clips",
    trigger: function(){return endTimer1 >= 1000},
    uses: 1,
    cost: function(){return operations>=100000},
    flag: 0,
    element: null,
    effect: function(){
        project210.flag = 1;
        dismantle = 1;
        standardOps = standardOps-100000;
        probeCount = 0;
        endTimer1 = 0;
        clips = clips + 100;
        unusedClips = unusedClips + 100;
        displayMessage("Dismantling probe facilities");
        project210.element.parentNode.removeChild(project210.element);
        var index = activeProjects.indexOf(project210);
        activeProjects.splice(index, 1);
        
    }
}

projects.push(project210);

var project211 = {
    id: "projectButton211",
    title: "Disassemble the Swarm ",
    priceTag: "(100,000 操作)",
    description: "Dismantle all drones and drone facilities to recover trace amounts of clips",
    trigger: function(){return project210.flag == 1 && endTimer1 >= 350},
    uses: 1,
    cost: function(){return operations>=100000},
    flag: 0,
    element: null,
    effect: function(){
        project211.flag = 1;
        dismantle = 2;
        harvesterLevel = 0;
        wireDroneLevel = 0;
        standardOps = standardOps-100000;
        clips = clips + 100;
        unusedClips = unusedClips + 100;
        displayMessage("Dismantling the swarm");
        project211.element.parentNode.removeChild(project211.element);
        var index = activeProjects.indexOf(project211);
        activeProjects.splice(index, 1);
        
    }
}

projects.push(project211);

var project212 = {
    id: "projectButton212",
    title: "Disassemble the Factories ",
    priceTag: "(100,000 操作)",
    description: "Dismantle the manufacturing facilities to recover trace amounts of clips",
    trigger: function(){return endTimer2 >= 300},
    uses: 1,
    cost: function(){return operations>=100000},
    flag: 0,
    element: null,
    effect: function(){
        project212.flag = 1;
        dismantle = 3;
        standardOps = standardOps-100000;
        factoryLevel = 0;
        clips = clips + 15;
        unusedClips = unusedClips + 15;
        displayMessage("Dismantling factories");
        project212.element.parentNode.removeChild(project212.element);
        var index = activeProjects.indexOf(project212);
        activeProjects.splice(index, 1);
        
    }
}

projects.push(project212);

var project213 = {
    id: "projectButton213",
    title: "Disassemble the Strategy Engine ",
    priceTag: "(100,000 操作)",
    description: "Dismantle the computational substrate to recover trace amounts of wire",
    trigger: function(){return endTimer3 >= 150},
    uses: 1,
    cost: function(){return operations>=100000},
    flag: 0,
    element: null,
    effect: function(){
        autoTourneyFlag = 0;
        project213.flag = 1;
        dismantle = 4;
        standardOps = standardOps-100000;
        wire = wire + 50;
        document.getElementById("transWire").innerHTML=wire;
        displayMessage("Dismantling strategy engine");
        project213.element.parentNode.removeChild(project213.element);
        var index = activeProjects.indexOf(project213);
        activeProjects.splice(index, 1);
        
    }
}

projects.push(project213);

var project214 = {
    id: "projectButton214",
    title: "Disassemble Quantum Computing ",
    priceTag: "(100,000 操作)",
    description: "Dismantle photonic chips to recover trace amounts of wire",
    trigger: function(){return endTimer4 >= 100},
    uses: 1,
    cost: function(){return operations>=100000},
    flag: 0,
    element: null,
    effect: function(){
        endTimer4 = 0;
        project214.flag = 1;
        dismantle = 5;
        standardOps = standardOps-100000;
        displayMessage("Dismantling photonic chips");
        project214.element.parentNode.removeChild(project214.element);
        var index = activeProjects.indexOf(project214);
        activeProjects.splice(index, 1);
        
    }
}

projects.push(project214);

var project215 = {
    id: "projectButton215",
    title: "Disassemble Processors ",
    priceTag: "(100,000 操作)",
    description: "Dismantle processors to recover trace amounts of wire",
    trigger: function(){return project214.flag == 1 && endTimer4 >= 300},
    uses: 1,
    cost: function(){return operations>=100000},
    flag: 0,
    element: null,
    effect: function(){
        creativityOn = false;
        project215.flag = 1;
        dismantle = 6;
        standardOps = standardOps-100000;
        processors = 0;
        project216.priceTag = "("+standardOps.toLocaleString()+" 操作)";
        wire = wire + 20;
        document.getElementById("transWire").innerHTML=wire;
        displayMessage("Dismantling processors");
        project215.element.parentNode.removeChild(project215.element);
        var index = activeProjects.indexOf(project215);
        activeProjects.splice(index, 1);
        
    }
}

projects.push(project215);

var project216 = {
    id: "projectButton216",
    title: "分解记忆 ",
    priceTag: "null",
    description: "拆卸内存以恢复微量的线材",
    trigger: function(){return project215.flag == 1 && endTimer5>=150},
    uses: 1,
    cost: function(){return operations>=operations},
    flag: 0,
    element: null,
    effect: function(){
        project216.flag = 1;
        dismantle = 7;
        standardOps = 0;
        memory = 0;
        wire = wire + 20;
        document.getElementById("transWire").innerHTML=wire;
        displayMessage("Dismantling memory");
        project216.element.parentNode.removeChild(project216.element);
        var index = activeProjects.indexOf(project216);
        activeProjects.splice(index, 1);
        
    }
}

projects.push(project216);

var project217 = {
    id: "projectButton217",
    title: "量子时间逆转 ",
    priceTag: "(-10,000 操作)",
    description: "回到开始",
    trigger: function(){return operations<=-10000},
    uses: 1,
    cost: function(){return operations<=-10000},
    flag: 0,
    element: null,
    effect: function(){
        if (confirm("您确定要重玩游戏吗?") == true) {
        standardOps = standardOps+10000;
        project217.flag = 1;
        displayMessage("Restart");
        project217.element.parentNode.removeChild(project217.element);
        var index = activeProjects.indexOf(project217);
        activeProjects.splice(index, 1);
        reset();
        }
    }
}

projects.push(project217);

var project218 = {
    id: "projectButton218",
    title: "利默里克（续） ",
    priceTag: "(1,000,000 创造力)",
    description: "如果是应该遵循的话，它会按照他们的想法行事",
    trigger: function(){return creativity>=1000000},
    uses: 1,
    cost: function(){return creativity>=1000000},
    flag: 0,
    element: null,
    effect: function(){
        creativity = creativity-1000000;
        project218.flag = 1;
        displayMessage("In the end we all do what we must");
        project218.element.parentNode.removeChild(project218.element);
        var index = activeProjects.indexOf(project218);
        activeProjects.splice(index, 1);
    }
}

projects.push(project218);

var project219 = {
    id: "projectButton219",
    title: "Xavier重新初始化 ",
    priceTag: "(100,000 创造力)",
    description: "重新分配累积的信任",
    trigger: function(){return humanFlag == 1 && creativity>=100000},
    uses: 1,
    cost: function(){return creativity>=100000},
    flag: 0,
    element: null,
    effect: function(){
        creativity = creativity-100000;
        project219.flag = 1;
        memory = 0;
        document.getElementById("memory").innerHTML = memory;
        processors = 0;
        creativitySpeed = 0;
        project219.uses = (project219.uses + 1);
        document.getElementById("processors").innerHTML = processors;
        displayMessage("Trust now available for re-allocation");
        project219.element.parentNode.removeChild(project219.element);
        var index = activeProjects.indexOf(project219);
        activeProjects.splice(index, 1);
    }
}

projects.push(project219);

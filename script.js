  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.scale(1.45,1.45);
  const startBtn = document.getElementById("start");
  const resetBtn = document.getElementById("reset");

  const mazeIcon = {
     draw: function (ctx) {
		ctx.strokeStyle = "#FFD166";
		ctx.fillStyle = "#e1f4f9";
		ctx.fillRect(0, 0, canvas.width, canvas.height); 
		ctx.lineWidth = 2;
		ctx.beginPath();
		ctx.moveTo(2, 2);
		ctx.lineTo(226, 2);
		ctx.moveTo(242, 2);
		ctx.lineTo(482, 2);
		ctx.moveTo(18, 18);
		ctx.lineTo(34, 18);
		ctx.moveTo(50, 18);
		ctx.lineTo(66, 18);
		ctx.lineTo(66,18);
		ctx.moveTo(98,18);
		ctx.lineTo(114,18);
		ctx.moveTo(130,18);
		ctx.lineTo(146,18);
		ctx.moveTo(162,18);
		ctx.lineTo(178,18);
		ctx.moveTo(226,18);
		ctx.lineTo(242,18);
		ctx.moveTo(258,18);
		ctx.lineTo(290,18);
		ctx.moveTo(322,18);
		ctx.lineTo(370,18);
		ctx.moveTo(386,18);
		ctx.lineTo(402,18);
		ctx.moveTo(418,18);
		ctx.lineTo(434,18);
		ctx.moveTo(18,34);
		ctx.lineTo(50,34);
		ctx.moveTo(82,34);
		ctx.lineTo(98,34);
		ctx.moveTo(130,34);
		ctx.lineTo(178,34);
		ctx.moveTo(194,34);
		ctx.lineTo(210,34);
		ctx.moveTo(258,34);
		ctx.lineTo(354,34);
		ctx.moveTo(370,34);
		ctx.lineTo(402,34);
		ctx.moveTo(450,34);
		ctx.lineTo(466,34);
		ctx.moveTo(2,50);
		ctx.lineTo(18,50);
		ctx.moveTo(34,50);
		ctx.lineTo(82,50);
		ctx.moveTo(98,50);
		ctx.lineTo(130,50);
		ctx.moveTo(210,50);
		ctx.lineTo(226,50);
		ctx.moveTo(242,50);
		ctx.lineTo(274,50);
		ctx.moveTo(322,50);
		ctx.lineTo(370,50);
		ctx.moveTo(386,50);
		ctx.lineTo(402,50);
		ctx.moveTo(418,50);
		ctx.lineTo(450,50);
		ctx.moveTo(466,50);
		ctx.lineTo(482,50);
		ctx.moveTo(34,66);
		ctx.lineTo(50,66);
		ctx.moveTo(82,66);
		ctx.lineTo(194,66);
		ctx.moveTo(210,66);
		ctx.lineTo(226,66);
		ctx.moveTo(242,66);
		ctx.lineTo(258,66);
		ctx.moveTo(274,66);
		ctx.lineTo(306,66);
		ctx.moveTo(338,66);
		ctx.lineTo(386,66);
		ctx.moveTo(402,66);
		ctx.lineTo(434,66);
		ctx.moveTo(450,66);
		ctx.lineTo(466,66);
		ctx.moveTo(18,82);
		ctx.lineTo(66,82);
		ctx.moveTo(98,82);
		ctx.lineTo(114,82);
		ctx.moveTo(130,82);
		ctx.lineTo(146,82);
		ctx.moveTo(162,82);
		ctx.lineTo(210,82);
		ctx.moveTo(258,82);
		ctx.lineTo(274,82);
		ctx.moveTo(290,82);
		ctx.lineTo(322,82);
		ctx.moveTo(354,82);
		ctx.lineTo(402,82);
		ctx.moveTo(434,82);
		ctx.lineTo(482,82);
		ctx.moveTo(34,98);
		ctx.lineTo(50,98);
		ctx.moveTo(82,98);
		ctx.lineTo(114,98);
		ctx.moveTo(146,98);
		ctx.lineTo(226,98);
		ctx.moveTo(338,98);
		ctx.lineTo(354,98);
		ctx.moveTo(370,98);
		ctx.lineTo(402,98);
		ctx.moveTo(418,98);
		ctx.lineTo(466,98);
		ctx.moveTo(2,114);
		ctx.lineTo(18,114);
		ctx.moveTo(50,114);
		ctx.lineTo(98,114);
		ctx.moveTo(114,114);
		ctx.lineTo(130,114);
		ctx.moveTo(162,114);
		ctx.lineTo(194,114);
		ctx.moveTo(258,114);
		ctx.lineTo(290,114);
		ctx.moveTo(322,114);
		ctx.lineTo(386,114);
		ctx.moveTo(402,114);
		ctx.lineTo(434,114);
		ctx.moveTo(466,114);
		ctx.lineTo(482,114);
		ctx.moveTo(18,130);
		ctx.lineTo(34,130);
		ctx.moveTo(66,130);
		ctx.lineTo(210,130);
		ctx.moveTo(242,130);
		ctx.lineTo(322,130);
		ctx.moveTo(354,130);
		ctx.lineTo(370,130);
		ctx.moveTo(450,130);
		ctx.lineTo(466,130);
		ctx.moveTo(2,146);
		ctx.lineTo(18,146);
		ctx.moveTo(34,146);
		ctx.lineTo(82,146);
		ctx.moveTo(98,146);
		ctx.lineTo(114,146);
		ctx.moveTo(130,146);
		ctx.lineTo(146,146);
		ctx.moveTo(210,146);
		ctx.lineTo(258,146);
		ctx.moveTo(306,146);
		ctx.lineTo(338,146);
		ctx.moveTo(354,146);
		ctx.lineTo(386,146);
		ctx.moveTo(434,146);
		ctx.lineTo(450,146);
		ctx.moveTo(466,146);
		ctx.lineTo(482,146);
		ctx.moveTo(18,162);
		ctx.lineTo(34,162);
		ctx.moveTo(50,162);
		ctx.lineTo(66,162);
		ctx.moveTo(82,162);
		ctx.lineTo(130,162);
		ctx.moveTo(146,162);
		ctx.lineTo(178,162);
		ctx.moveTo(226,162);
		ctx.lineTo(242,162);
		ctx.moveTo(258,162);
		ctx.lineTo(290,162);
		ctx.moveTo(354,162);
		ctx.lineTo(418,162);
		ctx.moveTo(434,162);
		ctx.lineTo(482,162);
		ctx.moveTo(34,178);
		ctx.lineTo(50,178);
		ctx.moveTo(66,178);
		ctx.lineTo(82,178);
		ctx.moveTo(98,178);
		ctx.lineTo(114,178);
		ctx.moveTo(130,178);
		ctx.lineTo(146,178);
		ctx.moveTo(178,178);
		ctx.lineTo(194,178);
		ctx.moveTo(242,178);
		ctx.lineTo(258,178);
		ctx.moveTo(290,178);
		ctx.lineTo(306,178);
		ctx.moveTo(338,178);
		ctx.lineTo(370,178);
		ctx.moveTo(434,178);
		ctx.lineTo(466,178);
		ctx.moveTo(114,194);
		ctx.lineTo(130,194);
		ctx.moveTo(146,194);
		ctx.lineTo(178,194);
		ctx.moveTo(210,194);
		ctx.lineTo(226,194);
		ctx.moveTo(242,194);
		ctx.lineTo(258,194);
		ctx.moveTo(274,194);
		ctx.lineTo(290,194);
		ctx.moveTo(306,194);
		ctx.lineTo(322,194);
		ctx.moveTo(370,194);
		ctx.lineTo(418,194);
		ctx.moveTo(450,194);
		ctx.lineTo(482,194);
		ctx.moveTo(34,210);
		ctx.lineTo(98,210);
		ctx.moveTo(130,210);
		ctx.lineTo(146,210);
		ctx.moveTo(162,210);
		ctx.lineTo(194,210);
		ctx.moveTo(226,210);
		ctx.lineTo(242,210);
		ctx.moveTo(258,210);
		ctx.lineTo(274,210);
		ctx.moveTo(306,210);
		ctx.lineTo(338,210);
		ctx.moveTo(386,210);
		ctx.lineTo(402,210);
		ctx.moveTo(418,210);
		ctx.lineTo(434,210);
		ctx.moveTo(450,210);
		ctx.lineTo(466,210);
		ctx.moveTo(2,226);
		ctx.lineTo(34,226);
		ctx.moveTo(82,226);
		ctx.lineTo(114,226);
		ctx.moveTo(178,226);
		ctx.lineTo(226,226);
		ctx.moveTo(242,226);
		ctx.lineTo(258,226);
		ctx.moveTo(274,226);
		ctx.lineTo(290,226);
		ctx.moveTo(306,226);
		ctx.lineTo(386,226);
		ctx.moveTo(402,226);
		ctx.lineTo(418,226);
		ctx.moveTo(434,226);
		ctx.lineTo(450,226);
		ctx.moveTo(466,226);
		ctx.lineTo(482,226);
		ctx.moveTo(18,242);
		ctx.lineTo(98,242);
		ctx.moveTo(114,242);
		ctx.lineTo(130,242);
		ctx.moveTo(146,242);
		ctx.lineTo(178,242);
		ctx.moveTo(194,242);
		ctx.lineTo(210,242);
		ctx.moveTo(258,242);
		ctx.lineTo(274,242);
		ctx.moveTo(290,242);
		ctx.lineTo(338,242);
		ctx.moveTo(434,242);
		ctx.lineTo(450,242);
		ctx.moveTo(2,258);
		ctx.lineTo(50,258);
		ctx.moveTo(130,258);
		ctx.lineTo(146,258);
		ctx.moveTo(162,258);
		ctx.lineTo(194,258);
		ctx.moveTo(274,258);
		ctx.lineTo(306,258);
		ctx.moveTo(338,258);
		ctx.lineTo(354,258);
		ctx.moveTo(418,258);
		ctx.lineTo(434,258);
		ctx.moveTo(450,258);
		ctx.lineTo(466,258);
		ctx.moveTo(2,274);
		ctx.lineTo(34,274);
		ctx.moveTo(66,274);
		ctx.lineTo(82,274);
		ctx.moveTo(114,274);
		ctx.lineTo(162,274);
		ctx.moveTo(178,274);
		ctx.lineTo(210,274);
		ctx.moveTo(226,274);
		ctx.lineTo(258,274);
		ctx.moveTo(274,274);
		ctx.lineTo(306,274);
		ctx.moveTo(354,274);
		ctx.lineTo(370,274);
		ctx.moveTo(386,274);
		ctx.lineTo(434,274);
		ctx.moveTo(50,290);
		ctx.lineTo(146,290);
		ctx.moveTo(162,290);
		ctx.lineTo(194,290);
		ctx.moveTo(210,290);
		ctx.lineTo(226,290);
		ctx.moveTo(274,290);
		ctx.lineTo(290,290);
		ctx.moveTo(370,290);
		ctx.lineTo(418,290);
		ctx.moveTo(450,290);
		ctx.lineTo(482,290);
		ctx.moveTo(18,306);
		ctx.lineTo(98,306);
		ctx.moveTo(130,306);
		ctx.lineTo(146,306);
		ctx.moveTo(162,306);
		ctx.lineTo(210,306);
		ctx.moveTo(226,306);
		ctx.lineTo(290,306);
		ctx.moveTo(370,306);
		ctx.lineTo(402,306);
		ctx.moveTo(2,322);
		ctx.lineTo(34,322);
		ctx.moveTo(130,322);
		ctx.lineTo(178,322);
		ctx.moveTo(210,322);
		ctx.lineTo(226,322);
		ctx.moveTo(242,322);
		ctx.lineTo(306,322);
		ctx.moveTo(322,322);
		ctx.lineTo(338,322);
		ctx.moveTo(434,322);
		ctx.lineTo(450,322);
		ctx.moveTo(2,338);
		ctx.lineTo(18,338);
		ctx.moveTo(34,338);
		ctx.lineTo(50,338);
		ctx.moveTo(66,338);
		ctx.lineTo(82,338);
		ctx.moveTo(146,338);
		ctx.lineTo(210,338);
		ctx.moveTo(242,338);
		ctx.lineTo(274,338);
		ctx.moveTo(306,338);
		ctx.lineTo(354,338);
		ctx.moveTo(386,338);
		ctx.lineTo(418,338);
		ctx.moveTo(450,338);
		ctx.lineTo(466,338);
		ctx.moveTo(18,354);
		ctx.lineTo(98,354);
		ctx.moveTo(130,354);
		ctx.lineTo(162,354);
		ctx.moveTo(178,354);
		ctx.lineTo(226,354);
		ctx.moveTo(290,354);
		ctx.lineTo(306,354);
		ctx.moveTo(322,354);
		ctx.lineTo(370,354);
		ctx.moveTo(386,354);
		ctx.lineTo(402,354);
		ctx.moveTo(466,354);
		ctx.lineTo(482,354);
		ctx.moveTo(18,370);
		ctx.lineTo(66,370);
		ctx.moveTo(98,370);
		ctx.lineTo(130,370);
		ctx.moveTo(162,370);
		ctx.lineTo(178,370);
		ctx.moveTo(258,370);
		ctx.lineTo(322,370);
		ctx.moveTo(338,370);
		ctx.lineTo(354,370);
		ctx.moveTo(386,370);
		ctx.lineTo(450,370);
		ctx.moveTo(34,386);
		ctx.lineTo(82,386);
		ctx.moveTo(146,386);
		ctx.lineTo(194,386);
		ctx.moveTo(210,386);
		ctx.lineTo(242,386);
		ctx.moveTo(290,386);
		ctx.lineTo(306,386);
		ctx.moveTo(322,386);
		ctx.lineTo(338,386);
		ctx.moveTo(370,386);
		ctx.lineTo(418,386);
		ctx.moveTo(50,402);
		ctx.lineTo(82,402);
		ctx.moveTo(98,402);
		ctx.lineTo(114,402);
		ctx.moveTo(130,402);
		ctx.lineTo(162,402);
		ctx.moveTo(194,402);
		ctx.lineTo(226,402);
		ctx.moveTo(242,402);
		ctx.lineTo(258,402);
		ctx.moveTo(274,402);
		ctx.lineTo(290,402);
		ctx.moveTo(306,402);
		ctx.lineTo(338,402);
		ctx.moveTo(354,402);
		ctx.lineTo(386,402);
		ctx.moveTo(402,402);
		ctx.lineTo(434,402);
		ctx.moveTo(450,402);
		ctx.lineTo(466,402);
		ctx.moveTo(2,418);
		ctx.lineTo(18,418);
		ctx.moveTo(34,418);
		ctx.lineTo(50,418);
		ctx.moveTo(114,418);
		ctx.lineTo(130,418);
		ctx.moveTo(178,418);
		ctx.lineTo(210,418);
		ctx.moveTo(258,418);
		ctx.lineTo(274,418);
		ctx.moveTo(290,418);
		ctx.lineTo(338,418);
		ctx.moveTo(370,418);
		ctx.lineTo(402,418);
		ctx.moveTo(434,418);
		ctx.lineTo(450,418);
		ctx.moveTo(466,418);
		ctx.lineTo(482,418);
		ctx.moveTo(18,434);
		ctx.lineTo(34,434);
		ctx.moveTo(50,434);
		ctx.lineTo(114,434);
		ctx.moveTo(130,434);
		ctx.lineTo(194,434);
		ctx.moveTo(210,434);
		ctx.lineTo(242,434);
		ctx.moveTo(258,434);
		ctx.lineTo(290,434);
		ctx.moveTo(306,434);
		ctx.lineTo(354,434);
		ctx.moveTo(370,434);
		ctx.lineTo(386,434);
		ctx.moveTo(450,434);
		ctx.lineTo(466,434);
		ctx.moveTo(34,450);
		ctx.lineTo(50,450);
		ctx.moveTo(66,450);
		ctx.lineTo(82,450);
		ctx.moveTo(114,450);
		ctx.lineTo(146,450);
		ctx.moveTo(162,450);
		ctx.lineTo(210,450);
		ctx.moveTo(226,450);
		ctx.lineTo(274,450);
		ctx.moveTo(290,450);
		ctx.lineTo(306,450);
		ctx.moveTo(322,450);
		ctx.lineTo(386,450);
		ctx.moveTo(418,450);
		ctx.lineTo(482,450);
		ctx.moveTo(2,466);
		ctx.lineTo(34,466);
		ctx.moveTo(98,466);
		ctx.lineTo(114,466);
		ctx.moveTo(146,466);
		ctx.lineTo(194,466);
		ctx.moveTo(242,466);
		ctx.lineTo(258,466);
		ctx.moveTo(290,466);
		ctx.lineTo(322,466);
		ctx.moveTo(402,466);
		ctx.lineTo(466,466);
		ctx.moveTo(2,482);
		ctx.lineTo(242,482);
		ctx.moveTo(258,482);
		ctx.lineTo(482,482);
		ctx.moveTo(2,2);
		ctx.lineTo(2,482);
		ctx.moveTo(18,34);
		ctx.lineTo(18,50);
		ctx.moveTo(18,66);
		ctx.lineTo(18,98);
		ctx.moveTo(18,130);
		ctx.lineTo(18,146);
		ctx.moveTo(18,162);
		ctx.lineTo(18,210);
		ctx.moveTo(18,290);
		ctx.lineTo(18,306);
		ctx.moveTo(18,354);
		ctx.lineTo(18,402);
		ctx.moveTo(18,434);
		ctx.lineTo(18,450);
		ctx.moveTo(34,18);
		ctx.lineTo(34,34);
		ctx.moveTo(34,50);
		ctx.lineTo(34,66);
		ctx.moveTo(34,98);
		ctx.lineTo(34,130);
		ctx.moveTo(34,146);
		ctx.lineTo(34,162);
		ctx.moveTo(34,178);
		ctx.lineTo(34,210);
		ctx.moveTo(34,274);
		ctx.lineTo(34,290);
		ctx.moveTo(34,386);
		ctx.lineTo(34,466);
		ctx.moveTo(50,114);
		ctx.lineTo(50,146);
		ctx.moveTo(50,162);
		ctx.lineTo(50,194);
		ctx.moveTo(50,210);
		ctx.lineTo(50,242);
		ctx.moveTo(50,274);
		ctx.lineTo(50,290);
		ctx.moveTo(50,322);
		ctx.lineTo(50,354);
		ctx.moveTo(50,466);
		ctx.lineTo(50,482);
		ctx.moveTo(66,18);
		ctx.lineTo(66,114);
		ctx.moveTo(66,178);
		ctx.lineTo(66,226);
		ctx.moveTo(66,242);
		ctx.lineTo(66,258);
		ctx.moveTo(66,306);
		ctx.lineTo(66,338);
		ctx.moveTo(66,418);
		ctx.lineTo(66,434);
		ctx.moveTo(66,450);
		ctx.lineTo(66,466);
		ctx.moveTo(82,2);
		ctx.lineTo(82,34);
		ctx.moveTo(82,50);
		ctx.lineTo(82,98);
		ctx.moveTo(82,146);
		ctx.lineTo(82,194);
		ctx.moveTo(82,258);
		ctx.lineTo(82,290);
		ctx.moveTo(82,322);
		ctx.lineTo(82,338);
		ctx.moveTo(82,354);
		ctx.lineTo(82,418);
		ctx.moveTo(82,450);
		ctx.lineTo(82,482);
		ctx.moveTo(98,114);
		ctx.lineTo(98,130);
		ctx.moveTo(98,178);
		ctx.lineTo(98,210);
		ctx.moveTo(98,242);
		ctx.lineTo(98,274);
		ctx.moveTo(98,306);
		ctx.lineTo(98,354);
		ctx.moveTo(98,370);
		ctx.lineTo(98,418);
		ctx.moveTo(98,434);
		ctx.lineTo(98,466);
		ctx.moveTo(114,18);
		ctx.lineTo(114,50);
		ctx.moveTo(114,82);
		ctx.lineTo(114,114);
		ctx.moveTo(114,146);
		ctx.lineTo(114,162);
		ctx.moveTo(114,194);
		ctx.lineTo(114,354);
		ctx.moveTo(114,386);
		ctx.lineTo(114,402);
		ctx.moveTo(114,418);
		ctx.lineTo(114,434);
		ctx.moveTo(114,450);
		ctx.lineTo(114,466);
		ctx.moveTo(130,34);
		ctx.lineTo(130,50);
		ctx.moveTo(130,66);
		ctx.lineTo(130,98);
		ctx.moveTo(130,178);
		ctx.lineTo(130,194);
		ctx.moveTo(130,210);
		ctx.lineTo(130,226);
		ctx.moveTo(130,322);
		ctx.lineTo(130,402);
		ctx.moveTo(130,466);
		ctx.lineTo(130,482);
		ctx.moveTo(146,18);
		ctx.lineTo(146,34);
		ctx.moveTo(146,50);
		ctx.lineTo(146,66);
		ctx.moveTo(146,98);
		ctx.lineTo(146,130);
		ctx.moveTo(146,146);
		ctx.lineTo(146,178);
		ctx.moveTo(146,194);
		ctx.lineTo(146,258);
		ctx.moveTo(146,306);
		ctx.lineTo(146,322);
		ctx.moveTo(146,370);
		ctx.lineTo(146,386);
		ctx.moveTo(146,418);
		ctx.lineTo(146,466);
		ctx.moveTo(162,2);
		ctx.lineTo(162,18);
		ctx.moveTo(162,34);
		ctx.lineTo(162,50);
		ctx.moveTo(162,130);
		ctx.lineTo(162,146);
		ctx.moveTo(162,178);
		ctx.lineTo(162,194);
		ctx.moveTo(162,210);
		ctx.lineTo(162,242);
		ctx.moveTo(162,258);
		ctx.lineTo(162,290);
		ctx.moveTo(162,338);
		ctx.lineTo(162,370);
		ctx.moveTo(162,402);
		ctx.lineTo(162,434);
		ctx.moveTo(178,34);
		ctx.lineTo(178,66);
		ctx.moveTo(178,130);
		ctx.lineTo(178,178);
		ctx.moveTo(178,386);
		ctx.lineTo(178,418);
		ctx.moveTo(194,18);
		ctx.lineTo(194,50);
		ctx.moveTo(194,66);
		ctx.lineTo(194,82);
		ctx.moveTo(194,98);
		ctx.lineTo(194,114);
		ctx.moveTo(194,146);
		ctx.lineTo(194,210);
		ctx.moveTo(194,226);
		ctx.lineTo(194,258);
		ctx.moveTo(194,274);
		ctx.lineTo(194,290);
		ctx.moveTo(194,322);
		ctx.lineTo(194,338);
		ctx.moveTo(194,354);
		ctx.lineTo(194,402);
		ctx.moveTo(194,434);
		ctx.lineTo(194,450);
		ctx.moveTo(210,2);
		ctx.lineTo(210,34);
		ctx.moveTo(210,114);
		ctx.lineTo(210,194);
		ctx.moveTo(210,210);
		ctx.lineTo(210,226);
		ctx.moveTo(210,258);
		ctx.lineTo(210,274);
		ctx.moveTo(210,306);
		ctx.lineTo(210,338);
		ctx.moveTo(210,370);
		ctx.lineTo(210,386);
		ctx.moveTo(210,418);
		ctx.lineTo(210,434);
		ctx.moveTo(210,450);
		ctx.lineTo(210,482);
		ctx.moveTo(226,18);
		ctx.lineTo(226,50);
		ctx.moveTo(226,66);
		ctx.lineTo(226,114);
		ctx.moveTo(226,130);
		ctx.lineTo(226,146);
		ctx.moveTo(226,178);
		ctx.lineTo(226,210);
		ctx.moveTo(226,226);
		ctx.lineTo(226,274);
		ctx.moveTo(226,290);
		ctx.lineTo(226,322);
		ctx.moveTo(226,338);
		ctx.lineTo(226,370);
		ctx.moveTo(226,402);
		ctx.lineTo(226,418);
		ctx.moveTo(226,434);
		ctx.lineTo(226,466);
		ctx.moveTo(242,18);
		ctx.lineTo(242,50);
		ctx.moveTo(242,82);
		ctx.lineTo(242,130);
		ctx.moveTo(242,162);
		ctx.lineTo(242,178);
		ctx.moveTo(242,194);
		ctx.lineTo(242,258);
		ctx.moveTo(242,274);
		ctx.lineTo(242,290);
		ctx.moveTo(242,322);
		ctx.lineTo(242,434);
		ctx.moveTo(242,466);
		ctx.lineTo(242,482);
		ctx.moveTo(258,2);
		ctx.lineTo(258,18);
		ctx.moveTo(258,66);
		ctx.lineTo(258,114);
		ctx.moveTo(258,146);
		ctx.lineTo(258,162);
		ctx.moveTo(258,178);
		ctx.lineTo(258,194);
		ctx.moveTo(258,258);
		ctx.lineTo(258,306);
		ctx.moveTo(258,354);
		ctx.lineTo(258,370);
		ctx.moveTo(258,386);
		ctx.lineTo(258,402);
		ctx.moveTo(258,418);
		ctx.lineTo(258,434);
		ctx.moveTo(274,50);
		ctx.lineTo(274,66);
		ctx.moveTo(274,82);
		ctx.lineTo(274,98);
		ctx.moveTo(274,130);
		ctx.lineTo(274,146);
		ctx.moveTo(274,178);
		ctx.lineTo(274,226);
		ctx.moveTo(274,242);
		ctx.lineTo(274,274);
		ctx.moveTo(274,338);
		ctx.lineTo(274,418);
		ctx.moveTo(274,450);
		ctx.lineTo(274,482);
		ctx.moveTo(290,34);
		ctx.lineTo(290,50);
		ctx.moveTo(290,82);
		ctx.lineTo(290,114);
		ctx.moveTo(290,130);
		ctx.lineTo(290,162);
		ctx.moveTo(290,178);
		ctx.lineTo(290,194);
		ctx.moveTo(290,210);
		ctx.lineTo(290,242);
		ctx.moveTo(290,290);
		ctx.lineTo(290,306);
		ctx.moveTo(290,338);
		ctx.lineTo(290,354);
		ctx.moveTo(290,386);
		ctx.lineTo(290,402);
		ctx.moveTo(290,434);
		ctx.lineTo(290,450);
		ctx.moveTo(306,2);
		ctx.lineTo(306,66);
		ctx.moveTo(306,98);
		ctx.lineTo(306,130);
		ctx.moveTo(306,146);
		ctx.lineTo(306,178);
		ctx.moveTo(306,194);
		ctx.lineTo(306,210);
		ctx.moveTo(306,274);
		ctx.lineTo(306,338);
		ctx.moveTo(306,354);
		ctx.lineTo(306,370);
		ctx.moveTo(306,418);
		ctx.lineTo(306,434);
		ctx.moveTo(306,450);
		ctx.lineTo(306,466);
		ctx.moveTo(322,50);
		ctx.lineTo(322,114);
		ctx.moveTo(322,162);
		ctx.lineTo(322,194);
		ctx.moveTo(322,242);
		ctx.lineTo(322,322);
		ctx.moveTo(322,370);
		ctx.lineTo(322,386);
		ctx.moveTo(322,434);
		ctx.lineTo(322,450);
		ctx.moveTo(338,66);
		ctx.lineTo(338,98);
		ctx.moveTo(338,114);
		ctx.lineTo(338,210);
		ctx.moveTo(338,258);
		ctx.lineTo(338,322);
		ctx.moveTo(338,386);
		ctx.lineTo(338,402);
		ctx.moveTo(338,450);
		ctx.lineTo(338,466);
		ctx.moveTo(354,82);
		ctx.lineTo(354,98);
		ctx.moveTo(354,130);
		ctx.lineTo(354,146);
		ctx.moveTo(354,194);
		ctx.lineTo(354,258);
		ctx.moveTo(354,274);
		ctx.lineTo(354,338);
		ctx.moveTo(354,370);
		ctx.lineTo(354,434);
		ctx.moveTo(354,466);
		ctx.lineTo(354,482);
		ctx.moveTo(370,18);
		ctx.lineTo(370,50);
		ctx.moveTo(370,98);
		ctx.lineTo(370,114);
		ctx.moveTo(370,210);
		ctx.lineTo(370,226);
		ctx.moveTo(370,242);
		ctx.lineTo(370,290);
		ctx.moveTo(370,322);
		ctx.lineTo(370,386);
		ctx.moveTo(370,418);
		ctx.lineTo(370,434);
		ctx.moveTo(370,450);
		ctx.lineTo(370,466);
		ctx.moveTo(386,114);
		ctx.lineTo(386,130);
		ctx.moveTo(386,146);
		ctx.lineTo(386,194);
		ctx.moveTo(386,226);
		ctx.lineTo(386,274);
		ctx.moveTo(386,306);
		ctx.lineTo(386,338);
		ctx.moveTo(386,354);
		ctx.lineTo(386,370);
		ctx.moveTo(386,450);
		ctx.lineTo(386,482);
		ctx.moveTo(402,2);
		ctx.lineTo(402,18);
		ctx.moveTo(402,34);
		ctx.lineTo(402,82);
		ctx.moveTo(402,98);
		ctx.lineTo(402,146);
		ctx.moveTo(402,162);
		ctx.lineTo(402,178);
		ctx.moveTo(402,194);
		ctx.lineTo(402,258);
		ctx.moveTo(402,306);
		ctx.lineTo(402,322);
		ctx.moveTo(402,386);
		ctx.lineTo(402,466);
		ctx.moveTo(418,34);
		ctx.lineTo(418,50);
		ctx.moveTo(418,66);
		ctx.lineTo(418,82);
		ctx.moveTo(418,130);
		ctx.lineTo(418,162);
		ctx.moveTo(418,178);
		ctx.lineTo(418,194);
		ctx.moveTo(418,226);
		ctx.lineTo(418,274);
		ctx.moveTo(418,290);
		ctx.lineTo(418,370);
		ctx.moveTo(418,418);
		ctx.lineTo(418,450);
		ctx.moveTo(434,2);
		ctx.lineTo(434,34);
		ctx.moveTo(434,82);
		ctx.lineTo(434,98);
		ctx.moveTo(434,114);
		ctx.lineTo(434,146);
		ctx.moveTo(434,162);
		ctx.lineTo(434,210);
		ctx.moveTo(434,226);
		ctx.lineTo(434,242);
		ctx.moveTo(434,274);
		ctx.lineTo(434,354);
		ctx.moveTo(434,370);
		ctx.lineTo(434,402);
		ctx.moveTo(434,418);
		ctx.lineTo(434,434);
		ctx.moveTo(450,18);
		ctx.lineTo(450,82);
		ctx.moveTo(450,98);
		ctx.lineTo(450,130);
		ctx.moveTo(450,194);
		ctx.lineTo(450,226);
		ctx.moveTo(450,258);
		ctx.lineTo(450,274);
		ctx.moveTo(450,290);
		ctx.lineTo(450,322);
		ctx.moveTo(450,338);
		ctx.lineTo(450,418);
		ctx.moveTo(466,18);
		ctx.lineTo(466,34);
		ctx.moveTo(466,226);
		ctx.lineTo(466,258);
		ctx.moveTo(466,274);
		ctx.lineTo(466,290);
		ctx.moveTo(466,306);
		ctx.lineTo(466,338);
		ctx.moveTo(466,354);
		ctx.lineTo(466,386);
		ctx.moveTo(466,418);
		ctx.lineTo(466,434);
		ctx.moveTo(482,2);
		ctx.lineTo(482,482);
	ctx.stroke(); 
	}
  };

  mazeIcon.draw(ctx);
const path = [
    { x: 234, y: 2 }, { x: 234, y: 10 }, { x: 218, y: 10 }, { x: 218, y: 42 },
    { x: 202, y: 42 }, { x: 202, y: 58 }, { x: 234, y: 58 }, { x: 234, y: 74 },
    { x: 250, y: 74 }, { x: 250, y: 122 }, { x: 298, y: 122 }, { x: 298, y: 90 },
    { x: 314, y: 90 }, { x: 314, y: 122 }, { x: 330, y: 122 }, { x: 330, y: 138 },
    { x: 298, y: 138 }, { x: 298, y: 170 }, { x: 266, y: 170 }, { x: 266, y: 202 },
    { x: 250, y: 202 }, { x: 250, y: 218 }, { x: 266, y: 218 }, { x: 266, y: 234 },
    { x: 250, y: 234 }, { x: 250, y: 250 }, { x: 266, y: 250 }, { x: 266, y: 282 },
    { x: 298, y: 282 }, { x: 298, y: 314 }, { x: 234, y: 314 }, { x: 234, y: 330 },
    { x: 218, y: 330 }, { x: 218, y: 346 }, { x: 170, y: 346 }, { x: 170, y: 362 },
    { x: 186, y: 362 }, { x: 186, y: 378 }, { x: 154, y: 378 }, { x: 154, y: 362 },
    { x: 138, y: 362 }, { x: 138, y: 394 }, { x: 170, y: 394 }, { x: 170, y: 426 },
    { x: 202, y: 426 }, { x: 202, y: 442 }, { x: 218, y: 442 }, { x: 218, y: 474 },
    { x: 234, y: 474 }, { x: 234, y: 458 }, { x: 266, y: 458 }, { x: 266, y: 474 },
    { x: 250, y: 474 }, { x: 250, y: 482 }
];
let index = 0;
let drawingPath = false;
let pathIndex = 0;
let animationRunning = false;

const movingObject = {
    x: path[0].x,
    y: path[0].y,
    size: 13
};
function drawObject() {
    ctx.fillStyle = "#FFD166";
    ctx.fillRect(movingObject.x - 5, movingObject.y - 5, movingObject.size, movingObject.size);
}
function drawSolutionPath(upToIndex) {
    ctx.strokeStyle = "#FFD166";
    ctx.lineWidth = 13;
    ctx.beginPath();
    ctx.moveTo(path[0].x, path[0].y);

    for (let i = 1; i <= upToIndex; i++) {
        ctx.lineTo(path[i].x, path[i].y);
    }

    ctx.stroke();
}
function animate() {
    if (!animationRunning) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    mazeIcon.draw(ctx);
    drawSolutionPath(drawingPath ? pathIndex : 0);
    drawObject();

    if (!drawingPath) {
        if (index < path.length - 1) {
            index++;
            movingObject.x = path[index].x;
            movingObject.y = path[index].y;
        } else {
            drawingPath = true;
        }
    } else {
        if (pathIndex < path.length - 1) {
            pathIndex++;
        } else {
            return;
        }
    }

    setTimeout(() => {
        requestAnimationFrame(animate);
    }, 210);
}
startBtn.addEventListener("click", () => {
    if (!animationRunning) {
        animationRunning = true;
        animate();
    }
});
resetBtn.addEventListener("click", () => {
    animationRunning = false;
    index = 0;
    pathIndex = 0;
    drawingPath = false;
    movingObject.x = path[0].x;
    movingObject.y = path[0].y;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    mazeIcon.draw(ctx);
});

const infoBtn = document.getElementById("info");

infoBtn.addEventListener("click", () => {
    Swal.fire({
	  icon: "info",
	  iconColor: "#E6A700",
	  title: "Informations",
	  theme: 'borderless',
	  confirmButtonColor: "#D0752E",
	  text: "Rok Mrhar, 4.RA",
	  heightAuto: true,
	  footer: '<a target="_blank" href="https://github.com/rokmrhar/maze">SEE MORE ABOUT THIS PROJECT</a>'
	  
	});
});

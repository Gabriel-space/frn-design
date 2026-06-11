const nomes = {
  box4: "Janela 4 folhas",
  box2: "Box deslizante 2 peças",
  porta1: "Porta 1 folha",
  box2frontal: "Box frontal 2 peças",
};

function l(x1, y1, x2, y2, w = 2, color = "#999") {
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}" stroke-linecap="square"/>`;
}

function r(x, y, w, h, sw = 2, color = "#999", fill = "none") {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" stroke="${color}" stroke-width="${sw}"/>`;
}

function txt(x, y, value, size = 26, color = "#b91c1c", rotate = 0) {
  const tr = rotate ? `transform="rotate(${rotate} ${x} ${y})"` : "";
  return `<text x="${x}" y="${y}" ${tr} font-size="${size}" font-weight="700" text-anchor="middle" dominant-baseline="middle" fill="${color}">${value}</text>`;
}

function oneX(x, y) {
  return txt(x, y, "1 X", 30, "#15803d");
}

function dot(x, y) {
  return `<circle cx="${x}" cy="${y}" r="5" fill="#999"/>`;
}

function holePair(x, y) {
  return `${dot(x, y)}${dot(x, y + 18)}`;
}

function dashV(x, y1, y2) {
  return `<line x1="${x}" y1="${y1}" x2="${x}" y2="${y2}" stroke="#999" stroke-width="2" stroke-dasharray="8 6"/>`;
}

function dimH(x1, x2, y, label) {
  return `
    ${l(x1, y, x2, y, 2, "#111")}
    ${l(x1, y - 12, x1, y + 12, 2, "#111")}
    ${l(x2, y - 12, x2, y + 12, 2, "#111")}
    ${txt((x1 + x2) / 2, y + 28, label, 24, "#b91c1c")}
  `;
}

function dimHUpper(x1, x2, y, label) {
  return `
    ${l(x1, y, x2, y, 2, "#111")}
    ${l(x1, y - 12, x1, y + 12, 2, "#111")}
    ${l(x2, y - 12, x2, y + 12, 2, "#111")}
    ${txt((x1 + x2) / 2, y - 24, label, 24, "#111")}
  `;
}

function dimV(x, y1, y2, label, side = "left") {
  const tx = side === "left" ? x - 28 : x + 28;

  return `
    ${l(x, y1, x, y2, 2, "#111")}
    ${l(x - 10, y1, x + 10, y1, 2, "#111")}
    ${l(x - 10, y2, x + 10, y2, 2, "#111")}
    ${txt(tx, (y1 + y2) / 2, label, 24, "#b91c1c", -90)}
  `;
}

function medidaInterna(x, y1, y2, label) {
  return `
    ${l(x, y1, x, y2, 2, "#999")}
    ${l(x - 10, y1, x + 10, y1, 2, "#999")}
    ${l(x - 10, y2, x + 10, y2, 2, "#999")}
    ${txt(x + 28, (y1 + y2) / 2, label, 24, "#7e22ce", -90)}
  `;
}

function box4(ls, li, ae, ad) {
  const yCentro = 115;
  const hCentro = 300;

  const yLateral = 145;
  const hLateral = 270;

  const x1 = 80;
  const w1 = 170;

  const x2 = 250;
  const w2 = 190;

  const x3 = 440;
  const w3 = 190;

  const x4 = 630;
  const w4 = 170;

  return `
    ${dimHUpper(x1, x4 + w4, 65, ls)}
    ${dimV(45, yLateral, yLateral + hLateral, ae, "left")}
    ${dimV(835, yLateral, yLateral + hLateral, ad, "right")}

    ${r(x1, yLateral, w1, hLateral)}
    ${r(x2, yCentro, w2, hCentro)}
    ${r(x3, yCentro, w3, hCentro)}
    ${r(x4, yLateral, w4, hLateral)}

    ${dashV(x1 + w3 - 8, yLateral, yLateral + hLateral)}
    ${dashV(x4 + - 12, yLateral, yLateral + hLateral)}

    ${l(x2, yCentro, x2, yCentro + hCentro, 3, "#999")}
    ${l(x3, yCentro, x3, yCentro + hCentro, 3, "#999")}
    ${l(440, yCentro, 440, yCentro + hCentro, 2, "#999")}

    ${dot(x2 + 15, yCentro + 15)}
    ${dot(x2 + w2 - 15, yCentro + 15)}
    ${dot(x3 + 15, yCentro + 15)}
    ${dot(x3 + w3 - 15, yCentro + 15)}

    ${holePair(430, yCentro + 145)}
    ${holePair(450, yCentro + 145)}

    ${oneX(x1 + w1 / 2, yLateral + 75)}
    ${oneX(x2 + w2 / 2, yCentro + 75)}
    ${oneX(x3 + w3 / 2, yCentro + 75)}
    ${oneX(x4 + w4 / 2, yLateral + 75)}

    ${dimH(x1, x4 + w1, yLateral + hLateral + 35, li)}
  `;
}

function box2(ls, li, ae, ad) {
  const y = 100;
  const h = 320;

  const x1 = 210;
  const w1 = 280;

  const x2 = 490;
  const w2 = 260;

  return `
    ${dimHUpper(x1, x2 + w2, 55, ls)}
    ${dimV(155, y, y + h, ae, "left")}
    ${dimV(795, y, y + h, ad, "right")}

    ${r(x1, y, w1, h)}
    ${r(x2, y, w2, h)}

    ${dashV(x2 - 8, y, y + h)}
    ${l(x2, y, x2, y + h, 3, "#999")}

    ${dot(x1 + 15, y + 15)}
    ${dot(x1 + w1 - 15, y + 15)}
    ${holePair(x1 + 12, y + 135)}

    ${oneX(x1 + w1 / 2, y + 85)}
    ${oneX(x2 + w2 / 2, y + 85)}

    ${medidaInterna(x1 + 70, y + 190, y + h, "738")}

    ${dimH(x1, x1 + w1, y + h + 35, "640")}
    ${dimH(x2, x2 + w2, y + h + 35, "590")}
  `;
}

function porta1(ls, li, ae, ad) {
  const x = 345;
  const y = 55;
  const w = 210;
  const h = 410;

  return `
    ${dimHUpper(x, x + w, 35, ls)}
    ${dimV(x - 45, y, y + h, ae, "left")}
    ${dimV(x + w + 45, y, y + h, ad, "right")}

    ${r(x, y, w, h)}

    ${dot(x + w - 15, y + 15)}
    ${dot(x + w - 15, y + h - 15)}

    ${oneX(x + w / 2, y + 90)}

    ${l(x + 45, y + 120, x + 45, y + 260, 2, "#999")}
    ${holePair(x + 17, y + 180)}

    ${dimH(x, x + w, y + h + 22, li)}
  `;
}

function box2frontal(ls, li, ae, ad) {
  const y = 105;
  const h = 330;

  const x1 = 275;
  const w1 = 190;

  const x2 = 465;
  const w2 = 180;

  return `
    ${dimHUpper(x1, x2 + w2, 55, ls)}
    ${dimV(225, y, y + h, ae, "left")}
    ${dimV(695, y, y + h, ad, "right")}

    ${r(x1, y, w1, h)}
    ${r(x2, y, w2, h)}

    ${dashV(x2 - 8, y, y + h)}
    ${l(x2, y, x2, y + h, 3, "#999")}

    ${dot(x1 + 15, y + 15)}
    ${dot(x1 + w1 - 15, y + 15)}
    ${holePair(x1 + 15, y + 190)}

    ${oneX(x1 + w1 / 2, y + 85)}
    ${oneX(x2 + w2 / 2, y + 85)}

    ${dimH(x1, x1 + w1, y + h + 35,li)}
    ${dimH(x2, x2 + w2, y + h + 35,li)}
  `;
}

function atualizar() {
  const modelo = document.getElementById("modelo").value;

  const ls = document.getElementById("larguraSuperior").value || "-";
  const li = document.getElementById("larguraInferior").value || "-";
  const ae = document.getElementById("alturaEsquerda").value || "-";
  const ad = document.getElementById("alturaDireita").value || "-";

  const tipo = document.getElementById("tipoVidro").value;
  const esp = document.getElementById("espessura").value;
  const desc = `${tipo} ${esp}`;

  document.getElementById("nomeModelo").innerText = nomes[modelo];
  document.getElementById("nomeVidro").innerText = desc;
  document.getElementById("obsFinal").innerText =
    document.getElementById("obs").value || "Nenhuma";

  const desenhos = {
    box4,
    box2,
    porta1,
    box2frontal,
  };

  document.getElementById("desenho").innerHTML = desenhos[modelo](
    ls,
    li,
    ae,
    ad
  );
}

async function gerarPDF() {
  atualizar();

  const canvas = await html2canvas(document.getElementById("pdf"), {
    scale: 2,
    backgroundColor: "#ffffff",
  });

  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF("p", "mm", "a4");

  const img = canvas.toDataURL("image/png");
  const w = 210;
  const h = (canvas.height * w) / canvas.width;

  pdf.addImage(img, "PNG", 0, 8, w, h);
  pdf.save("frn-vidros-desenho.pdf");
}

["modelo", "tipoVidro", "espessura"].forEach((id) => {
  document.getElementById(id).addEventListener("change", atualizar);
});

atualizar();
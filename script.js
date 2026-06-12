  const nomes = {
    janela1: "Janela 4 folhas",
    janela2: "Janela",
    porta1: "Porta",
    box1: "Box deslizante",
    porta2: "Porta puxador",
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
  function puxador(x, y) {
    return `
      <rect
        x="${x}"
        y="${y}"
        width="18"
        height="30"
        rx="3"
        fill="#999"
        stroke="#777"
        stroke-width="1"
      />
    `;
  }

  function canto(x, y, w = 35, h = 12) {
    return `
      <rect
        x="${x} "
        y="${y}"
        width="${w}"
        height="${h}"
        fill="#8c8c8c"
        stroke="#666"
        stroke-width="1"
        rx="1"
      />
    `;
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
      ${txt((x1 + x2) / 2, y - 24, label, 24, "#c92222")}
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
    `;
  }

  function janela1(ls, li, ae, ad) {
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
      ${dimHUpper(x1, x4 + w4, 85, ls)}
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

      ${dimH(x1, x4 + w1, yLateral + hLateral + 45, li)}
    `;
  }

  function janela2(ls, li, ae, ad) {
    const yEsquerda = 96;
    const hEsquerda = 326;

    const yDireita = 117;
    const hDireita = 305;

    const x1 = 160;
    const w1 = 280;

    const x2 = 430;
    const w2 = 250;

    return `
      ${dimHUpper(x1, x2 + w2, 40, ls)}

      ${dimV(x1 - 55, yEsquerda, yEsquerda + hEsquerda, ae, "left")}
      ${dimV(x2 + w2 + 55, yEsquerda, yDireita + hDireita, ad, "right")}

      ${r(x1, yEsquerda, w1, hEsquerda)}
      ${r(x2, yDireita, w2, hDireita)}

      ${dashV(x2 + 13, yDireita, yDireita + hDireita)} 

      ${dot(x1 + 18, yEsquerda + 15)}
      ${dot(x1 + w1 - 18, yEsquerda + 15)}

      ${holePair(x1 + 18, yEsquerda + 160)}

      ${oneX(x1 + w1 / 2, yEsquerda + 140)}
      ${oneX(x2 + w2 / 2, yDireita + 140)}


      ${dimH(x1, x2 + w2, 470, li)}
    `;
  }

  function porta1(ls, li, ae, ad) {
    const x = 345;
    const y = 55;
    const w = 260;
    const h = 410;

    return `
      ${dimHUpper(x, x + w, 35, ls)}
      ${dimV(x - 45, y, y + h, ae, "left")}
      ${dimV(x + w + 45, y, y + h, ad, "right")}

      ${r(x, y, w, h)}

      ${dot(x + w - 15, y + 12)}
      ${dot(x + w - 245, y + h - 398)}

      ${oneX(x + w / 2, y + 90)}
      ${dot(x + 28, y + 195)}
      ${dot(x + 15, y + 180)}
      ${dot(x + 15, y + 210)}

      ${dimH(x, x + w, y + h + 22, li)}
    `;
  }

  function porta2(ls, li, ae, ad) {
    const x = 345;
    const y = 55;
    const w = 260;
    const h = 410;

    return `
      ${dimHUpper(x, x + w, 35, ls)}
      ${dimV(x - 45, y, y + h, ae, "left")}
      ${dimV(x + w + 45, y, y + h, ad, "right")}

      ${r(x, y, w, h)}

      ${canto(x + w - 35, y)}
      ${canto(x + w - 35, y + h - 12)}

      ${oneX(x + w / 2, y + 90)}

      ${l(x + 45, y + 132, x + 45, y + 245, 2, "#999")}
      ${puxador(x + - 1, y + 170)}
      ${dot(x + 45, y + 150)}
      ${dot(x + 45, y + 225)}

      ${dimH(x, x + w, y + h + 22, li)}
    `;
  }

  function box1(ls, li, ae, ad) {
    const yCentro = 80;
    const hCentro = 360;

    const yLateral = 97;
    const hLateral = 343;

    const x1 = 260;
    const w1 = 200;

    const x3 = 260;
    const w3 = 190;

    const x4 = 440;
    const w4 = 200;

    return `
      ${dimHUpper(x1, x4 + w4, 40, ls)}
      ${dimV(230, yLateral, yLateral + hLateral, ae, "left")}
      ${dimV(670, yLateral, yLateral +  hLateral, ad, "right")}

      ${r(x3, yCentro, w3, hCentro)}
      ${r(x4, yLateral, w4, hLateral)}

      ${dashV(x4 + 12, yLateral, yLateral + hLateral)}


      ${dot(x3 + 15, yCentro + 15)}
      ${dot(x3 + w3 - 18, yCentro + 12)}
      ${dot(x3 + w3 - 175, yCentro + 175)}



      ${oneX(x3 + w3 / 2, yCentro + 75)}
      ${oneX(x4 + w4 / 2, yLateral + 75)}

      ${dimH(x1, x4 + w1, yLateral + hLateral + 45, li)}
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

  localStorage.setItem("modelo", modelo);
  localStorage.setItem("tipoVidro", tipo);
  localStorage.setItem("espessura", esp);
  localStorage.setItem("larguraSuperior", ls);
  localStorage.setItem("larguraInferior", li);
  localStorage.setItem("alturaEsquerda", ae);
  localStorage.setItem("alturaDireita", ad);
  localStorage.setItem("obs", document.getElementById("obs").value);

  document.getElementById("nomeModelo").innerText = nomes[modelo];
  document.getElementById("nomeVidro").innerText = desc;
  document.getElementById("obsFinal").innerText =
    document.getElementById("obs").value || "Nenhuma";

  const desenhos = {
    janela1,
    janela2,
    porta1,
    box1,
    porta2,
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

function carregarDadosSalvos() {
  document.getElementById("modelo").value =
    localStorage.getItem("modelo") || "janela1";

  document.getElementById("tipoVidro").value =
    localStorage.getItem("tipoVidro") || "VIDRO FUMÊ";

  document.getElementById("espessura").value =
    localStorage.getItem("espessura") || "8MM";

  document.getElementById("larguraSuperior").value =
    localStorage.getItem("larguraSuperior") || "2,80m";

  document.getElementById("larguraInferior").value =
    localStorage.getItem("larguraInferior") || "2,80m";

  document.getElementById("alturaEsquerda").value =
    localStorage.getItem("alturaEsquerda") || "2,10m";

  document.getElementById("alturaDireita").value =
    localStorage.getItem("alturaDireita") || "2,10m";

  document.getElementById("obs").value =
    localStorage.getItem("obs") || "";
}

[
  "modelo",
  "tipoVidro",
  "espessura",
  "larguraSuperior",
  "larguraInferior",
  "alturaEsquerda",
  "alturaDireita",
  "obs",
].forEach((id) => {
  document.getElementById(id).addEventListener("change", atualizar);
  document.getElementById(id).addEventListener("input", atualizar);
});

carregarDadosSalvos();
atualizar();
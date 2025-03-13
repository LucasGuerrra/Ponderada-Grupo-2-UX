// Configuração do mapa
const width = 800;
const height = 600;

const svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

const projection = d3.geoMercator()
    .scale(4000)  
    .center([-49, -23]) 
    .translate([width / 2, height / 2]);

const path = d3.geoPath().projection(projection);

const numZonas = 120;  
const arquivos = Array.from({ length: numZonas }, (_, i) => `data/zona_${i + 1}.json`);

// Função para carregar todos os arquivos JSON
function carregarMapas() {
    const promises = arquivos.map(arquivo => d3.json(arquivo));

    Promise.all(promises).then(dados => {
        dados.forEach(geoData => {
            svg.selectAll("path")
                .data(geoData.features)
                .enter()
                .append("path")
                .attr("d", path)
                .attr("fill", "lightblue")
                .attr("stroke", "black")
                .attr("stroke-width", 1)
                .on("mouseover", function () {
                    d3.select(this).attr("fill", "orange");
                })
                .on("mouseout", function () {
                    d3.select(this).attr("fill", "lightblue");
                });
        });
    }).catch(error => console.error("Erro ao carregar os arquivos:", error));
}

// Chama a função para carregar os mapas
carregarMapas();

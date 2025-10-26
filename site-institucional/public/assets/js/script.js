    // Galerias de exemplo (adicione mais imagens se desejar)
    const galleries = {
      soja: [
        'site-institucional/public/assets/images/soja1.webp',
        'site-institucional/public/assets/images/soja2.webp'
      ],
      milho: [
        'site-institucional/public/assets/images/milho1.webp',
        'site-institucional/public/assets/images/milho2.webp'
      ],
      cafe: [
        'site-institucional/public/assets/images/cafe1.webp',
        'site-institucional/public/assets/images/cafe2.webp'
      ],
      acucar: [
        'site-institucional/public/assets/images/acucar1.webp',
        'site-institucional/public/assets/images/acucar2.webp'
      ]
    };

    document.querySelectorAll('.product-card').forEach(card => {
      card.style.cursor = 'pointer';
      card.addEventListener('click', function() {
        const galleryKey = this.getAttribute('data-gallery');
        const title = this.querySelector('h3').innerText;
        openGallery(galleryKey, title);
      });
    });

    function openGallery(galleryKey, title) {
      document.getElementById('gallery-title').innerText = title;
      const images = galleries[galleryKey] || [];
      const container = document.getElementById('gallery-images');
      container.innerHTML = images.map(src => `<img src="${src}" style="max-width:200px;max-height:200px;border-radius:8px;box-shadow:0 2px 8px #0002;">`).join('');
      document.getElementById('gallery-modal').style.display = 'flex';
    }
    function closeGallery() {
      document.getElementById('gallery-modal').style.display = 'none';
    }
    document.getElementById('gallery-modal').addEventListener('click', function(e){
      if(e.target === this) closeGallery();
    });
const translations = {
  pt: {
    "menu-home": "Início",
    "menu-about": "Quem Somos",
    "menu-products": "Produtos",
    "menu-export": "Exportação",
    "menu-contact": "Contato",
    "hero-title": "Excelência em Exportação de Commodities Agrícolas Brasileiras",
    "hero-desc": "Conectamos o agronegócio brasileiro ao mundo, exportando commodities com eficiência, qualidade e sustentabilidade.",
    "about-title": "Quem Somos",
    "about-text-1": "A <strong>Wong Global Trade</strong> é especialista em conectar produtores brasileiros a mercados globais. Nossa paixão é impulsionar o agronegócio, entregando commodities com excelência e total conformidade, superando as expectativas dos nossos clientes.",
    "about-text-2": "Com uma sólida rede de parceiros e profundo conhecimento em logística e regulamentações, garantimos que seus produtos cheguem aos destinos mais exigentes da Ásia, Europa e América do Norte.",
    "products-title": "Linha de Produtos",
    "products-desc": "Produtos sob medida, com acabamento superior e precisão nas dimensões. Desenvolvemos soluções para cada necessidade do seu projeto.",
    "product-soja-title": "Soja",
    "product-soja-desc": "Grãos selecionados de alta qualidade, produzidos de forma sustentável para atender às demandas globais.",
    "product-milho-title": "Milho",
    "product-milho-desc": "Milho de alta performance, ideal para ração animal, indústria alimentícia e produção de etanol.",
    "product-cafe-title": "Café",
    "product-cafe-desc": "Café brasileiro de aroma e sabor inconfundíveis, cultivado nas melhores regiões do país.",
    "product-acucar-title": "Açúcar",
    "product-acucar-desc": "Açúcar de alta pureza, perfeito para a indústria alimentícia e para o consumidor final.",
    "export-title": "Exportação Global",
    "export-desc": "Exportamos as riquezas do agronegócio brasileiro para todos os continentes, com logística eficiente e atendimento personalizado. Nossos produtos são reconhecidos internacionalmente pela qualidade e conformidade.",
    "contact-title": "Fale Conosco",
    "send-message": "Enviar Mensagem",
    "footer": "&copy; 2025 Wong Global Trade - Todos os direitos reservados.<br> | <a href='Privacy.html' style='color: white;'>Política de Privacidade</a>",
    "input-name": "Seu nome",
    "input-email": "Seu e-mail",
    "input-phone": "Seu telefone",
    "input-message": "Sua mensagem"
  },
  en: {
    "menu-home": "Home",
    "menu-about": "About Us",
    "menu-products": "Products",
    "menu-export": "Export",
    "menu-contact": "Contact",
    "hero-title": "Excellence in Export of Brazilian Agricultural Commodities",
    "hero-desc": "We connect Brazilian agribusiness to the world, exporting commodities with efficiency, quality, and sustainability.",
    "about-title": "About Us",
    "about-text-1": "<strong>Wong Global Trade</strong> specializes in connecting Brazilian producers to global markets. Our passion is to boost agribusiness, delivering commodities with excellence and full compliance, exceeding our clients' expectations.",
    "about-text-2": "With a solid network of partners and deep knowledge in logistics and regulations, we ensure that your products reach the most demanding destinations in Asia, Europe, and North America.",
    "products-title": "Product Line",
    "products-desc": "Custom-made products with superior finish and dimensional precision. We develop solutions for every project need.",
    "product-soja-title": "Soy",
    "product-soja-desc": "Selected high-quality grains, sustainably produced to meet global demands.",
    "product-milho-title": "Corn",
    "product-milho-desc": "High-performance corn, ideal for animal feed, food industry, and ethanol production.",
    "product-cafe-title": "Coffee",
    "product-cafe-desc": "Brazilian coffee with a unique aroma and flavor, grown in the best regions of the country.",
    "product-acucar-title": "Sugar",
    "product-acucar-desc": "High-purity sugar, perfect for the food industry and the end consumer.",
    "export-title": "Global Export",
    "export-desc": "We export the riches of Brazilian agribusiness to all continents, with efficient logistics and personalized service. Our products are internationally recognized for quality and compliance.",
    "contact-title": "Contact Us",
    "send-message": "Send Message",
    "footer": "&copy; 2025 Wong Global Trade - All rights reserved.<br> | <a href='Privacy.html' style='color: white;'>Privacy Policy</a>",
    "input-name": "Your name",
    "input-email": "Your email",
    "input-phone": "Your phone",
    "input-message": "Your message"
  },
  es: {
    "menu-home": "Inicio",
    "menu-about": "Quiénes Somos",
    "menu-products": "Productos",
    "menu-export": "Exportación",
    "menu-contact": "Contacto",
    "hero-title": "Excelencia en Exportación de Commodities Agrícolas Brasileñas",
    "hero-desc": "Conectamos el agronegocio brasileño con el mundo, exportando commodities con eficiencia, calidad y sostenibilidad.",
    "about-title": "Quiénes Somos",
    "about-text-1": "<strong>Wong Global Trade</strong> es especialista en conectar productores brasileños con mercados globales. Nuestra pasión es impulsar el agronegocio, entregando commodities con excelencia y total conformidad, superando las expectativas de nuestros clientes.",
    "about-text-2": "Con una sólida red de socios y un profundo conocimiento en logística y regulaciones, garantizamos que sus productos lleguen a los destinos más exigentes de Asia, Europa y América del Norte.",
    "products-title": "Línea de Productos",
    "products-desc": "Productos a medida, con acabado superior y precisión en las dimensiones. Desarrollamos soluciones para cada necesidad de su proyecto.",
    "product-soja-title": "Soja",
    "product-soja-desc": "Granos seleccionados de alta calidad, producidos de forma sostenible para satisfacer las demandas mundiales.",
    "product-milho-title": "Maíz",
    "product-milho-desc": "Maíz de alto rendimiento, ideal para alimentación animal, industria alimentaria y producción de etanol.",
    "product-cafe-title": "Café",
    "product-cafe-desc": "Café brasileño de aroma y sabor inconfundibles, cultivado en las mejores regiones del país.",
    "product-acucar-title": "Azúcar",
    "product-acucar-desc": "Azúcar de alta pureza, perfecta para la industria alimentaria y el consumidor final.",
    "export-title": "Exportación Global",
    "export-desc": "Exportamos las riquezas del agronegocio brasileño a todos los continentes, con logística eficiente y atención personalizada. Nuestros productos son reconocidos internacionalmente por su calidad y conformidad.",
    "contact-title": "Contáctenos",
    "send-message": "Enviar Mensaje",
    "footer": "&copy; 2025 Wong Global Trade - Todos los derechos reservados.<br> | <a href='Privacy.html' style='color: white;'>Política de Privacidad</a>",
    "input-name": "Su nombre",
    "input-email": "Su correo electrónico",
    "input-phone": "Su teléfono",
    "input-message": "Su mensaje"
  },
  zh: {
    "menu-home": "首页",
    "menu-about": "关于我们",
    "menu-products": "产品",
    "menu-export": "出口",
    "menu-contact": "联系",
    "hero-title": "巴西农产品出口的卓越品质",
    "hero-desc": "我们以高效率、高质量和可持续性连接巴西农业综合企业与世界。",
    "about-title": "关于我们",
    "about-text-1": "<strong>Wong Global Trade</strong> 专注于将巴西生产商与全球市场连接起来。我们的热情是推动农业综合企业，提供卓越和完全合规的商品，超越客户的期望。",
    "about-text-2": "凭借坚实的合作伙伴网络以及在物流和法规方面的深厚知识，我们确保您的产品能够到达亚洲、欧洲和北美最苛刻的目的地。",
    "products-title": "产品线",
    "products-desc": "量身定制的产品，具有卓越的表面处理和尺寸精度。我们为您的每个项目需求开发解决方案。",
    "product-soja-title": "大豆",
    "product-soja-desc": "精选优质谷物，可持续生产，满足全球需求。",
    "product-milho-title": "玉米",
    "product-milho-desc": "高性能玉米，非常适合动物饲料、食品工业和乙醇生产。",
    "product-cafe-title": "咖啡",
    "product-cafe-desc": "巴西咖啡，香气和风味独特，生长在该国最好的地区。",
    "product-acucar-title": "糖",
    "product-acucar-desc": "高纯度糖，非常适合食品工业和最终消费者。",
    "export-title": "全球出口",
    "export-desc": "我们通过高效的物流和个性化的服务，将巴西农业综合企业的财富出口到各大洲。我们的产品以其质量和合规性而获得国际认可。",
    "contact-title": "联系我们",
    "send-message": "发送信息",
    "footer": "&copy; 2025 Wong Global Trade - 版权所有。<br> | <a href='Privacy.html' style='color: white;'>隐私政策</a>",
    "input-name": "您的姓名",
    "input-email": "您的邮箱",
    "input-phone": "您的电话",
    "input-message": "您的信息"
  }
};

function setLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      // Permite HTML em alguns textos (ex: <strong>)
      if (el.tagName === "H1" || el.tagName === "H2" || el.tagName === "P" || el.tagName === "SPAN" || el.tagName === "DIV" || el.tagName === "H3") {
        el.innerHTML = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });
  // Placeholders dos inputs
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });
}

document.getElementById('language-select').addEventListener('change', function() {
  setLanguage(this.value);
});

// Define o idioma inicial
setLanguage('pt');
    // Função para definir o idioma inicial
    function setInitialLanguage() {
      const userLang = navigator.language || navigator.userLanguage;
      let lang = 'pt';
      if (userLang.startsWith('en')) lang = 'en';
      else if (userLang.startsWith('es')) lang = 'es';
      else if (userLang.startsWith('zh')) lang = 'zh';
      document.getElementById('language-select').value = lang;
      setLanguage(lang);
    }
    window.onload = setInitialLanguage;
  // Botão MENU mobile
  const menuMobileBtn = document.getElementById('menu-mobile-btn');
  const nav = document.getElementById('main-nav');
  menuMobileBtn.addEventListener('click', function() {
    nav.classList.toggle('open');
  });
  // Fecha o menu ao clicar em um link (mobile)
  document.querySelectorAll('#main-nav a').forEach(link => {
    link.addEventListener('click', () => {
      if(window.innerWidth <= 800) nav.classList.remove('open');
    });
  });

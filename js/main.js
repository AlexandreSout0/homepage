// Função para navegar para uma rota específica
function navigateTo(route) {
    window.location.href = route;
}

// Função para manipular alterações na URL
function handleRouteChange() {
    const currentPath = window.location.pathname;
    console.log("Rota atual:", currentPath);
    // Aqui você pode adicionar lógica para renderizar o conteúdo da página com base na rota atual
}

// Adicionando um ouvinte de evento para lidar com alterações de rota quando a página é carregada
window.addEventListener('load', handleRouteChange);

// Adicionando um ouvinte de evento para lidar com alterações de rota quando o usuário navega para trás/para frente no histórico do navegador
window.addEventListener('popstate', handleRouteChange);
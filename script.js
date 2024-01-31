async function fetchServerData() {
    try {
        const response = await fetch('http://localhost:3000/website-odessa');
        const data = await response.json();

        const serverInfoContainer = document.getElementById('server-info');
        serverInfoContainer.innerHTML = `
            <h2 class="section-title">OdessaRP [18+]</h2>
            <div class="server-status ${data.serverStatus.online ? 'online' : 'offline'}">
                Status: ${data.serverStatus.online ? 'Online' : 'Offline'}
            </div>
            <p class="section-content">Online spillere: ${data.players} / ${data.maxPlayers}</p>
        `;
    } catch (error) {
        console.error('Failed to fetch server data', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchServerData);
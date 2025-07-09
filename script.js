async function loadMessages() {
    const res = await fetch('messages.json');
    const messages = await res.json();
    messages.forEach(createBubble);
}

function createBubble(msgObj) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.innerText = `${msgObj.text}\n- ${msgObj.author}`;
    bubble.style.left = Math.random() * 90 + 'vw';
    bubble.style.animationDuration = (Math.random() * 10 + 10) + 's';
    document.getElementById('bubble-container').appendChild(bubble);
    setTimeout(() => bubble.remove(), 15000);
}

setInterval(loadMessages, 2000);
loadMessages();

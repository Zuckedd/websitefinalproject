// Welcome message display (requirement a)
window.onload = function() {
    document.getElementById('welcomeMessage').style.display = 'block';
    setTimeout(function() {
        document.getElementById('welcomeMessage').style.opacity = '1';
    }, 100);
};

// New JS function - Personal Message Generator (requirement c)
function generatePersonalMessage() {
    const name = document.getElementById('userName').value.trim();
    const resultDiv = document.getElementById('personalMessageResult');
    
    if (name === '') {
        resultDiv.innerHTML = 'Please enter your name first! 😊';
        resultDiv.style.background = '#ffeaa7';
        resultDiv.style.borderLeft = '4px solid #fdcb6e';
        return;
    }
    
    const messages = [
        `Hello ${name}! 🌟 You have the power to achieve amazing things today!`,
        `Welcome ${name}! 🚀 Your journey to success starts with every small step you take.`,
        `Hi ${name}! 💪 Believe in yourself - you're capable of more than you know!`,
        `Greetings ${name}! ✨ Your dedication and hard work will lead you to great places.`,
        `Hey ${name}! 🎯 Stay focused, stay positive, and keep moving forward!`
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    resultDiv.innerHTML = randomMessage;
    resultDiv.style.background = '#e8f5e8';
    resultDiv.style.borderLeft = '4px solid #27ae60';
    
    // Clear input after generating message
    document.getElementById('userName').value = '';
}

// Enhanced light control functions
function turnLightOn() {
    document.getElementById('lightDisplay').innerHTML = '🔆';
    document.getElementById('lightDisplay').style.transform = 'scale(1.2)';
    document.getElementById('lightStatus').innerHTML = 'The light is ON! ✨ Brightness illuminates the way!';
    document.getElementById('lightStatus').style.color = '#f39c12';
}

function turnLightOff() {
    document.getElementById('lightDisplay').innerHTML = '💡';
    document.getElementById('lightDisplay').style.transform = 'scale(1)';
    document.getElementById('lightStatus').innerHTML = 'The light is OFF. 🌙 Sometimes we need darkness to appreciate light.';
    document.getElementById('lightStatus').style.color = '#7f8c8d';
}

// Motivation function
function showMotivation() {
    const motivations = [
        "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        "The only way to do great work is to love what you do.",
        "Innovation distinguishes between a leader and a follower.",
        "Your limitation—it's only your imagination.",
        "Great things never come from comfort zones."
    ];
    
    const randomMotivation = motivations[Math.floor(Math.random() * motivations.length)];
    document.getElementById('motivationText').innerHTML = `"${randomMotivation}"`;
    document.getElementById('motivationText').style.color = '#8e44ad';
}

// Allow Enter key to trigger message generation
document.getElementById('userName').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        generatePersonalMessage();
    }
});
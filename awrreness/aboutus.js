
function addMessage() {
  
    var message = `
    <div>
        <p>According to statistics, at least 150 ongoing armed conflicts have recently been recorded every year. Despite existing news coverage and organizations, what can we, as a community, do?</p>
        <p>This site was created with the aim of uniting people interested in offering assistance in any way they can. Here, our goal is to cultivate a supportive community. Whether you wish to volunteer, organize a community event for greater participation, or provide temporary shelter for war victims, you are in the right place. You can accomplish all this and more, as well as discover nearby organizations aligned with your interests or causes you wish to support.</p>
        <p>Let's join hands and raise our voices against the devastation of war. Together, we can construct a future where peace triumphs over conflict and dialogue prevails over violence. It's time to stand up, speak out, and demand an end to the suffering caused by war. Join us in our mission for a world where every life is valued, and every voice is heard. Together, we can make a difference. Together, we can choose peace.</p>
        <p>Share this message with your friends, family, and communities. Together, let's ignite a global movement for peace, one word at a time.</p>
    </div>
    `;

 
    $("#messageContainer").append(message);
}

$(document).ready(addMessage);

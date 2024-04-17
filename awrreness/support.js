function extendHands() {
    var message = `
    <div>
        <p>Let's extend our hands in compassion and solidarity to those affected by the ravages of war. In times of crisis, our support can make a world of difference:</p>
        <ul>
            <li>Provide essential needs and a tranquil environment for those seeking refuge. Safety and basic comforts are paramount in helping individuals settle into their new surroundings.</li>
            <li>Respect boundaries and refrain from prying questions. Allow individuals to open up at their own pace, without pressure or expectations.</li>
            <li>Offer activities and routines to help children cope with stress and uncertainty. Creating a sense of normalcy through play and structure can aid in their adjustment.</li>
            <li>Guide individuals to local support services and resources. Your knowledge of the community can be invaluable in helping them navigate unfamiliar territory.</li>
            <li>Understand that adaptation takes time and may manifest in unexpected ways. Respond with patience and empathy, recognizing the challenges they face in rebuilding their lives.</li>
            <li>Combat stereotypes and misinformation about displaced populations. Foster an environment of understanding and acceptance within your community.</li>
            <li>Engage displaced individuals in community activities once they feel secure. By offering opportunities for involvement, we can help them regain a sense of purpose and belonging.</li>
            <li>Remember, self-care is crucial in this journey of support. By extending kindness and assistance, we not only uplift others but also enrich our own lives. Together, let's build a world where compassion knows no borders.</li>
        </ul>
    </div>
    `;

    $("#messageContainer").append(message);
}

$(document).ready(extendHands);
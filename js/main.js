import {LoadLink} from './lib.js';
import { rewards } from './rewards.js';
import { getCep, setCep } from './viacep.js';


LoadLink();

//dinamic rewards
const url = window.location.pathname.split('/').slice(-1);
console.log(url)

if (url == 'politicarecompensas.html') {
    const rewards_container = document.querySelector('.rewards__box')
    const CreateRewardsCard = (reward) => {
        const card = `
            <div class="rewards__card">
                <div class="rewards__img">
                <img src="${reward.img}" alt="iphonereward" sizes="10x10">
                </div>
                <h3 class="rewards__card-title">${reward.title}</h3>
                <p class="rewards__card-price">${reward.price} pontos</p>
            </div>
            `
        return card;
     };
    const renderRewards = (rewards) => {
        rewards_container.innerHTML = rewards.map((reward) => CreateRewardsCard(reward)).join('');
    };
    
    renderRewards(rewards);
}
//API viacep
else if(url == 'ondedescartar.html') {
    const cepInput = document.getElementById('cep');
    cepInput.addEventListener('keyup', async (e) => {
        if (e.target.value.length == 8) {
            const cep = await getCep(e.target.value);
            setCep(cep);
        }
    });



   
   
}







document.addEventListener('DOMContentLoaded', () => {
    const postJobButton = document.querySelector('#post-job-btn');
    const jobList = document.querySelector('#job-listings');

    postJobButton.addEventListener('click', () => {
        const title = document.querySelector('#job-title').value;
        const location = document.querySelector('#job-location').value;
        const pay = document.querySelector('#job-pay').value;
        const type = document.querySelector('#job-type').value;

        const jobItem = document.createElement('div');
        jobItem.classList.add('job-listing');
        jobItem.innerHTML = `<div><strong>${title}</strong><br>${location} - $${pay}</div>
                             <button>${type === 'Fixed' ? 'Accept Now' : 'Place Bid'}</button>`;

        jobList.appendChild(jobItem);
    });
});
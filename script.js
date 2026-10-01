// Mobile Drawer Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Demo Class Modal Open / Close Logic
function openDemoModal(selectedClass = '') {
    const modal = document.getElementById('demoModal');
    modal.classList.remove('hidden');
    if (selectedClass) {
        const selectElement = document.getElementById('modalClass');
        if (selectElement) {
            for (let i = 0; i < selectElement.options.length; i++) {
                if (selectElement.options[i].value.includes(selectedClass)) {
                    selectElement.selectedIndex = i;
                    break;
                }
            }
        }
    }
}

function closeDemoModal() {
    const modal = document.getElementById('demoModal');
    modal.classList.add('hidden');
}

function closeThankYouModal() {
    const thankYouModal = document.getElementById('thankYouModal');
    thankYouModal.classList.add('hidden');
}

// Handle Form Submission Via WhatsApp Notification + Success Popup
function handleDemoSubmit(e) {
    e.preventDefault();

    const studentName = document.getElementById('modalStudentName').value;
    const parentName = document.getElementById('modalParentName').value;
    const phone = document.getElementById('modalPhone').value;
    const school = document.getElementById('modalSchool').value || 'Not Specified';
    const studentClass = document.getElementById('modalClass').value;
    const timing = document.getElementById('modalTiming').value;
    
    const mediumElement = document.querySelector('input[name="medium"]:checked');
    const medium = mediumElement ? mediumElement.value : 'English Medium';

    // Formatted WhatsApp Notification Message for Admin/Owner
    const whatsappMessage = `🎓 *NEW DEMO CLASS REGISTRATION!*%0A` +
        `----------------------------------------%0A` +
        `👤 *Student Name:* ${studentName}%0A` +
        `👨‍👩‍👦 *Parent Name:* ${parentName}%0A` +
        `📱 *WhatsApp No:* ${phone}%0A` +
        `📚 *Class Applied:* ${studentClass}%0A` +
        `🏫 *School:* ${school}%0A` +
        `⏰ *Preferred Timing:* ${timing}%0A` +
        `🌐 *Medium:* ${medium}%0A` +
        `----------------------------------------%0A` +
        `✨ *Source:* Apex Classes Official Website`;

    // 1. Close Demo Form
    closeDemoModal();

    // 2. Open Thank You Success Modal
    const thankYouModal = document.getElementById('thankYouModal');
    thankYouModal.classList.remove('hidden');

    // 3. Open WhatsApp Direct Notification
    setTimeout(() => {
        window.open(`https://wa.me/919661660425?text=${whatsappMessage}`, '_blank');
    }, 800);
}

function handleFormSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('quickName').value;
    const phone = document.getElementById('quickPhone').value;
    const studentClass = document.getElementById('quickClass').value;

    const whatsappMessage = `📩 *NEW QUICK INQUIRY!*%0A` +
        `----------------------------------------%0A` +
        `👤 *Name:* ${name}%0A` +
        `📱 *Phone:* ${phone}%0A` +
        `📚 *Class:* ${studentClass}%0A` +
        `----------------------------------------%0A` +
        `✨ *Source:* Apex Classes Quick Inquiry Box`;

    window.open(`https://wa.me/919661660425?text=${whatsappMessage}`, '_blank');
}
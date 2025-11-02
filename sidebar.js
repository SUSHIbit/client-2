// Sidebar Navigation Functionality

// Get DOM elements
const hamburgerBtn = document.getElementById('hamburger-btn');
const backdrop = document.getElementById('backdrop-overlay');
const sidebar = document.getElementById('sidebar');
const closeBtns = document.querySelectorAll('.close-btn');
const gamesProviderToggle = document.getElementById('games-provider-toggle');
const mainSidebarView = document.getElementById('main-sidebar-view');
const gamesProviderView = document.getElementById('games-provider-view');
const backToMainBtn = document.getElementById('back-to-main');
const providerSearch = document.getElementById('provider-search');
const providerItems = document.querySelectorAll('.provider-item');
const menuItems = document.querySelectorAll('.menu-item:not(#games-provider-toggle)');

// Open sidebar
function openSidebar() {
    sidebar.classList.add('active');
    backdrop.classList.add('active');
}

// Close sidebar
function closeSidebar() {
    sidebar.classList.remove('active');
    backdrop.classList.remove('active');
}

// Show Games Provider view
function showGamesProviderView() {
    mainSidebarView.classList.add('hidden');
    gamesProviderView.classList.remove('hidden');
    gamesProviderView.classList.add('active');
}

// Hide Games Provider view and return to main
function hideGamesProviderView() {
    gamesProviderView.classList.remove('active');
    setTimeout(() => {
        gamesProviderView.classList.add('hidden');
        mainSidebarView.classList.remove('hidden');
        // Clear search when returning
        providerSearch.value = '';
        providerItems.forEach(item => item.classList.remove('hidden'));
    }, 300);
}

// Search filter function
function filterProviders() {
    const searchTerm = providerSearch.value.toLowerCase();

    providerItems.forEach(item => {
        const providerName = item.getAttribute('data-name').toLowerCase();
        if (providerName.includes(searchTerm)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

// Event Listeners

// Hamburger button click
hamburgerBtn.addEventListener('click', openSidebar);

// Close buttons click (multiple close buttons)
closeBtns.forEach(btn => {
    btn.addEventListener('click', closeSidebar);
});

// Backdrop click
backdrop.addEventListener('click', closeSidebar);

// Games Provider toggle click
gamesProviderToggle.addEventListener('click', showGamesProviderView);

// Back to main button click
backToMainBtn.addEventListener('click', hideGamesProviderView);

// Search input
providerSearch.addEventListener('input', filterProviders);

// Close sidebar when clicking menu items
menuItems.forEach(item => {
    item.addEventListener('click', closeSidebar);
});

// Close provider items when clicked
providerItems.forEach(item => {
    item.addEventListener('click', closeSidebar);
});

// ESC key press
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar.classList.contains('active')) {
        // If in games provider view, go back to main
        if (gamesProviderView.classList.contains('active')) {
            hideGamesProviderView();
        } else {
            closeSidebar();
        }
    }
});

// Promo page function
// This function handles the top action buttons (Lucky Spin, Treasure Chest, Daily Mission, Plinko Ball)
function promopage(promoId) {
    // Get user ID from hidden input
    const userId = document.getElementById('promoUserID').value;

    // Promo page mapping
    const promoPages = {
        2: 'lucky-spin',
        5: 'treasure-chest',
        6: 'daily-mission',
        7: 'plinko-ball'
    };

    // Navigate to promo page
    const promoPage = promoPages[promoId];
    if (promoPage) {
        // In production, this would navigate to the actual promo page
        // For demo purposes, we'll log to console
        console.log(`Navigating to ${promoPage} for user: ${userId}`);

        // Example production code (commented out):
        // window.location.href = `/promotion/${promoPage}?userId=${userId}`;
    }
}

// Make promopage function globally accessible for onclick handlers
window.promopage = promopage;

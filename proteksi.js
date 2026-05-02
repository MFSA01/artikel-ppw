// Muhammad Farrel Satrio Adipramana (25.12.3569)
// proteksi website dari inspect element dan klik kanan

// blokir klik kanan
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
});

// blokir semua shortcut ke inspect element
document.addEventListener('keydown', function(e) {
    // F12
    if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
        return false;
    }

    // Ctrl + Shift + I (inspect)
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.keyCode === 73)) {
        e.preventDefault();
        return false;
    }

    // Ctrl + Shift + C (select element)
    if (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c' || e.keyCode === 67)) {
        e.preventDefault();
        return false;
    }

    // Ctrl + Shift + J (console)
    if (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j' || e.keyCode === 74)) {
        e.preventDefault();
        return false;
    }

    // Ctrl + U (view source)
    if (e.ctrlKey && (e.key === 'U' || e.key === 'u' || e.keyCode === 85)) {
        e.preventDefault();
        return false;
    }

    // Ctrl + S (save page)
    if (e.ctrlKey && (e.key === 'S' || e.key === 's' || e.keyCode === 83)) {
        e.preventDefault();
        return false;
    }

    // Ctrl + Shift + K (console firefox)
    if (e.ctrlKey && e.shiftKey && (e.key === 'K' || e.key === 'k' || e.keyCode === 75)) {
        e.preventDefault();
        return false;
    }

    // Ctrl + Shift + E (network tab firefox)
    if (e.ctrlKey && e.shiftKey && (e.key === 'E' || e.key === 'e' || e.keyCode === 69)) {
        e.preventDefault();
        return false;
    }
});

// blokir drag gambar supaya tidak bisa di-download lewat drag
document.addEventListener('dragstart', function(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
    }
});

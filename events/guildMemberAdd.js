module.exports = member => {
    let username = member.user.username;
    member.sendMessage('Sunucuya Hoşgeldin **' + username + '**!\n\nSunucumuzun Güvenliği İçin Kayıt Sistemi Kullanıyoruz.\n\nNasıl Kayıt Olabileceğini Öğrenmek İçin c!kayıt Yazabilirsin');
};

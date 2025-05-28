/**
 * Google Apps Script URL'si
 */
const WAITLIST_API_URL = 'https://script.google.com/macros/s/AKfycbzqyaLT6kSufn3VxPYwdYcrMdc7J_5IpQxt4NMDdVYRD5dAvLAv7sGb7OV2E06FCJUR/exec';

/**
 * Bekleme listesine e-posta eklemek için kullanılan fonksiyon
 * @param email - Kullanıcının e-posta adresi
 * @returns Promise - İşlem başarılı olursa true, başarısız olursa hata döner
 */
export const addEmailToWaitlist = async (email: string): Promise<boolean> => {
  try {
    // URLSearchParams kullanarak form verisi oluşturma
    const formData = new URLSearchParams({ email });
    
    // Google Apps Script'e POST isteği gönderme
    const response = await fetch(WAITLIST_API_URL, {
      method: 'POST',
      body: formData,
    });
    
    // Yanıtı metin olarak al
    const data = await response.text();
    
    // Başarılı yanıt kontrolü
    if (response.ok) {
      return true;
    } else {
      console.error('Bekleme listesine eklenirken bir hata oluştu:', data);
      return false;
    }
  } catch (error) {
    console.error('Bekleme listesine eklenirken bir hata oluştu:', error);
    return false;
  }
};

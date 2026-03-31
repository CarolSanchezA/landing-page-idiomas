export class Testimonial {
  constructor(id, name, role, text, photoUrl, isWhatsApp = false) {
    this.id = id;
    this.name = name;
    this.role = role;
    this.text = text;
    this.photoUrl = photoUrl;
    this.isWhatsApp = isWhatsApp; // Booleano para o React saber qual layout renderizar
  }
}
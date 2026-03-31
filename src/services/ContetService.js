import { PainPoint } from '../models/PainPoint';
import { Testimonial } from '../models/Testimonial';
import { MethodStep } from '../models/MethodStep';
import { FaqItem } from '../models/FaqItem';

class ContentService {
  getPainPoints() {
    return [
      new PainPoint(1, "Trava 01", "Medo de falar em reuniões internacionais.", "Chat"),
      new PainPoint(2, "Trava 02", "Dificuldade em entender sotaques diferentes.", "RecordVoiceOver"),
      new PainPoint(3, "Trava 03", "Falta de tempo para métodos tradicionais.", "Timer")
    ];
  }

  getTestimonials() {
    return [
      new Testimonial(1, "Marcos Silva", "Diretor de Operações", "O método mudou minha carreira em 6 meses.", "/assets/p1.jpg"),
      new Testimonial(2, "Ana Costa", "Gerente de Projetos", "Finalmente me sinto segura em calls.", "/assets/p2.jpg", true), // Formato WhatsApp
    ];
  }

  getMethodSteps() {
    return [
      new MethodStep(1, "Diagnóstico", "Entendemos seu nível e seus objetivos reais."),
      new MethodStep(2, "Imersão", "Conteúdo focado no seu dia a dia profissional."),
      new MethodStep(3, "Aceleração", "Prática intensiva com foco em conversão.")
    ];
  }

  getFaqItems() {
    return [
      new FaqItem(1, "O curso serve para iniciantes?", "Sim, temos trilhas que vão do zero ao avançado."),
      new FaqItem(2, "Qual a duração das aulas?", "As aulas são modulares de 15 a 30 minutos.")
    ];
  }
}

// Exportamos uma instância única (Singleton) para ser usada em toda a aplicação
export const contentService = new ContentService();
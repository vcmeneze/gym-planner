export interface Exercicio { 
  nome: string[];
  musculos: string[];
  musculos_secundarios: string[];
  equipamento: string[];
  img: {
    [key: string]: string; // Aceita QUALQUER string como chave
    default: string;       // 'default' é obrigatório
  }
}

export const buttons : Exercicio[] = [{
  nome: ['Rosca Martelo'],
  musculos: ['braquioradial_esq', 'braquioradial_dir'],
  musculos_secundarios: ['biceps_esq', 'biceps_dir'],
  equipamento: ['Halteres', 'Polia'],
  img: {
    'default': 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/rosca-biceps-martelo-com-halteres.gif', 
    'Halteres': 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/rosca-biceps-martelo-com-halteres.gif',
    'Barra': '',
    'Polia': 'https://www.hipertrofia.org/blog/wp-content/uploads/2024/08/cable-hammer-curl-with-rope.gif'
  }
}, {
  nome: ['Elevação Lateral'],
  musculos: ['deltoide_anterior_esq', 'deltoide_anterior_dir'],
  musculos_secundarios: [],
  equipamento: ['Halteres', 'Polia'],
  img: {
    'default': 'https://treinoemalta.com.br/wp-content/uploads/2023/07/Elevacao-Lateral-com-Halteres.gif', 
    'Halteres': 'https://treinoemalta.com.br/wp-content/uploads/2023/07/Elevacao-Lateral-com-Halteres.gif',
    'Barra': '',
    'Polia': 'https://www.hipertrofia.org/blog/wp-content/uploads/2025/03/elevacao-lateral-na-polia-baixa.gif'
  }
}, {
  nome: ['Supino Reto'],
  musculos: ['peitoral_medial_esq', 'peitoral_inferior_esq', 'peitoral_medial_dir', 'peitoral_inferior_dir'],
  musculos_secundarios: ['peitoral_superior_esq', 'peitoral_superior_dir'],
  equipamento: ['Barra', 'Halteres'],
  img: {
    'default': 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/supino-reto.gif', 
    'Halteres': 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/supino-reto-com-halteres.gif',
    'Barra': 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/supino-reto.gif',
    'Polia': ''
  }
}, {
  nome: ['Agachamento Livre'],
  musculos: ['vasto_lat_esq', 'vasto_lat_dir', 'reto_femoral_esq', 'reto_femoral_dir', 'vasto_medial_esq', 'vasto_medial_dir', 'gluteo'],
  musculos_secundarios: [],
  equipamento: ['Barra', 'Calistenia'],
  img: {
    'default': 'https://www.hipertrofia.org/blog/wp-content/uploads/2023/07/bodyweight-squat.gif', 
    'Halteres': '',
    'Barra': 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/11/agachamento-com-barra.gif',
    'Polia': ''
  }
}, {
  nome: ['Puxada Aberta no Pulley'],
  musculos: ['dorsal_esq', 'dorsal_dir', 'redondo_maior_esq', 'redondo_maior_dir'],
  musculos_secundarios: ['biceps_esq', 'biceps_dir'],
  equipamento: ['Polia'],
  img: {
    'default': 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/costas-puxada-aberta-com-barra-no-pulley.gif', 
    'Halteres': '',
    'Barra': '',
    'Polia': 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/costas-puxada-aberta-com-barra-no-pulley.gif'
  }
}, {
  nome: ['Desenvolvimento de Ombros'],
  musculos: ['deltoide_anterior_esq', 'deltoide_anterior_dir'],
  musculos_secundarios: ['trapezio_esq', 'trapezio_dir'],
  equipamento: ['Halteres', 'Barra'],
  img: {
    'default': 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/desenvolvimento-para-ombros-com-halteres.gif', 
    'Halteres': 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/desenvolvimento-para-ombros-com-halteres.gif',
    'Barra': 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/ombros-desenvolvimento-de-ombros-frontal-com-barra.gif',
    'Polia': ''
  }
}, {
  nome: ['Levantamento Terra'],
  musculos: ['gluteo', 'biceps_femoral_esq', 'biceps_femoral_dir', 'semitendineo_esq', 'semitendineo_dir', 'lombar'],
  musculos_secundarios: ['trapezio_esq', 'trapezio_dir'],
  equipamento: ['Barra','Halteres'],
  img: {
    'default': 'https://www.hipertrofia.org/blog/wp-content/uploads/2017/11/barbell-deadlift.gif', 
    'Halteres': 'https://media.tenor.com/4zkpIEvjmjUAAAAM/dumbbell-rdl.gif',
    'Barra': 'https://www.hipertrofia.org/blog/wp-content/uploads/2017/11/barbell-deadlift.gif',
    'Polia': ''
  }
}, {
  nome: ['Tríceps Corda'],
  musculos: ['cab_longa_triceps_esq', 'cab_lat_triceps_esq', 'cab_med_triceps_esq', 'cab_longa_triceps_dir', 'cab_lat_triceps_dir', 'cab_med_triceps_dir'],
  musculos_secundarios: [],
  equipamento: ['Polia'],
  img: {
    'default': 'https://i0.wp.com/omelhortreino.com.br/wp-content/uploads/2025/04/Triceps-na-polia-com-corda.gif?resize=550%2C550&ssl=1', 
    'Halteres': '',
    'Barra': '',
    'Polia': 'https://i0.wp.com/omelhortreino.com.br/wp-content/uploads/2025/04/Triceps-na-polia-com-corda.gif?resize=550%2C550&ssl=1'
  }
}, {
  nome: ['Remada Curvada'],
  musculos: ['dorsal_esq', 'dorsal_dir', 'redondo_maior_esq', 'redondo_maior_dir'],
  musculos_secundarios: ['post_trapezio', 'deltoide_post_esq', 'deltoide_post_dir'],
  equipamento: ['Barra', 'Halteres', 'Polia'],
  img: {
    'default': 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/costas-remada-curvada-com-pegada-invertida.gif', 
    'Halteres': 'https://www.hipertrofia.org/blog/wp-content/uploads/2023/11/dumbbell-bent-over-row.gif',
    'Barra': 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/costas-remada-curvada-com-pegada-invertida.gif',
    'Polia': 'https://www.hipertrofia.org/blog/wp-content/uploads/2017/11/remada-curvada-no-cross.gif'
  }
}, {
  nome: ['Abdominal Supra'],
  musculos: ['abdomen', 'abdomen_inf'],
  musculos_secundarios: ['transverso_abd_esq', 'transverso_abd_dir'],
  equipamento: ['Calistenia'],
  img: {
    'default': 'https://www.mundoboaforma.com.br/wp-content/uploads/2023/02/47271301-abdominal-supra.gif', 
    'Halteres': '',
    'Barra': '',
    'Polia': ''
  }
}, {
  nome: ['Panturrilha em Pé'],
  musculos: ['gastrocnemio_esq', 'gastrocnemio_dir', 'gastrocnemio_lat_esq', 'gastrocnemio_lat_dir', 'gastrocnemio_med_esq', 'gastrocnemio_med_dir'],
  musculos_secundarios: ['soleo_esq', 'soleo_dir'],
  equipamento: ['Calistenia', 'Halteres', 'Barra'],
  img: {
    'default': 'https://www.hipertrofia.org/blog/wp-content/uploads/2023/07/standing-calf-raise-on-a-staircase.gif', 
    'Halteres': 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/03/Elevacao-de-panturrilha-em-pe.gif',
    'Barra': 'https://www.hipertrofia.org/blog/wp-content/uploads/2024/09/barbell-standing-calf-raise.gif',
    'Polia': ''
  }
}, {
  nome: ['Leg Press 45'],
  musculos: ['vasto_lat_esq', 'vasto_lat_dir', 'vasto_medial_esq', 'vasto_medial_dir', 'reto_femoral_esq', 'reto_femoral_dir'],
  musculos_secundarios: ['gluteo'],
  equipamento: [],
  img: {
    'default': 'https://image.tuasaude.com/media/article/nb/le/leg-press_75589.gif?width=686&height=487', 
    'Halteres': '',
    'Barra': '',
    'Polia': ''
  }
}, {
  nome: ['Crossover Polia Alta'],
  musculos: ['peitoral_inferior_esq', 'peitoral_inferior_dir', 'peitoral_medial_esq', 'peitoral_medial_dir'],
  musculos_secundarios: [],
  equipamento: ['Polia'],
  img: {
    'default': 'https://www.hipertrofia.org/blog/wp-content/uploads/2024/08/crucifixo-crossover-alto.gif', 
    'Halteres': '',
    'Barra': '',
    'Polia': 'https://www.hipertrofia.org/blog/wp-content/uploads/2024/08/crucifixo-crossover-alto.gif'
  }
}, {
  nome: ['Supino Inclinado com Halteres ou Barra'],
  musculos: ['peitoral_superior_esq', 'peitoral_superior_dir'],
  musculos_secundarios: ['deltoide_anterior_esq', 'deltoide_anterior_dir', 'cab_lat_triceps_esq', 'cab_lat_triceps_dir'],
  equipamento: ['Halteres', 'Barra'],
  img: {
    'default': 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/supino-inclinado-com-barra.gif', 
    'Halteres': 'https://www.hipertrofia.org/blog/wp-content/uploads/2023/05/dumbbell-incline-bench-press.gif',
    'Barra': 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/supino-inclinado-com-barra.gif',
    'Polia': ''
  }
}, {
  nome: ['Barra Fixa (Supinada)'],
  musculos: ['dorsal_esq', 'dorsal_dir'],
  musculos_secundarios: ['biceps_esq', 'biceps_dir', 'cabeça_curta_biceps_esq', 'cabeça_curta_biceps_dir'],
  equipamento: ['Calistenia'],
  img: {
    'default': 'https://www.mundoboaforma.com.br/wp-content/uploads/2016/08/costas-barra-fixa-pegada-aberta-palma-para-tras-chinup.gif', 
    'Halteres': '',
    'Barra': 'https://www.mundoboaforma.com.br/wp-content/uploads/2016/08/costas-barra-fixa-pegada-aberta-palma-para-tras-chinup.gif',
    'Polia': ''
  }
}, {
  nome: ['Tríceps Testa'],
  musculos: ['cab_longa_triceps_esq', 'cab_longa_triceps_dir', 'cab_med_triceps_esq', 'cab_med_triceps_dir'],
  musculos_secundarios: ['anconeu_esq', 'anconeu_dir'],
  equipamento: ['Barra', 'Halteres', 'Polia'],
  img: {
    'default': 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/03/rosca-triceps-testa-deitado-no-banco-com-barra-tradicional.gif', 
    'Halteres': 'https://www.hipertrofia.org/blog/wp-content/uploads/2023/10/dumbbell-lying-triceps-extension.gif',
    'Barra': 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/03/rosca-triceps-testa-deitado-no-banco-com-barra-tradicional.gif',
    'Polia': 'https://treinoemalta.com.br/wp-content/uploads/2023/07/Triceps-testa-na-Polia.gif'
  }
}, {
  nome: ['Stiff'],
  musculos: ['biceps_femoral_esq', 'biceps_femoral_dir', 'semitendineo_esq', 'semitendineo_dir', 'gluteo'],
  musculos_secundarios: ['lombar'],
  equipamento: ['Barra', 'Halteres'],
  img: {
    'default': 'https://static.wixstatic.com/media/2edbed_5cd71a451e8f4210b1c1538ea54c03b6~mv2.gif', 
    'Halteres': 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/09/levantamento-terra-deadlift-stiff-com-halteres-1.gif',
    'Barra': 'https://static.wixstatic.com/media/2edbed_5cd71a451e8f4210b1c1538ea54c03b6~mv2.gif',
    'Polia': ''
  }
}, {
  nome: ['Encolhimento de Ombros'],
  musculos: ['trapezio_esq', 'trapezio_dir', 'post_trapezio'],
  musculos_secundarios: [],
  equipamento: ['Halteres', 'Barra'],
  img: {
    'default': 'https://www.hipertrofia.org/blog/wp-content/uploads/2024/01/dumbbell-shrug.gif', 
    'Halteres': 'https://www.hipertrofia.org/blog/wp-content/uploads/2024/01/dumbbell-shrug.gif',
    'Barra': 'https://www.hipertrofia.org/blog/wp-content/uploads/2018/03/encolhimento-com-barra.gif',
    'Polia': ''
  }
}, {
  nome: ['Abdominal Oblíquo (Bicicleta)'],
  musculos: ['obliquo_ext_esq', 'obliquo_ext_dir', 'abdomen'],
  musculos_secundarios: ['transverso_abd_esq', 'transverso_abd_dir'],
  equipamento: ['Calistenia'],
  img: {
    'default': 'https://www.hipertrofia.org/blog/wp-content/uploads/2024/08/abdominal-bicicleta.gif', 
    'Halteres': '',
    'Barra': '',
    'Polia': ''
  }
}, {
  nome: ['Cadeira Extensora'],
  musculos: ['vasto_medial_esq', 'vasto_medial_dir', 'vasto_lat_esq', 'vasto_lat_dir', 'reto_femoral_esq', 'reto_femoral_dir'],
  musculos_secundarios: [],
  equipamento: [],
  img: {
    'default': 'https://i0.wp.com/omelhortreino.com.br/wp-content/uploads/2025/03/Cadeira-extensora-1.gif?resize=550%2C550&ssl=1', 
    'Halteres': '',
    'Barra': '',
    'Polia': ''
  }
}, {
  nome: ['Remada Unilateral (Serrote)'],
  musculos: ['dorsal_esq', 'dorsal_dir', 'redondo_maior_esq', 'redondo_maior_dir'],
  musculos_secundarios: ['deltoide_post_esq', 'deltoide_post_dir'],
  equipamento: ['Halteres'],
  img: {
    'default': 'https://www.hipertrofia.org/blog/wp-content/uploads/2023/11/dumbbell-one-arm-bentover-row.gif', 
    'Halteres': 'https://www.hipertrofia.org/blog/wp-content/uploads/2023/11/dumbbell-one-arm-bentover-row.gif',
    'Barra': '',
    'Polia': ''
  }
}, {
  nome: ['Elevação de Pernas Suspenso'],
  musculos: ['abdomen_inf', 'abdomen'],
  musculos_secundarios: ['transverso_abd_esq', 'transverso_abd_dir'],
  equipamento: ['Calistenia'],
  img: {
    'default': 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/03/abdominal-no-chao-com-elevacao-de-pernas-esticadas.gif', 
    'Halteres': '',
    'Barra': '',
    'Polia': ''
  }
}, {
  nome: ['Rosca Inversa'],
  musculos: ['braquioradial_esq', 'braquioradial_dir', 'post_antebraco_esq', 'post_antebraco_dir'],
  musculos_secundarios: [],
  equipamento: ['Barra', 'Halteres', 'Polia'],
  img: {
    'default': 'https://www.hipertrofia.org/blog/wp-content/uploads/2024/03/barbell-reverse-curl.gif', 
    'Halteres': 'https://i0.wp.com/omelhortreino.com.br/wp-content/uploads/2025/04/Rosca-Inversa-com-Halteres-1.gif?resize=550%2C550&ssl=1',
    'Barra': 'https://www.hipertrofia.org/blog/wp-content/uploads/2024/03/barbell-reverse-curl.gif',
    'Polia': 'https://i0.wp.com/omelhortreino.com.br/wp-content/uploads/2025/04/Rosca-biceps-unilateral-com-pegada-invertida-em-cabo-1.gif?resize=550%2C550&ssl=1'
  }
}, {
  nome: ['Face Pull'],
  musculos: ['deltoide_post_esq', 'deltoide_post_dir', 'post_trapezio'],
  musculos_secundarios: ['redondo_maior_esq', 'redondo_maior_dir'],
  equipamento: ['Polia'],
  img: {
    'default': 'https://www.inspireusafoundation.org/file/2023/01/banded-face-pull.gif', 
    'Halteres': '',
    'Barra': '',
    'Polia': 'https://www.inspireusafoundation.org/file/2023/01/banded-face-pull.gif'
  }
}, {
  nome: ['Afundo / Passada'],
  musculos: ['vasto_lat_esq', 'vasto_lat_dir', 'gluteo'],
  musculos_secundarios: ['gluteo_med_esq', 'gluteo_med_dir', 'virilha_esq', 'virilha_dir'],
  equipamento: ['Halteres', 'Barra', 'Calistenia'],
  img: {
    'default': 'https://www.hipertrofia.org/blog/wp-content/uploads/2024/09/Static-Lunge.gif', 
    'Halteres': 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/agachamento-afundo-no-step.gif',
    'Barra': 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/agachamento-afundo-com-barra.gif',
    'Polia': ''
  }
}, {
  nome: ['Cadeira Flexora'],
  musculos: ['biceps_femoral_esq', 'semitendineo_esq', 'biceps_femoral_dir', 'semitendineo_dir'],
  musculos_secundarios: [],
  equipamento: [],
  img: {
    'default': 'https://preview.redd.it/d%C3%BAvida-genuina-qual-a-diferen%C3%A7a-da-cadeira-flexora-pra-mesa-v0-h169npex25yf1.gif?width=640&crop=smart&auto=webp&s=8adec7d2f98fbe5044d91065cd1c729479eb3202', 
    'Halteres': '',
    'Barra': '',
    'Polia': ''
  }
}, {
  nome: ['Rosca Direta'],
  musculos: ['biceps_esq', 'biceps_dir'],
  musculos_secundarios: ['braquioradial_esq', 'braquioradial_dir', 'flexor_punho_esq', 'flexor_punho_dir'],
  equipamento: ['Barra', 'Halteres', 'Polia'],
  img: {
    'default': 'https://www.mundoboaforma.com.br/wp-content/uploads/2022/09/rosca-biceps-direta-com-halteres.gif', 
    'Halteres': 'https://www.mundoboaforma.com.br/wp-content/uploads/2022/09/rosca-biceps-direta-com-halteres.gif',
    'Barra': 'https://www.mundoboaforma.com.br/wp-content/uploads/2022/09/rosca-biceps-direta-com-barra-e-pegada-fechada-mulher.gif',
    'Polia': 'https://www.hipertrofia.org/blog/wp-content/uploads/2024/12/rosca-direta-na-polia-sentado.gif'
  }
}, {
  nome: ['Crucifixo Reto'],
  musculos: ['peitoral_medial_esq', 'peitoral_medial_dir'],
  musculos_secundarios: ['deltoide_anterior_esq', 'deltoide_anterior_dir'],
  equipamento: ['Halteres', 'Polia'],
  img: {
    'default': 'https://www.hipertrofia.org/blog/wp-content/uploads/2023/09/dumbbell-fly.gif', 
    'Halteres': 'https://www.hipertrofia.org/blog/wp-content/uploads/2023/09/dumbbell-fly.gif',
    'Barra': '',
    'Polia': 'https://www.hipertrofia.org/blog/wp-content/uploads/2024/08/crucifixo-no-cross.gif'
  }
}, {
  nome: ['Agachamento Búlgaro'],
  musculos: ['gluteo', 'vasto_lat_esq', 'vasto_lat_dir', 'reto_femoral_esq', 'reto_femoral_dir'],
  musculos_secundarios: ['vasto_medial_esq', 'vasto_medial_dir', 'biceps_femoral_esq', 'biceps_femoral_dir'],
  equipamento: ['Halteres', 'Barra', 'Calistenia'],
  img: {
    'default': 'https://image.tuasaude.com/media/article/dv/bw/agachamento-bulgaro_62764.gif?width=686&height=487', 
    'Halteres': 'https://www.hipertrofia.org/blog/wp-content/uploads/2024/06/agachamento-bulgaro.gif',
    'Barra': 'https://www.hipertrofia.org/blog/wp-content/uploads/2019/01/agachamento-bulgaro-com-barra.gif',
    'Polia': ''
  }
}, {
  nome: ['Tríceps Francês'],
  musculos: ['cab_longa_triceps_esq', 'cab_longa_triceps_dir'],
  musculos_secundarios: ['cab_med_triceps_esq', 'cab_med_triceps_dir'],
  equipamento: ['Halteres', 'Polia', 'Barra'],
  img: {
    'default': 'https://www.hipertrofia.org/blog/wp-content/uploads/2025/01/triceps-frances-com-um-halter-sentado.gif', 
    'Halteres': 'https://www.hipertrofia.org/blog/wp-content/uploads/2025/01/triceps-frances-com-um-halter-sentado.gif',
    'Barra': 'https://www.hipertrofia.org/blog/wp-content/uploads/2018/07/triceps-frances-com-barra-em-pe.gif',
    'Polia': 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/07/triceps-no-pulley-atras-ca-cabeca.gif'
  }
}, {
  nome: ['Elevação Frontal'],
  musculos: ['deltoide_anterior_esq', 'deltoide_anterior_dir'],
  musculos_secundarios: ['peitoral_superior_esq', 'peitoral_superior_dir'],
  equipamento: ['Halteres', 'Barra', 'Polia'],
  img: {
    'default': 'https://www.hipertrofia.org/blog/wp-content/uploads/2023/11/dumbbell-front-raise.gif', 
    'Halteres': 'https://www.hipertrofia.org/blog/wp-content/uploads/2023/11/dumbbell-front-raise.gif',
    'Barra': 'https://www.hipertrofia.org/blog/wp-content/uploads/2018/09/elevacao-frontal-com-barra-v2.gif',
    'Polia': 'https://www.hipertrofia.org/blog/wp-content/uploads/2018/09/elevacao-frontal-no-cabo.gif'
  }
}, {
  nome: ['Flexão para Tríceps'],
  musculos: ['peitoral_medial_esq', 'peitoral_medial_dir', 'cab_lat_triceps_esq', 'cab_lat_triceps_dir'],
  musculos_secundarios: ['deltoide_anterior_esq', 'deltoide_anterior_dir', 'abdomen'],
  equipamento: ['Calistenia'],
  img: {
    'default': 'https://image.tuasaude.com/media/article/ts/eo/treino-de-triceps-em-casa_74246.gif?width=686&height=487', 
    'Halteres': '',
    'Barra': '',
    'Polia': ''
  }
}, {
  nome: ['Remada Baixa (Triângulo)'],
  musculos: ['dorsal_esq', 'dorsal_dir', 'trapezio_esq', 'trapezio_dir'],
  musculos_secundarios: ['biceps_esq', 'biceps_dir', 'post_trapezio'],
  equipamento: ['Polia'],
  img: {
    'default': 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/09/remada-sentado-com-cabos-e-triangulo-para-costas.gif', 
    'Halteres': '',
    'Barra': '',
    'Polia': 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/09/remada-sentado-com-cabos-e-triangulo-para-costas.gif'
  }
}, {
  nome: ['Mesa Flexora com Halteres'],
  musculos: ['biceps_femoral_esq', 'biceps_femoral_dir', 'semitendineo_esq', 'semitendineo_dir'],
  musculos_secundarios: ['gastrocnemio_esq', 'gastrocnemio_dir'],
  equipamento: ['Halteres',],
  img: {
    'default': 'https://www.hipertrofia.org/blog/wp-content/uploads/2024/12/flexora-com-halteres-no-banco.gif', 
    'Halteres': 'https://www.hipertrofia.org/blog/wp-content/uploads/2024/12/flexora-com-halteres-no-banco.gif',
    'Barra': '',
    'Polia': ''
  }
}, {
  nome: ['Panturrilha Sentado (Gêmeos)'],
  musculos: ['soleo_esq', 'soleo_dir'],
  musculos_secundarios: ['gastrocnemio_esq', 'gastrocnemio_dir'],
  equipamento: ['Halteres', 'Barra'],
  img: {
    'default': 'https://www.hipertrofia.org/blog/wp-content/uploads/2018/10/lever-seated-calf-raise-.gif', 
    'Halteres': 'https://www.hipertrofia.org/blog/wp-content/uploads/2018/10/dumbbell-seated-one-leg-calf-raise-hammer-grip.gif',
    'Barra': 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/03/Elevacao-de-panturrilha-sentado-com-barra.gif',
    'Polia': ''
  }
}, {
  nome: ['Pullover'],
  musculos: ['dorsal_esq', 'dorsal_dir', 'peitoral_inferior_esq', 'peitoral_inferior_dir'],
  musculos_secundarios: ['serra_ant_esq', 'serra_ant_dir', 'cab_longa_triceps_esq', 'cab_longa_triceps_dir'],
  equipamento: ['Halteres', 'Polia'],
  img: {
    'default': 'https://www.hipertrofia.org/blog/wp-content/uploads/2018/10/pullover-com-halteres-no-banco-horizontal.gif', 
    'Halteres': 'https://www.hipertrofia.org/blog/wp-content/uploads/2018/10/pullover-com-halteres-no-banco-horizontal.gif',
    'Barra': '',
    'Polia': 'https://www.hipertrofia.org/blog/wp-content/uploads/2018/10/pullover-na-polia-baixa.gif'
  }
}, {
  nome: ['Rosca Scott'],
  musculos: ['biceps_esq', 'biceps_dir'],
  musculos_secundarios: ['braquioradial_esq', 'braquioradial_dir'],
  equipamento: ['Barra', 'Halteres', 'Polia'],
  img: {
    'default': 'https://www.hipertrofia.org/blog/wp-content/uploads/2019/04/rosca-scott.gif', 
    'Halteres': 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/11/Rosca-Scott-com-halteres-unilateral.gif',
    'Barra': 'https://www.hipertrofia.org/blog/wp-content/uploads/2019/04/rosca-scott.gif',
    'Polia': 'https://www.hipertrofia.org/blog/wp-content/uploads/2023/05/cable-squatting-curl.gif'
  }
}, {
  nome: ['Prancha Abdominal Lateral (Plank)'],
  musculos: ['transverso_abd_esq', 'transverso_abd_dir', 'abdomen'],
  musculos_secundarios: ['deltoide_anterior_esq', 'deltoide_anterior_dir', 'reto_femoral_esq', 'reto_femoral_dir'],
  equipamento: ['Calistenia'],
  img: {
    'default': 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/11/Prancha-abdominal-lateral-com-torcao.gif', 
    'Halteres': '',
    'Barra': '',
    'Polia': ''
  }
}, {
  nome: ['Agachamento Sumô'],
  musculos: ['gluteo', 'vasto_medial_esq', 'vasto_medial_dir', 'adutor_magno_esq', 'adutor_magno_dir'],
  musculos_secundarios: ['vasto_lat_esq', 'vasto_lat_dir'],
  equipamento: ['Halteres', 'Barra', 'Calistenia'],
  img: {
    'default': 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/09/agachamento-sumo-sem-halter.gif', 
    'Halteres': 'https://static.wixstatic.com/media/2edbed_b10792904cad42cda04ecba536dc2139~mv2.gif',
    'Barra': 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/07/agachamento-sumo-com-barra.gif',
    'Polia': ''
  }
}, {
  nome: ['Mergulho no Banco'],
  musculos: ['cab_lat_triceps_esq', 'cab_lat_triceps_dir', 'cab_med_triceps_esq', 'cab_med_triceps_dir'],
  musculos_secundarios: ['deltoide_anterior_esq', 'deltoide_anterior_dir'],
  equipamento: ['Calistenia'],
  img: {
    'default': 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/triceps-no-banco.gif', 
    'Halteres': '',
    'Barra': '',
    'Polia': ''
  }
}]
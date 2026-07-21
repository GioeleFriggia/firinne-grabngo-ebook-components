// Ogni prodotto ha un componente dedicato in questa cartella.
// Per modificare testi, ingredienti, dressing o method, apri il file del prodotto.
import RedQuinoaBulgurAndBeetrootGrabAndGoSaladSheet, { productData as RedQuinoaBulgurAndBeetrootGrabAndGoSaladData } from './RedQuinoaBulgurAndBeetrootGrabAndGoSalad';
import BroccoliHazelnutTomatoAndFetaSheet, { productData as BroccoliHazelnutTomatoAndFetaData } from './BroccoliHazelnutTomatoAndFeta';
import CarrotAndSeedGrabAndGoSaladSheet, { productData as CarrotAndSeedGrabAndGoSaladData } from './CarrotAndSeedGrabAndGoSalad';
import AsianNoodleGrabAndGoSaladSheet, { productData as AsianNoodleGrabAndGoSaladData } from './AsianNoodleGrabAndGoSalad';
import MoroccanCouscousAndSweetPotatoGrabAndGoSaladSheet, { productData as MoroccanCouscousAndSweetPotatoGrabAndGoSaladData } from './MoroccanCouscousAndSweetPotatoGrabAndGoSalad';
import RoastPotatoAndChorizoGrabAndGoSaladSheet, { productData as RoastPotatoAndChorizoGrabAndGoSaladData } from './RoastPotatoAndChorizoGrabAndGoSalad';
import OrzoPastaAndRoastedRedPepperSheet, { productData as OrzoPastaAndRoastedRedPepperData } from './OrzoPastaAndRoastedRedPepper';
import GoatsCheeseAndCandiedWalnutSheet, { productData as GoatsCheeseAndCandiedWalnutData } from './GoatsCheeseAndCandiedWalnut';
import CeasarSaladSheet, { productData as CeasarSaladData } from './CeasarSalad';
import SatayCrunchSheet, { productData as SatayCrunchData } from './SatayCrunch';
import CharredChickenTacoSaladSheet, { productData as CharredChickenTacoSaladData } from './CharredChickenTacoSalad';
import TandooriChickenGrabAndGoLunchSheet, { productData as TandooriChickenGrabAndGoLunchData } from './TandooriChickenGrabAndGoLunch';
import HalloumiSteakGrabAndGoLunchSheet, { productData as HalloumiSteakGrabAndGoLunchData } from './HalloumiSteakGrabAndGoLunch';
import GochujangRoastSalmonGrabAndGoLunchSheet, { productData as GochujangRoastSalmonGrabAndGoLunchData } from './GochujangRoastSalmonGrabAndGoLunch';
import MisoLimeChickenGrabAndGoLunchSheet, { productData as MisoLimeChickenGrabAndGoLunchData } from './MisoLimeChickenGrabAndGoLunch';
import PeriPeriChickenGrabAndGoLunchSheet, { productData as PeriPeriChickenGrabAndGoLunchData } from './PeriPeriChickenGrabAndGoLunch';
import FalafelGrabAndGoLunchSheet, { productData as FalafelGrabAndGoLunchData } from './FalafelGrabAndGoLunch';
import RoastChickenCaesarOnCiabattaSheet, { productData as RoastChickenCaesarOnCiabattaData } from './RoastChickenCaesarOnCiabatta';
import MediterraneanHalloumiAndPestoOnTomatoFocacciaVSheet, { productData as MediterraneanHalloumiAndPestoOnTomatoFocacciaVData } from './MediterraneanHalloumiAndPestoOnTomatoFocacciaV';
import KoreanStyleBeefBulgogiWrapSheet, { productData as KoreanStyleBeefBulgogiWrapData } from './KoreanStyleBeefBulgogiWrap';
import TunaAndSweetcornMeltOnBaguetteSheet, { productData as TunaAndSweetcornMeltOnBaguetteData } from './TunaAndSweetcornMeltOnBaguette';
import FalafelAndTahiniCrunchOnMultigrainBagelVeganSheet, { productData as FalafelAndTahiniCrunchOnMultigrainBagelVeganData } from './FalafelAndTahiniCrunchOnMultigrainBagelVegan';
import SmokedSalmonCreamCheeseAndDillOnRyeSheet, { productData as SmokedSalmonCreamCheeseAndDillOnRyeData } from './SmokedSalmonCreamCheeseAndDillOnRye';

// Tutti i prodotti restano nel codice.
// La proprietà visible controlla soltanto se il prodotto appare nell'eBook.
export const allProductSheets = [
  { id: 1, visible: true, data: RedQuinoaBulgurAndBeetrootGrabAndGoSaladData, Component: RedQuinoaBulgurAndBeetrootGrabAndGoSaladSheet },
  { id: 2, visible: true, data: BroccoliHazelnutTomatoAndFetaData, Component: BroccoliHazelnutTomatoAndFetaSheet },
  { id: 3, visible: true, data: CarrotAndSeedGrabAndGoSaladData, Component: CarrotAndSeedGrabAndGoSaladSheet },
  { id: 4, visible: true, data: AsianNoodleGrabAndGoSaladData, Component: AsianNoodleGrabAndGoSaladSheet },
  { id: 5, visible: true, data: MoroccanCouscousAndSweetPotatoGrabAndGoSaladData, Component: MoroccanCouscousAndSweetPotatoGrabAndGoSaladSheet },
  { id: 6, visible: true, data: RoastPotatoAndChorizoGrabAndGoSaladData, Component: RoastPotatoAndChorizoGrabAndGoSaladSheet },
  { id: 7, visible: true, data: OrzoPastaAndRoastedRedPepperData, Component: OrzoPastaAndRoastedRedPepperSheet },
  { id: 8, visible: false, data: GoatsCheeseAndCandiedWalnutData, Component: GoatsCheeseAndCandiedWalnutSheet },
  { id: 9, visible: true, data: CeasarSaladData, Component: CeasarSaladSheet },
  { id: 10, visible: false, data: SatayCrunchData, Component: SatayCrunchSheet },
  { id: 11, visible: false, data: CharredChickenTacoSaladData, Component: CharredChickenTacoSaladSheet },
  { id: 12, visible: false, data: TandooriChickenGrabAndGoLunchData, Component: TandooriChickenGrabAndGoLunchSheet },
  { id: 13, visible: false, data: HalloumiSteakGrabAndGoLunchData, Component: HalloumiSteakGrabAndGoLunchSheet },
  { id: 14, visible: true, data: GochujangRoastSalmonGrabAndGoLunchData, Component: GochujangRoastSalmonGrabAndGoLunchSheet },
  { id: 15, visible: false, data: MisoLimeChickenGrabAndGoLunchData, Component: MisoLimeChickenGrabAndGoLunchSheet },
  { id: 16, visible: true, data: PeriPeriChickenGrabAndGoLunchData, Component: PeriPeriChickenGrabAndGoLunchSheet },
  { id: 17, visible: true, data: FalafelGrabAndGoLunchData, Component: FalafelGrabAndGoLunchSheet },
  { id: 18, visible: false, data: RoastChickenCaesarOnCiabattaData, Component: RoastChickenCaesarOnCiabattaSheet },
  { id: 19, visible: false, data: MediterraneanHalloumiAndPestoOnTomatoFocacciaVData, Component: MediterraneanHalloumiAndPestoOnTomatoFocacciaVSheet },
  { id: 20, visible: false, data: KoreanStyleBeefBulgogiWrapData, Component: KoreanStyleBeefBulgogiWrapSheet },
  { id: 21, visible: false, data: TunaAndSweetcornMeltOnBaguetteData, Component: TunaAndSweetcornMeltOnBaguetteSheet },
  { id: 22, visible: false, data: FalafelAndTahiniCrunchOnMultigrainBagelVeganData, Component: FalafelAndTahiniCrunchOnMultigrainBagelVeganSheet },
  { id: 23, visible: false, data: SmokedSalmonCreamCheeseAndDillOnRyeData, Component: SmokedSalmonCreamCheeseAndDillOnRyeSheet }
];

// Solo questi prodotti vengono mostrati nelle liste e nelle pagine dell'eBook.
export const productSheets = allProductSheets.filter((sheet) => sheet.visible);
export const products = productSheets.map((sheet) => sheet.data);

export function getProductSheetComponent(productId) {
  return productSheets.find((sheet) => sheet.id === productId)?.Component || null;
}

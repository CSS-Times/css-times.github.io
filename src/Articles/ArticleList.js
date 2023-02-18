import { davidArticle } from "./DavidBernhard4Fa/DavidBernhard4Fa";
import { davidArticleFINAL } from "./DB4Fact/DB4Fact";
import { scotlandYard } from "./scotlandYardLawsuit/scotlandYardLawsuit";
import { chatGPTRuinedMarriage } from "./chatGPTRuinedMarriage/chatGPTRuinedMarriage";



// Assigns each article an ID
const articlesWithouId = [davidArticle, davidArticleFINAL, scotlandYard, chatGPTRuinedMarriage];
for (let i = 0; i < articlesWithouId.length; i++) {
    articlesWithouId[i].setId(i);
}
/**
 * This list of articles.
 */
export const articles = articlesWithouId
<?php

namespace Drupal\exmpl_article\Manager;

use Drupal\Core\Entity\EntityInterface;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\exmpl_article\ArticleHelper;
use Drupal\taxonomy\TermInterface;

class ArticleManager {

  public function __construct(
    private readonly EntityTypeManagerInterface $entityTypeManager
  ) {

  }

  /**
   * @return int|null
   * @throws \Drupal\Component\Plugin\Exception\InvalidPluginDefinitionException
   * @throws \Drupal\Component\Plugin\Exception\PluginNotFoundException
   */
  public function countDrupalArticles(): ?int {
    $drupalTagTerm = $this->getDrupalTagTerm();

    if ($drupalTagTerm instanceof TermInterface) {
      $drupalArticlesQuery = $this->entityTypeManager->getStorage('node')
        ->getQuery()
        ->accessCheck(FALSE);
      $drupalArticlesQuery->condition('type', ArticleHelper::BUNDLE)
        ->condition(ArticleHelper::TAG_FIELD_NAME, $drupalTagTerm->id())
        ->condition('status', TRUE);
      $drupalArticlesQueryResult = $drupalArticlesQuery->execute();

      return count($drupalArticlesQueryResult);
    }
    else {
      return NULL;
    }
  }

  /**
   * @return \Drupal\Core\Entity\EntityInterface|null
   * @throws \Drupal\Component\Plugin\Exception\InvalidPluginDefinitionException
   * @throws \Drupal\Component\Plugin\Exception\PluginNotFoundException
   */
  public function getDrupalTagTerm(): ?EntityInterface {
    $drupalTagTermQuery = $this->entityTypeManager->getStorage('taxonomy_term')
      ->getQuery()
      ->accessCheck(FALSE);
    $drupalTagTermQuery->condition('name', ArticleHelper::DRUPAL_TERM_NAME);
    $drupalTagTermQueryResult = $drupalTagTermQuery->execute();

    return is_array($drupalTagTermQueryResult)
      ? $this->entityTypeManager->getStorage('taxonomy_term')->load(reset($drupalTagTermQueryResult))
      : NULL;
  }

}
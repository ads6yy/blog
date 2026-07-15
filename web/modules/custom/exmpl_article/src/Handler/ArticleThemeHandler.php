<?php

namespace Drupal\exmpl_article\Handler;

use Drupal\Core\DependencyInjection\ContainerInjectionInterface;
use Drupal\exmpl_article\ArticleHelper;
use Drupal\exmpl_article\Manager\ArticleManager;
use Drupal\taxonomy\TermInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

class ArticleThemeHandler implements ContainerInjectionInterface {

  public function __construct(
    private readonly ArticleManager $articleManager,
  ) {

  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container): static {
    return new static(
      $container->get('exmpl_article.entity.manager')
    );
  }


  public function setDrupalArticleVariables(&$variables) {
    /** @var \Drupal\node\NodeInterface $node */
    $node = $variables['node'];

    $drupalTagTerm = $this->articleManager->getDrupalTagTerm();

    if ($drupalTagTerm instanceof TermInterface
      && $node->hasField(ArticleHelper::TAG_FIELD_NAME)
      && $node->get(ArticleHelper::TAG_FIELD_NAME)
        ->getString() === $drupalTagTerm->id()) {

      $variables['countDrupalArticles'] = $this->articleManager->countDrupalArticles($drupalTagTerm);
    }
  }

}
<div class="main-pane-outer">
  <div class="main-pane-inner"> 
    <?php print render($page['ticker']); ?>
    <?php print render($page['header']); ?>
    <?php print render($page['navigation_pane']); ?>
    <?php print render($page['navigation']); ?>

    <div id="page-wrapper">
      <div id="page-wrapper-content">
        <div id="page">
          <div id="page-content" class="clearfix">
            
            <?php print render($page['help']); ?>
            <?php print render($page['content_over']); ?>

            <?php if (!empty($messages)): ?>
              <?php print $messages; ?>
            <?php endif; ?>
            <?php if ($tabs = render($tabs)): ?>
              <div class="tabs"><?php print $tabs; ?></div>
            <?php endif; ?>
            <?php if ($action_links): ?>
              <ul class="action-links"><?php print render($action_links); ?></ul>
            <?php endif; ?>

            <?php print render($page['content']); ?>

            <?php print render($page['sidebar_first']); ?>
            <?php print render($page['sidebar_second']); ?>
            <?php print render($page['content_under']); ?>
            
          </div>
        </div>
      </div>
    </div>
    <div id="footer-wrapper">
      <div id="footer-wrapper-content">
        <?php print render($page['footer']); ?>
      </div>
    </div>

  </div>
</div>
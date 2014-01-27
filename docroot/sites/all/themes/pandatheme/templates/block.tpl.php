<div id="<?php print $block_html_id; ?>" class="clearfix <?php print $classes; ?>"<?php print $attributes; ?>>

  <div class="content"<?php print $content_attributes; ?>>
    <?php print render($title_prefix); ?>
    <?php if (isset($block->subject)): ?>
      <?php if ($block->subject !== ''): ?>
        <div class="block-title">
          <h3<?php print $title_attributes; ?>><?php print $block->subject; ?></h3>
        </div>
      <?php endif; ?>
    <?php endif; ?>
    <?php print render($title_suffix); ?>
    <?php print $content; ?>
  </div>

</div><!-- /.block -->

<div class="content">

<?php foreach ($fields as $id => $field): ?>

  <?php if (isset($field->element_type)): ?>
    <<?php print $field->element_type; ?><?php print drupal_attributes($field->attributes); ?>>
  <?php endif; ?>

    <?php if ($field->label): ?>

      <?php if ($field->label_element_type): ?>
        <<?php print $field->label_element_type; ?><?php print drupal_attributes($field->label_attributes); ?>>
      <?php endif; ?>

          <?php print $field->label; ?>:

      <?php if ($field->label_element_type): ?>
        </<?php print $field->label_element_type; ?>>
      <?php endif; ?>

    <?php endif; ?>

      <?php print $field->content; ?>

  <?php if ($field->element_type): ?>
    </<?php print $field->element_type; ?>>
  <?php endif; ?>

<?php endforeach; ?>
</div>
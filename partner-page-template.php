<?php get_header(); include('sections/header.php'); ?>

<main id="main" class="site-main" role="main">
<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
<?php the_title(); ?></h1>  
        <div class="entry">
            <?php the_content(); ?>
        </div><!-- entry -->
<?php endwhile; ?>
<?php endif; ?>
</main>

<?php include('sections/footer.php'); ?>
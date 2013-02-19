<?php
    $array = array(
        array(
            'categoryName' => 'Category 1',
            'categoryId' => '1',
            'description' => 'Description',
            'imagePath' => 'images/test/IMG_5496.jpg'
        ),
        array(
            'categoryName' => 'Category 2',
            'categoryId' => '2',
            'description' => 'Description',
            'imagePath' => 'images/test/IMG_7470.jpg'
        ),
        array(
            'categoryName' => 'Category 3',
            'categoryId' => '3',
            'description' => 'Description',
            'imagePath' => 'images/test/IMG_7495.jpg'
        ),
        array(
            'categoryName' => 'Category 4',
            'categoryId' => '4',
            'description' => 'Description',
            'imagePath' => 'images/test/IMG_7551.jpg'
        ),
        array(
            'categoryName' => 'Category 5',
            'categoryId' => '5',
            'description' => 'Description',
            'imagePath' => 'images/test/130215_photocall_croobs_009.jpg'
        )
    );
    
    print(json_encode($array));
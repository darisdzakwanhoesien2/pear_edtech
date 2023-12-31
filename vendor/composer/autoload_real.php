<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInitd6b19c319ba6c1d104b8193149a3984b
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        spl_autoload_register(array('ComposerAutoloaderInitd6b19c319ba6c1d104b8193149a3984b', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInitd6b19c319ba6c1d104b8193149a3984b', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInitd6b19c319ba6c1d104b8193149a3984b::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}

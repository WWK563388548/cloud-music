import {createGlobalStyle} from'styled-components';

export const IconStyle = createGlobalStyle`
  @font-face {
    font-family: "iconfont";
    src: url('iconfont.eot?t=1581924749820'); /* IE9 */
    src: url('iconfont.eot?t=1581924749820#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAMgAAsAAAAABvwAAALRAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDBgqBZIFoATYCJAMMCwgABCAFhG0HNxsvBlGUqcko2Y+E6vYKZnGcqOiyvR034+1WXRB/R5AN2+zdfa0OVKkS3z2oUiUK5BuBAg/CYBQaYYnvCqF+Upfq7aDzQVb25y0EYJAfWJYDABviBFjc2tvT7WEqzx079pqnrOf/czm9FlAg81ttl7mWHfUCjAMKdE9qkxVQQNwwdoFLOE6gaZGK4rCirg2EKKxxgbgzG1kQkgspCsvWhWrN0iKeVNTTQ3oFPIbfjz+GCCGpZNbU49tyARR96n6TZ+ezrnyEeD4H2CoytgCFuKlNnaEFI9KaqoD24qoipLmi8/+EIl1T3ekfLxFVVmUbrEFluimxSyf4erNMAhlUvUbmABBziBB3MQ2SMlwZo5yIWt+d2wuL3tiZ3W7f3mayqrbYkRi9U7mj1ettP/eo2os6PnoYn6/D72/3eNoq+JG8M9uaXdLPhN5G34b6nrDX4FgIjbH/1EfczDKzN9G3wPPJtBl1/JxkOqvn9/Xrv9aaU1QydfSSZLv+6GiW160YHVV4nD2jI91UDzUyUtY9MgqGWCPza1qBfER9/tm/8T6ckjkYmfe33irgw8VthYainweo34o7+LXinm1F18LqoopckenJlm8zmdDUveYs39C38ZpJ7wShnhMzSGoWIKtbwhTCFlS0bENV3Q40bapc3TKC0aI0sGEJQOh7hKTrDbK+L5hC+AoVU3+gqh80NJ1E7JYtK2FmSjFiCRIgNwbNvNMhOlbCRNUtyCjbWJyVhqQOhCVzFOo1umK2EjkQnmOGNGw0ECJCETvtsAKchmw2J3RhpwXxRGMixJWj1Yp1b9LwTjtgHMAQFoEIIM4YyIzn5CD63Qmm9PkWiJHMhoVbUDXeDggmMfcP6WnoemAqVY5eqHu5RjLMyIAgRJAIc7KDKoADsdkpJ8hVP8gC4REaphEJlxxa1Ensq9Ksr7F/3x5osvbMkSJHUe6RQw6SEIt5EwAAAAA=') format('woff2'),
    url('iconfont.woff?t=1581924749820') format('woff'),
    url('iconfont.ttf?t=1581924749820') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('iconfont.svg?t=1581924749820#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .icon-menu:before {
    content: "\e630";
  }

  .icon-search:before {
    content: "\e7b3";
  }
`;

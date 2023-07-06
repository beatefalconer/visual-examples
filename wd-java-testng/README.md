# Getting started with Sauce Labs Visual in Java WebDriver [![](https://badgen.net/badge/Run%20this%20/README/5B3ADF?icon=https://runme.dev/img/logo.svg)](https://runme.dev/api/runme?repository=git%40github.com%3Asaucelabs%2Fvisual-examples.git)

## Prerequisites

- For macOS Ventura: Git and Homebrew
- For Linux: Git and Eclipse Temurin JDK 11+ (https://adoptium.net/temurin/releases/)
- Sauce Labs Account

## Run the demo

- Install Eclipse Temurin JDK (for macOS Ventura):
  ```sh { name=java }
  brew install --cask temurin
  ```

- Clone the repository:
  ```sh { name=clone }
  git clone https://github.com/saucelabs/visual-examples
  cd visual-examples/wd-java-testng
  ```

- Configure with your Sauce credentials from https://app.saucelabs.com/user-settings
  ```sh { name=set-credentials }
  echo SAUCE_USERNAME=__YOUR_SAUCE_USERNAME__ >> src/test/resources/.env
  echo SAUCE_ACCESS_KEY=__YOUR_SAUCE_ACCESS_KEY__ >> src/test/resources/.env
  ```

- Run the test
  ```sh { name=mvn-run-test }
  ./mvnw clean test -Dtest=InventoryTest
  ```

- Review your screenshots by clicking on the url printed in the test or go to https://app.saucelabs.com/visual/builds.
- Accept all diffs, so they become new baselines.

- Re-run the tests
  ```sh { name=mvn-run-test-modified }
  ./mvnw clean test -Dtest=InventoryModifiedTest
  ```

- Open the test or go to https://app.saucelabs.com/visual/builds to review changes.

## How to add visual testing to your setup

- Add [sauce visual](https://central.sonatype.com/artifact/com.saucelabs.visual/java-client) dependency
  to your pom.xml
  ```xml
  <dependency>
    <groupId>com.saucelabs.visual</groupId>
    <artifactId>java-client</artifactId>
    <version>0.2.8</version>
    <scope>test</scope>
  </dependency>
  ```

- Declare a RemoteWebDriver and a VisualApi instance as class variables
  ```
  private static VisualApi visual;
  private static RemoteWebDriver driver;
  ```

- Initialize WebDriver and VisualApi in @BeforeSuite section
  ```
  @BeforeSuite
  public static void init() {
      driver = new RemoteWebDriver(webDriverUrl, capabilities);
      visual = new VisualApi(driver, Region.US_WEST_1, sauceUsername, sauceAccessKey);
  }
  ```

- Add a check to one of your tests:
  ```
  visual.check("My login page")
  ```

- Don't forget to quit the WebDriver in @AfterSuite section
  ```
  @AfterSuite
      public static void tearDown() {
          if (driver != null) {
              driver.quit();
      }
  }
  ```

- Configure with your Sauce credentials from https://app.saucelabs.com/user-settings.
  ```sh
  echo SAUCE_USERNAME=__YOUR_SAUCE_USERNAME__ >> src/test/resources/.env
  echo SAUCE_ACCESS_KEY=__YOUR_SAUCE_ACCESS_KEY__ >> src/test/resources/.env
  ```

- Run the test the way you are used to.
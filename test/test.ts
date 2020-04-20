import VivoxToken from "../src";
import ChannelType from "../src/entity/ChannelType";

const vivoxToken = new VivoxToken("blindmelon-foobar-dev", "secret!", "tla.vivox.com", "BlindMelon-FooBar-dev-Admin")

describe("make vivox token", () => {
  test('login', () => {
    expect(vivoxToken.login("jerky", 933000, new Date(Date.UTC(2016, 0, 1))))
      .toBe("e30.eyJpc3MiOiJibGluZG1lbG9uLWZvb2Jhci1kZXYiLCJleHAiOjE0NTE2MDY0MDAsInZ4YSI6ImxvZ2luIiwidnhpIjo5MzMwMDAsImYiOiJzaXA6LmJsaW5kbWVsb24tZm9vYmFyLWRldi5qZXJreS5AdGxhLnZpdm94LmNvbSJ9.96nkemVShmPooSE_Iwz-0XNmuk5UAGKBtJcBbtIOhxg");
  });

  test('join', () => {
    expect(vivoxToken.join("jerky", ChannelType.NonPositionalChannels, "testchannel", 444000, new Date(Date.UTC(2016, 0, 1))))
      .toBe("e30.eyJpc3MiOiJibGluZG1lbG9uLWZvb2Jhci1kZXYiLCJleHAiOjE0NTE2MDY0MDAsInZ4YSI6ImpvaW4iLCJ2eGkiOjQ0NDAwMCwiZiI6InNpcDouYmxpbmRtZWxvbi1mb29iYXItZGV2Lmplcmt5LkB0bGEudml2b3guY29tIiwidCI6InNpcDpjb25mY3RsLWctYmxpbmRtZWxvbi1mb29iYXItZGV2LnRlc3RjaGFubmVsQHRsYS52aXZveC5jb20ifQ.9KPldWQ8vDewoBF4-ZIQCDwkVctfLqmlvg4pV-KTENk");
  });

  test('joinMuted', () => {
    expect(vivoxToken.joinMuted("jerky", ChannelType.NonPositionalChannels, "testchannel", 542680, new Date(Date.UTC(2016, 0, 1))))
      .toBe("e30.eyJpc3MiOiJibGluZG1lbG9uLWZvb2Jhci1kZXYiLCJleHAiOjE0NTE2MDY0MDAsInZ4YSI6ImpvaW5fbXV0ZWQiLCJ2eGkiOjU0MjY4MCwiZiI6InNpcDouYmxpbmRtZWxvbi1mb29iYXItZGV2Lmplcmt5LkB0bGEudml2b3guY29tIiwidCI6InNpcDpjb25mY3RsLWctYmxpbmRtZWxvbi1mb29iYXItZGV2LnRlc3RjaGFubmVsQHRsYS52aXZveC5jb20ifQ.wnbZALyaDAYfrM6BXbp1wYHvVyOtQU_ASuPIpzf04B8");
  });

  test('kick', () => {
    expect(vivoxToken.kick("beef", "jerky", ChannelType.NonPositionalChannels, "testchannel", 665000, new Date(Date.UTC(2016, 0, 1))))
      .toBe("e30.eyJpc3MiOiJibGluZG1lbG9uLWZvb2Jhci1kZXYiLCJleHAiOjE0NTE2MDY0MDAsInZ4YSI6ImtpY2siLCJ2eGkiOjY2NTAwMCwic3ViIjoic2lwOi5ibGluZG1lbG9uLWZvb2Jhci1kZXYuamVya3kuQHRsYS52aXZveC5jb20iLCJmIjoic2lwOi5ibGluZG1lbG9uLWZvb2Jhci1kZXYuYmVlZi5AdGxhLnZpdm94LmNvbSIsInQiOiJzaXA6Y29uZmN0bC1nLWJsaW5kbWVsb24tZm9vYmFyLWRldi50ZXN0Y2hhbm5lbEB0bGEudml2b3guY29tIn0.mXaYJH-T52Mq5uNEami4ovZ430C0vIRCWaYENc2R10k");

    expect(vivoxToken.kickByAdmin("jerky", ChannelType.NonPositionalChannels, "testchannel", 8000, new Date(Date.UTC(2016, 0, 1))))
      .toBe("e30.eyJpc3MiOiJibGluZG1lbG9uLWZvb2Jhci1kZXYiLCJleHAiOjE0NTE2MDY0MDAsInZ4YSI6ImtpY2siLCJ2eGkiOjgwMDAsInN1YiI6InNpcDouYmxpbmRtZWxvbi1mb29iYXItZGV2Lmplcmt5LkB0bGEudml2b3guY29tIiwiZiI6InNpcDpCbGluZE1lbG9uLUZvb0Jhci1kZXYtQWRtaW5AdGxhLnZpdm94LmNvbSIsInQiOiJzaXA6Y29uZmN0bC1nLWJsaW5kbWVsb24tZm9vYmFyLWRldi50ZXN0Y2hhbm5lbEB0bGEudml2b3guY29tIn0.u3mcmDFDi15Mec-HwduSFq2ukh5q4IV-ou7AFLkgkxE")
  });

  test('kick user from server', () => {
    expect(vivoxToken.kickUserFromServerByAdmin("jerky", 613642, new Date(Date.UTC(2016, 0, 1))))
      .toBe("e30.eyJpc3MiOiJibGluZG1lbG9uLWZvb2Jhci1kZXYiLCJleHAiOjE0NTE2MDY0MDAsInZ4YSI6ImtpY2siLCJ2eGkiOjYxMzY0Miwic3ViIjoic2lwOi5ibGluZG1lbG9uLWZvb2Jhci1kZXYuamVya3kuQHRsYS52aXZveC5jb20iLCJmIjoic2lwOkJsaW5kTWVsb24tRm9vQmFyLWRldi1BZG1pbkB0bGEudml2b3guY29tIiwidCI6InNpcDpibGluZG1lbG9uLWZvb2Jhci1kZXYtc2VydmljZUB0bGEudml2b3guY29tIn0.5EdbxkcVSfXkNvi2VpN2VjKdVcbP7mZXZBa5eEi90G8")
  });

  test('kick all user from channel', () => {
    expect(vivoxToken.kickAllUserFromChannelByAdmin(ChannelType.NonPositionalChannels, "testchannel", 729614, new Date(Date.UTC(2016, 0, 1))))
      .toBe("e30.eyJpc3MiOiJibGluZG1lbG9uLWZvb2Jhci1kZXYiLCJleHAiOjE0NTE2MDY0MDAsInZ4YSI6ImtpY2siLCJ2eGkiOjcyOTYxNCwiZiI6InNpcDpCbGluZE1lbG9uLUZvb0Jhci1kZXYtQWRtaW5AdGxhLnZpdm94LmNvbSIsInQiOiJzaXA6Y29uZmN0bC1nLWJsaW5kbWVsb24udGVzdGNoYW5uZWxAdGxhLnZpdm94LmNvbSJ9.MdC1YMyfNVtT0lbCbhRYdg4p567OHT1gH74UhToSeBk")
  });

  test('mute', () => {
    expect(vivoxToken.mute("beef", "jerky", ChannelType.NonPositionalChannels, "testchannel", 123456, new Date(Date.UTC(2016, 0, 1))))
      .toBe("e30.eyJpc3MiOiJibGluZG1lbG9uLWZvb2Jhci1kZXYiLCJleHAiOjE0NTE2MDY0MDAsInZ4YSI6Im11dGUiLCJ2eGkiOjEyMzQ1Niwic3ViIjoic2lwOi5ibGluZG1lbG9uLWZvb2Jhci1kZXYuamVya3kuQHRsYS52aXZveC5jb20iLCJmIjoic2lwOi5ibGluZG1lbG9uLWZvb2Jhci1kZXYuYmVlZi5AdGxhLnZpdm94LmNvbSIsInQiOiJzaXA6Y29uZmN0bC1nLWJsaW5kbWVsb24tZm9vYmFyLWRldi50ZXN0Y2hhbm5lbEB0bGEudml2b3guY29tIn0.fTW2o1f_hgpJ6otm1faXZI0R2PbGYLgndg2zKaNmxJI");

    expect(vivoxToken.muteByAdmin("jerky", ChannelType.NonPositionalChannels, "testchannel", 654321, new Date(Date.UTC(2016, 0, 1))))
      .toBe("e30.eyJpc3MiOiJibGluZG1lbG9uLWZvb2Jhci1kZXYiLCJleHAiOjE0NTE2MDY0MDAsInZ4YSI6Im11dGUiLCJ2eGkiOjY1NDMyMSwic3ViIjoic2lwOi5ibGluZG1lbG9uLWZvb2Jhci1kZXYuamVya3kuQHRsYS52aXZveC5jb20iLCJmIjoic2lwOkJsaW5kTWVsb24tRm9vQmFyLWRldi1BZG1pbkB0bGEudml2b3guY29tIiwidCI6InNpcDpibGluZG1lbG9uLWZvb2Jhci1kZXYudGVzdGNoYW5uZWxAdGxhLnZpdm94LmNvbSJ9.CN-Sw23fPwXIrrCZQXlpydZgWN9dG7b0MzwCN-04ghY");
  });

  test('mute all user from channel', () => {
    expect(vivoxToken.muteAllUserFromChannel("beef", ChannelType.NonPositionalChannels, "testchannel", 102938, new Date(Date.UTC(2016, 0, 1))))
      .toBe("e30.eyJpc3MiOiJibGluZG1lbG9uLWZvb2Jhci1kZXYiLCJleHAiOjE0NTE2MDY0MDAsInZ4YSI6Im11dGUiLCJ2eGkiOjEwMjkzOCwiZiI6InNpcDouYmxpbmRtZWxvbi1mb29iYXItZGV2LmJlZWYuQHRsYS52aXZveC5jb20iLCJ0Ijoic2lwOmNvbmZjdGwtZy1ibGluZG1lbG9uLWZvb2Jhci1kZXYudGVzdGNoYW5uZWxAdGxhLnZpdm94LmNvbSJ9.vI76DDPmDJ1Hi4dfhsxjZntOJ7Hpi4ZdaxiMNOOuV2s");

    expect(vivoxToken.muteAllUserFromChannelByAdmin(ChannelType.NonPositionalChannels, "testchannel", 825647, new Date(Date.UTC(2016, 0, 1))))
      .toBe("e30.eyJpc3MiOiJibGluZG1lbG9uLWZvb2Jhci1kZXYiLCJleHAiOjE0NTE2MDY0MDAsInZ4YSI6Im11dGUiLCJ2eGkiOjgyNTY0NywiZiI6InNpcDpCbGluZE1lbG9uLUZvb0Jhci1kZXYtQWRtaW5AdGxhLnZpdm94LmNvbSIsInQiOiJzaXA6Y29uZmN0bC1nLWJsaW5kbWVsb24tZm9vYmFyLWRldi50ZXN0Y2hhbm5lbEB0bGEudml2b3guY29tIn0.N61--9ynatBkSHcroZYWut20v-vemVsIgxG3a-HDNDQ");
  });

  test('mute all user from channel exclude one user', () => {
    expect(vivoxToken.muteAllUserFromChannelExcludeOneUser("beef", "jerky", ChannelType.NonPositionalChannels, "testchannel", 675849, new Date(Date.UTC(2016, 0, 1))))
      .toBe("e30.eyJpc3MiOiJibGluZG1lbG9uLWZvb2Jhci1kZXYiLCJleHAiOjE0NTE2MDY0MDAsInZ4YSI6Im11dGUiLCJ2eGkiOjY3NTg0OSwic3ViIjoic2lwOi5ibGluZG1lbG9uLWZvb2Jhci1kZXYuamVya3kuQHRsYS52aXZveC5jb20iLCJmIjoic2lwOi5ibGluZG1lbG9uLWZvb2Jhci1kZXYuYmVlZi5AdGxhLnZpdm94LmNvbSIsInQiOiJzaXA6Y29uZmN0bC1nLWJsaW5kbWVsb24tZm9vYmFyLWRldi50ZXN0Y2hhbm5lbEB0bGEudml2b3guY29tIn0.za2EnpCqb8oYaRx-DbIsrfFywAeT__woUc1ZsuXahvU");

    expect(vivoxToken.muteAllUserFromChannelExcludeOneUserByAdmin("jerky", ChannelType.NonPositionalChannels, "testchannel", 961734, new Date(Date.UTC(2016, 0, 1))))
      .toBe("e30.eyJpc3MiOiJibGluZG1lbG9uLWZvb2Jhci1kZXYiLCJleHAiOjE0NTE2MDY0MDAsInZ4YSI6Im11dGUiLCJ2eGkiOjk2MTczNCwic3ViIjoic2lwOi5ibGluZG1lbG9uLWZvb2Jhci1kZXYuamVya3kuQHRsYS52aXZveC5jb20iLCJmIjoic2lwOkJsaW5kTWVsb24tRm9vQmFyLWRldi1BZG1pbkB0bGEudml2b3guY29tIiwidCI6InNpcDpjb25mY3RsLWctYmxpbmRtZWxvbi1mb29iYXItZGV2LnRlc3RjaGFubmVsQHRsYS52aXZveC5jb20ifQ.ljp3cmzxFandEesCQagEpXtdvdpVCYoXOdMXNw5sITo");
  });
});
var emailData =
  "From: foo@bar.com#/#\n" +
  "Subject: Nunc in justo eros. Aliquam.#/#\n" +
  "Date: 07-27-2016#/#\n" +
  "To: foo@bar.com#/#\n" +
  "Etiam convallis commodo tortor, dapibus auctor dolor semper consequat. Sed lobortis eros nec ante porta, eu placerat sapien interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi consectetur et odio vitae volutpat. Curabitur imperdiet orci metus, et dignissim nisl lacinia non. Aenean volutpat diam in lorem iaculis, sit amet volutpat nibh dictum. Quisque vel vulputate nisi. Nam a vestibulum turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum leo id velit aliquet, at vestibulum ipsum molestie. Cras eu lobortis libero. In rutrum non leo id ultricies. Aliquam in ex ut nibh placerat sollicitudin vitae id magna.##||##\n" +
  "\n" +
  "From: baz@foo.com#/#\n" +
  "Subject: Aenean cursus velit non arcu.#/#\n" +
  "Date: 08-11-2016#/#\n" +
  "To: baz@foo.com#/#\n" +
  "Cras ex leo, faucibus id mollis a, dignissim sit amet metus. Sed dui massa, mollis in tristique ut, auctor quis tortor. Donec egestas velit purus, eget laoreet urna venenatis id. Etiam eget ultrices tortor. Duis venenatis leo mi, non porta est molestie at. Nulla lacus nisl, dapibus convallis massa ut, dignissim euismod lacus. Ut vel magna lectus. Morbi sit amet vulputate arcu. Cras non ante arcu. Nam tempor iaculis ipsum eget tincidunt. Praesent imperdiet varius dui, vel egestas ipsum porta in. Sed suscipit massa in neque lobortis congue.##||##\n" +
  "\n" +
  "From: qux@bar.com#/#\n" +
  "Subject: Sed hendrerit felis in ex.#/#\n" +
  "Date: 06-25-2016#/#\n" +
  "To: qux@bar.com#/#\n" +
  "Nulla quis est vitae orci tincidunt convallis sit amet ut libero. Sed eu facilisis justo. Maecenas sed ultrices urna. Sed malesuada justo sed magna sodales, eget congue dolor convallis. Vestibulum vel consectetur nunc. Morbi at tincidunt turpis, eget imperdiet orci. Curabitur laoreet ipsum a quam facilisis, eu aliquet lectus viverra. Maecenas ullamcorper rutrum dui, ac aliquet mi pulvinar sit amet.##||##\n" +
  "\n" +
  "From: quux@foo.com#/#\n" +
  "Subject: Curabitur tincidunt elit nec risus.#/#\n" +
  "Date: 07-24-2016#/#\n" +
  "To: quux@foo.com#/#\n" +
  "Curabitur interdum dictum consectetur. Nulla facilisi. Quisque sed tellus consectetur, vestibulum quam sed, lacinia mauris. Nunc risus dolor, feugiat nec erat at, elementum tempor urna. Vivamus facilisis elementum congue. Cras dui libero, vehicula eget porttitor sed, sagittis quis dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam lacinia nulla nisi, vel finibus ligula sodales quis. Maecenas vulputate, leo auctor venenatis pretium, lectus elit eleifend odio, nec molestie ligula ex eget tellus. Nullam a nibh ut enim efficitur elementum. Nunc non elit vitae tortor iaculis ornare in id risus. Integer finibus lobortis lorem, id rutrum elit congue id. In hac habitasse platea dictumst.##||##\n" +
  "\n" +
  "From: garply@foo.com#/#\n" +
  "Subject: Integer nec nunc facilisis, ultricies.#/#\n" +
  "Date: 07-03-2016#/#\n" +
  "To: garply@foo.com#/#\n" +
  "Fusce rhoncus purus nisi, vel blandit felis fermentum sed. Vestibulum ultricies rutrum dui nec vehicula. Proin quis semper nulla. Maecenas congue, leo nec feugiat dapibus, dui metus facilisis elit, non finibus leo nisl at est. Donec varius, turpis non pulvinar sodales, nulla nulla posuere ligula, nec eleifend quam metus ut tortor. Sed semper vestibulum mattis. Nullam et ornare eros. Aliquam sed pellentesque dui, ut consequat neque. Integer luctus turpis ultrices, congue erat mattis, vehicula tellus. Pellentesque tincidunt posuere nibh pretium tincidunt. In hac habitasse platea dictumst.";

function mailCount(emailData) {
  let emails = emailData.split("##||##");
  let dateRange = emails
    .map((email) => new Date(email.split("#/#")[2].replace("Date: ", "")))
    .sort((a, b) => a - b);

  console.log(`Count of Email: ${emails.length}`);
  console.log(
    `Date Range: ${dateRange[0].toDateString()} - ${dateRange[
      dateRange.length - 1
    ].toDateString()}`
  );
}

mailCount(emailData);

// console output

// Count of Email: 5
// Date Range: Sat Jun 25 2016 - Thu Aug 11 2016

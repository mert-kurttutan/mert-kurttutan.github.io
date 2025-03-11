# A case for nushell, my own experience

## Cross-Platform Experience

One of the features I favor for any type of software is its cross-platform compatibility. Shell commands work out of the box on Windows, macOS, and Linux making it easier to work across different OS environments.

## Easy Installation

Nushell is widely available through various package managers, making installation straightforward. Whether using Windows, macOS, or Linux, you can install Nushell with minimal effort. It also available trhouh cargo package manager, making the installation process cross-platform.

## Clear and Helpful Error Messages

The error messages in Nushell are well-designed and easy to understand. Given that Sophie Turner, who contributed to Rust’s error messages, also worked on Nushell’s, it’s not surprising that they provide useful guidance when debugging commands.

## Written in Rust

Nushell is built with Rust, benefiting from its memory safety and performance advantages. This ensures a stable and secure environment while leveraging Rust’s ecosystem.

## Plugin Structure

Nushell supports an extensible plugin system, allowing users to enhance functionality with custom commands and integrations. This makes it adaptable to various workflows and user needs. This I will delve into more in the future.

## Community-Driven Development

The project is developed by an active and growing community. Contributions from developers worldwide help improve the shell, ensuring regular updates and new features. As far as I could see, they have yet to receive donation, incredible that they could do this voluntarily.

## Data-Oriented Approach

Unlike traditional shells that work primarily with plain text, Nushell treats command output as structured data. This makes it easier to manipulate and analyze information, streamlining data processing tasks. I am excite to explore this further.

## Command Autocompletion and Hints

Nushell provides intelligent autocompletion and helpful hints, improving usability and reducing the need to remember complex command syntax. It does this in its default setting, out of box smooth experience.

## High-Quality Documentation

The documentation for Nushell is well-organized and thorough, making it easier for new users to get started and for experienced users to explore advanced features. It goes into detail about the functions, commands, and its design philosophy.

## Conclusion

Nushell offers a fresh approach to shell scripting and command-line interactions. With its cross-platform support, structured data handling, and strong community backing, it is a compelling choice for anyone looking to enhance their shell experience.

## Binary Size
I have seen some people online mentioning it 30x the size of bash. That number is kind of misleading, since nushell does more that bash does having binaries, structure data and plugin structure. Another point using the stat 30x is deceving as well becuase it is not like it will remain 30x the size of bash, it will grow as the features grow. The number to consider how much more in size, which is only around 30 mb, which is not important for the hardware we use today considering many other things we use today.
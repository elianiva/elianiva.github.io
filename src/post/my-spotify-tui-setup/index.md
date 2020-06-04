---
title: "My Spotify TUI Setup"
date: "2020-06-03"
cover: "./cover.png"
tags:
  - linux
  - tui software
---

## Introduction
[[snippet]]
| Hi! This time I will explain about how I setup my spotifyd + spotify-tui to enjoy music from spotify without their resource heavy app. It's not Spotify's fault, it's Electron. Not that I hate it, I think it's awesome. It just feels heavy on my machine. I still have 4GB of RAMs lol, so that's reasonable.

## Spotifyd
### What Is Spotifyd?
Spotifyd is the daemon that is used to run spotify-tui. So, basically spotify-tui is just a front-end for spotify that needs some sort of daemon. You can use spotify-tui with any official Spotify client. For example, spotify-tui will read your phone as an available device but that will be a hassle having to open spotify on your phone to use spotify on your desktop.

Spotifyd provides a service that can be used to play spotify. It's more lightweight and supports more platform than the official client. You can check their [github page](https://github.com/Spotifyd/spotifyd/) for more details.

### Installation
I'm using Arch so I will use the almighty AUR to make my life easier. If you're on any other distro, you can either take the binary or build it yourself. To install it on Arch (or any Arch based distro), you can use any AUR helper or download the `PKGBUILD` and run `makepkg -si`.

``` bash
# yay
$ yay -S spotifyd-full

# trizen
$ trizen spotifyd-full
```

I personally use `spotifyd-full` from AUR. Spotify-full is spotifyd with all feature flags enabled. If you want a minimal install, you can use `spotifyd` instead. If you don't like to wait for it to compile, just take one with `-bin` suffix. For more details on feature flags, you can refer to their [github page](https://github.com/Spotifyd/spotifyd/blob/master/README.md#feature-flags).

### Configuration
Configuring spotifyd is quite easy actually, they gave you a [default configuration](https://github.com/Spotifyd/spotifyd#configuration) to help you get going. Here's mine.

``` ini
[global]
username = <your username>
password = <your password>
# password_cmd = command_that_writes_password_to_stdout
# use_keyring = true
backend = pulseaudio
# device = alsa_audio_device  # omit for macOS
# control = alsa_audio_device  # omit for macOS
# mixer = PCM
volume_controller = alsa_linear  # use softvol for macOS
device_name = arch
bitrate = 320
cache_path = /home/elianiva/.config/spotifyd
no_audio_cache = false
volume_normalisation = true
normalisation_pregain = -4
device_type = computer
```
I'll explain the configuration briefly.

- **Username**

    Fill this field with your _real_ username. You can get one from [here](https://www.spotify.com/us/account/set-device-password/) and it's roughly looks like **21zu9n5i8jtipipiwxrfyglhohmq**. It's **NOT** your usual username that you can change, this username is given by Spotify.

- **Password**

    Fill this field with your spotify device password which you can make by visiting [this link](https://www.spotify.com/us/account/set-device-password/). If you want to put this configuration on github or something like that, **DO NOT USE THIS METHOD**. If you use this method, don't include it on your repo.

- **Password Cmd**

    Fill this field with a program that outputs your password through stdout. `pass` can do this. For more details, you can check out [their website](https://www.passwordstore.org/). I personally don't use this so I can't give you any guide.

- **Use Keyring**

    Fill this field if you want spotifyd to look up any password on your machine. I don't have any experience with keyrings and such so I can't give you any guide on this. It's explained on [spotifyd readme](https://github.com/Spotifyd/spotifyd#configuration-file) though, so you can check that.

- **Backend**

    As the name suggest, this field sets the backend used by spotifyd. I use pulseaudio because pulseaudio is able to set per-app volume. I know that ALSA can do that as well but it's just way too much tinkering.

- **Device**

    This field sets the device that is used for ALSA to stream audio to which can be listed by running `aplay -L`. If you are using pulseaudio like me, just comment this section.

- **Control**

    This field sets the controller that is used for ALSA to control its audio to. If you are using pulseaudio like me, you can comment this section as well.

- **Mixer**

    This field sets the ALSA that is used by spotifyd. Again, you can comment this is you're using pulseaudio.

- **Volume Controller**

    This field sets the volume controller for spotifyd. Available options are `alsa`, `alsa_linear` and `softvol`.

- **Device Name**

    This field sets the device name for spotifyd. You can fill this with whatever you want.

- **Bitrate**

    This field sets the bitrate for your audio. Available options are **96**, **160**, and **320**. I use 320 which is the highest option available cuz why not ツ

- **Cache Path**

    This field defines where to put the cached audio. It can't accept `~` or `$HOME` for home directory shorthand, so you have to fill the full path like `/home/username/`.

- **No Audio Cache**

    If this field sets to true, spotifyd won't cache the audio. I set this to false because I want my audio to be cached so it loads faster and it saves _a lot_ of bandwith.

- **Volume Normalisation**

    This field set whether or not spotifyd normalize the volume of an audio that you're playing. I enable this because I want all my song to be played with the same volume.

- **Normalisation Pregain**

    Basically, it sets how loud or quiet the song will be. The higher you set it, then it will be louder and vice versa. For example, if you set it `-10` which is the default option then it won't be as loud as if you set it to `-4`. You might tinker around with this to get what you like.

- **Device Type**

    This sets the device type for spotifyd that is displayed on Spotify clients. You can fill this whatever you want, but I set mine to `computer` because it's a computer. Other available options are `unknown`, `computer`, `tablet`, `smartphone`, `speaker`, `tv`, `avr` (Audio/Video Receiver), `stb` (Set-Top Box), and `audiodongle`.

Now that spotifyd has been configured, let's move on to spotify-tui itself.

## Spotify TUI
### What Is Spotify Tui?
Spotify TUI is a spotify client or frontend based on Terminal User Interface written in Rust. It's an awesome alternative for the official Spotify client.

I like this software because it's lightweight and it's based on TUI which can be controlled fully with a keyboard. I also like its UI, it's simple and straight forward. For more details about this software, you can visit their [github page](https://github.com/Rigellute/spotify-tui).

### Installation
Installing spotify-tui is pretty straight forward. I use Arch so I can just use AUR. If you're on the other distro, check out their [readme](https://github.com/Rigellute/spotify-tui/blob/master/README.md) for installation.

``` bash
# yay
$ yay -S spotifyd-full

# trizen
$ trizen spotifyd-full
```

After installing it, the executable binary is called `spt`. I got confused the first time I installed it because I missed the part where it says

> The binary executable is `spt`

So don't get confused when you type `spotify-tui` and nothing happens.

### Authentication
Spotify-tui needs to be authenticated by spotify. Don't worry though, it's super simple. Just run `spt` and fill out the needed field which are:

- **Client ID**

    Your spotify client ID which can be acquired from [Spotify Dashboard](https://developer.spotify.com/dashboard/applications) then click on `Create a Client iD`. Then go to `Edit Settings`, add `http://localhost:8888/callback` to Redirect URIs

- **Client Secret**

    Your spotify client secret which available on the same website as your spotify client ID.

After filling those out, you will get redirected to Spotify website that ask for your permissions.

### Configuration
There's a lot of spotify-tui configuration which can make this post longer. I use the default configuration for it and satisfied enough. If you want to configure it yourself, please refer to [their guide](https://github.com/Rigellute/spotify-tui/blob/master/README.md#configuration).

## Conclusion
There we have it. Spotifyd + Spotify-tui. A Lightweight alternative for the official spotify client. Unfortunately, this setup doesn't support offline mode yet. I would really like to see this feature implemented. Huge thank you goes to the developers of spotifyd and spotify-tui. Anyway, thanks for reading my post and have a nice day!

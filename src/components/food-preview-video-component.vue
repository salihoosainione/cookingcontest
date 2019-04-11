<template>
    <b-container fluid class="mt-5">
        <b-container>
            <b-row>
                <b-col md="5">
                    <div class="text-wrapper">
                        <h4>ما شما را به رستوران دعوت می کنیم</h4>
                        <p class="lead detail text-justify">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                            گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                        </p>
                    </div>
                    <div class="detail-day-wrapper">
                        <b-row>
                            <b-col md="1" class="p-0">
                                <span>
                                    <i class="far fa-clock clock-icon"></i>
                                </span>
                            </b-col>
                            <b-col md="11" class="p-0">
                                <ul class="day-information-parent">
                                    <li>
                                        <span class="day">
                                            دوشنبه - جمعه:
                                        </span>
                                        <span class="time">12صبح - 12صبح</span>
                                    </li>
                                    <li>
                                        <span class="day">
                                            دوشنبه - جمعه:
                                        </span>
                                        <span class="time">12صبح - 12صبح</span>
                                    </li>
                                </ul>
                                <b-button class="btn custom-btn">نمایش روزها</b-button>
                            </b-col>
                        </b-row>
                    </div>
                </b-col>
                <b-col md="7">
                    <video-player class="video-player-box"
                                  ref="videoPlayer"
                                  :options="playerOptions"
                                  :playsinline="true"
                                  customEventName="customstatechangedeventname"

                                  @play="onPlayerPlay($event)"
                                  @pause="onPlayerPause($event)"
                                  @ended="onPlayerEnded($event)"
                                  @waiting="onPlayerWaiting($event)"
                                  @playing="onPlayerPlaying($event)"
                                  @loadeddata="onPlayerLoadeddata($event)"
                                  @timeupdate="onPlayerTimeupdate($event)"
                                  @canplay="onPlayerCanplay($event)"
                                  @canplaythrough="onPlayerCanplaythrough($event)"
                                  @statechanged="playerStateChanged($event)"
                                  @ready="playerReadied">
                    </video-player>
                </b-col>
            </b-row>
        </b-container>
    </b-container>
</template>

<script>
    import 'video.js/dist/video-js.css';
    import {videoPlayer} from 'vue-video-player'

    export default {
        name: "food-preview-component",
        data() {
            return {
                playerOptions: {
                    // videojs options
                    muted: true,
                    language: 'en',
                    playbackRates: [0.7, 1.0, 1.5, 2.0],
                    sources: [{
                        type: "video/mp4",
                        src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
                    }],
                    poster: "/static/images/author.jpg",
                }
            }
        },
        components: {
            videoPlayer
        },
        computed: {
            player() {
                return this.$refs.videoPlayer.player
            }
        },
    }
</script>

<style>
    #vjs_video_3 {
        width: 100% !important;
        height: 270px !important;
    }

    .video-js .vjs-big-play-button {
        top: 135px !important;
        left: 270px !important;
    }
</style>

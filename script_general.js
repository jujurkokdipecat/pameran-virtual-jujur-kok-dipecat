(function () {
    var a = {};
    function trans(c, d) {
        var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        a[e[0x0]] = e;
        return '';
    }
    function regTextVar(c, d) {
        var e = ![];
        d = d['toLowerCase']();
        var f = function () {
            var o = this['get']('data');
            o['updateText'](o['translateObjs'][c]);
        };
        var g = function (o) {
            var p = o['data']['nextSelectedIndex'];
            if (p >= 0x0) {
                var q = o['source']['get']('items')[p];
                var r = function () {
                    q['unbind']('begin', r, this);
                    f['call'](this);
                };
                q['bind']('begin', r, this);
            } else
                f['call'](this);
        };
        var h = function (o) {
            return function (p) {
                if (o in p) {
                    f['call'](this);
                }
            }['bind'](this);
        };
        var i = function (o, p) {
            return function (q, r) {
                if (o == q && p in r) {
                    f['call'](this);
                }
            }['bind'](this);
        };
        var j = function (o, p, q) {
            for (var r = 0x0; r < o['length']; ++r) {
                var s = o[r];
                var t = s['get']('selectedIndex');
                if (t >= 0x0) {
                    var u = p['split']('.');
                    var v = s['get']('items')[t];
                    if (q !== undefined && !q['call'](this, v))
                        continue;
                    for (var w = 0x0; w < u['length']; ++w) {
                        if (v == undefined)
                            return '';
                        v = 'get' in v ? v['get'](u[w]) : v[u[w]];
                    }
                    return v;
                }
            }
            return '';
        };
        var k = function (o) {
            var p = o['get']('player');
            return p !== undefined && p['get']('viewerArea') == this['getMainViewer']();
        };
        switch (d) {
        case 'title':
        case 'subtitle':
            var m = function () {
                switch (d) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (m) {
                return function () {
                    var o = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!e) {
                        for (var p = 0x0; p < o['length']; ++p) {
                            o[p]['bind']('changing', g, this);
                        }
                        e = !![];
                    }
                    return j['call'](this, o, m, k);
                };
            }
            break;
        default:
            if (d['startsWith']('quiz.') && 'Quiz' in TDV) {
                var n = undefined;
                var m = function () {
                    switch (d) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var o = /quiz\.([\w_]+)\.(.+)/['exec'](d);
                        if (o !== undefined) {
                            n = o[0x1];
                            switch ('quiz.' + o[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (m) {
                    return function () {
                        var o = this['get']('data')['quiz'];
                        if (o) {
                            if (!e) {
                                if (n != undefined)
                                    o['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], i['call'](this, n, m), this);
                                else
                                    o['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], h['call'](this, m), this);
                                e = !![];
                            }
                            try {
                                var p = n != undefined ? o['getObjective'](n, m) : o['get'](m);
                                if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    p += 0x1;
                                return p;
                            } catch (q) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, c) {
        var d = {};
        d['player'] = player;
        d['playList'] = c;
        function e(h) {
            for (var j = 0x0; j < h['length']; ++j) {
                var k = h[j];
                if ('id' in k)
                    player[k['id']] = k;
            }
        }
        if (d['questions']) {
            e(d['questions']);
            for (var f = 0x0; f < d['questions']['length']; ++f) {
                var g = d['questions'][f];
                e(g['options']);
            }
        }
        if (d['objectives']) {
            e(d['objectives']);
        }
        if (d['califications']) {
            e(d['califications']);
        }
        if (d['score']) {
            player[d['score']['id']] = d['score'];
        }
        if (d['question']) {
            player[d['question']['id']] = d['question'];
        }
        if (d['timeout']) {
            player[d['timeout']['id']] = d['timeout'];
        }
        player['get']('data')['translateObjs'] = a;
        return d;
    }
    var b = {"mouseWheelEnabled":true,"scrollBarOpacity":0.5,"horizontalAlign":"left","vrPolyfillScale":0.75,"id":"rootPlayer","propagateClick":false,"overflow":"hidden","start":"this.init()","width":"100%","mediaActivationMode":"window","downloadEnabled":false,"paddingLeft":0,"scripts":{"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"historyGoForward":TDV.Tour.Script.historyGoForward,"shareSocial":TDV.Tour.Script.shareSocial,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"historyGoBack":TDV.Tour.Script.historyGoBack,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"quizFinish":TDV.Tour.Script.quizFinish,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"cloneCamera":TDV.Tour.Script.cloneCamera,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"textToSpeech":TDV.Tour.Script.textToSpeech,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getMediaByName":TDV.Tour.Script.getMediaByName,"isPanorama":TDV.Tour.Script.isPanorama,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getComponentByName":TDV.Tour.Script.getComponentByName,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getPixels":TDV.Tour.Script.getPixels,"setMapLocation":TDV.Tour.Script.setMapLocation,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"init":TDV.Tour.Script.init,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setLocale":TDV.Tour.Script.setLocale,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getMainViewer":TDV.Tour.Script.getMainViewer,"initQuiz":TDV.Tour.Script.initQuiz,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"unregisterKey":TDV.Tour.Script.unregisterKey,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"registerKey":TDV.Tour.Script.registerKey,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"playAudioList":TDV.Tour.Script.playAudioList,"setValue":TDV.Tour.Script.setValue,"existsKey":TDV.Tour.Script.existsKey,"initGA":TDV.Tour.Script.initGA,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"showWindow":TDV.Tour.Script.showWindow,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getKey":TDV.Tour.Script.getKey,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getOverlays":TDV.Tour.Script.getOverlays,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"quizShowScore":TDV.Tour.Script.quizShowScore,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"showPopupImage":TDV.Tour.Script.showPopupImage,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"resumePlayers":TDV.Tour.Script.resumePlayers,"mixObject":TDV.Tour.Script.mixObject,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"translate":TDV.Tour.Script.translate,"quizStart":TDV.Tour.Script.quizStart,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"openLink":TDV.Tour.Script.openLink,"showPopupMedia":TDV.Tour.Script.showPopupMedia},"scrollBarMargin":2,"backgroundPreloadEnabled":true,"paddingRight":0,"defaultVRPointer":"laser","scrollBarWidth":10,"scrollBarVisible":"rollOver","children":["this.MainViewer"],"toolTipHorizontalAlign":"center","height":"100%","desktopMipmappingEnabled":false,"definitions": [{"class":"PanoramaCamera","automaticZoomSpeed":10,"id":"panorama_E0BB09D5_EA30_731A_41E9_02B7D2C08F91_camera","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"initialSequence":"this.sequence_E3428A3B_EA30_510D_41E2_D88D8962E062"},{"class":"PlayList","items":[{"class":"PanoramaPlayListItem","media":"this.panorama_E0BB09D5_EA30_731A_41E9_02B7D2C08F91","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_E0BB09D5_EA30_731A_41E9_02B7D2C08F91_camera"},{"class":"PanoramaPlayListItem","media":"this.panorama_E36CD4AD_EA30_5105_41D2_C6E712E4B375","end":"this.trigger('tourEnded')","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_E36CD4AD_EA30_5105_41D2_C6E712E4B375_camera"}],"id":"mainPlayList"},{"subtitlesTextShadowHorizontalLength":1,"playbackBarOpacity":1,"id":"MainViewer","toolTipBackgroundColor":"#F6F6F6","subtitlesTop":0,"propagateClick":false,"subtitlesTextShadowColor":"#000000","toolTipShadowVerticalLength":0,"subtitlesFontSize":"3vmin","progressBarBackgroundColor":["#3399FF"],"toolTipFontFamily":"Arial","playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBorderColor":"#000000","playbackBarBottom":5,"transitionMode":"blending","subtitlesBackgroundOpacity":0.2,"subtitlesPaddingBottom":5,"toolTipShadowColor":"#333333","progressBackgroundColor":["#FFFFFF"],"playbackBarProgressBackgroundColorDirection":"vertical","toolTipTextShadowOpacity":0,"width":"100%","toolTipShadowSpread":0,"subtitlesBorderColor":"#FFFFFF","playbackBarBackgroundColor":["#FFFFFF"],"progressBarOpacity":1,"playbackBarHeight":10,"toolTipPaddingBottom":4,"playbackBarHeadShadowHorizontalLength":0,"subtitlesTextDecoration":"none","subtitlesTextShadowBlurRadius":0,"toolTipShadowBlurRadius":3,"playbackBarHeadWidth":6,"playbackBarHeadBackgroundColorDirection":"vertical","doubleClickAction":"toggle_fullscreen","playbackBarProgressBorderSize":0,"progressBottom":0,"playbackBarBackgroundColorDirection":"vertical","firstTransitionDuration":0,"height":"100%","paddingTop":0,"progressHeight":10,"subtitlesFontFamily":"Arial","subtitlesPaddingTop":5,"playbackBarProgressBorderRadius":0,"progressBorderSize":0,"playbackBarRight":0,"playbackBarProgressBackgroundColor":["#3399FF"],"progressBarBorderRadius":0,"class":"ViewerArea","subtitlesShadow":false,"paddingBottom":0,"toolTipShadowHorizontalLength":0,"playbackBarHeadShadowOpacity":0.7,"toolTipOpacity":1,"vrPointerSelectionColor":"#FF6600","subtitlesGap":0,"subtitlesHorizontalAlign":"center","shadow":false,"subtitlesOpacity":1,"subtitlesBackgroundColor":"#000000","subtitlesVerticalAlign":"bottom","progressBarBorderSize":0,"playbackBarHeadShadowVerticalLength":0,"toolTipPaddingLeft":6,"toolTipFontStyle":"normal","playbackBarProgressBackgroundColorRatios":[0],"transitionDuration":500,"subtitlesTextShadowOpacity":1,"toolTipFontColor":"#606060","playbackBarBorderColor":"#FFFFFF","vrPointerSelectionTime":2000,"toolTipShadowOpacity":1,"toolTipFontSize":"1.11vmin","subtitlesBorderSize":0,"subtitlesFontColor":"#FFFFFF","vrPointerColor":"#FFFFFF","playbackBarBorderRadius":0,"progressBorderRadius":0,"playbackBarProgressBorderColor":"#000000","paddingLeft":0,"subtitlesFontWeight":"normal","playbackBarHeadBorderRadius":0,"progressBackgroundOpacity":1,"paddingRight":0,"subtitlesPaddingLeft":5,"progressBackgroundColorRatios":[0],"playbackBarHeadShadowBlurRadius":3,"playbackBarProgressOpacity":1,"progressLeft":0,"playbackBarHeadBorderColor":"#000000","toolTipHorizontalAlign":"center","playbackBarLeft":0,"subtitlesBottom":50,"toolTipBorderRadius":3,"playbackBarHeadHeight":15,"subtitlesPaddingRight":5,"playbackBarBorderSize":0,"playbackBarHeadShadowColor":"#000000","toolTipFontWeight":"normal","progressRight":0,"playbackBarHeadBackgroundColorRatios":[0,1],"progressOpacity":1,"subtitlesTextShadowVerticalLength":1,"toolTipTextShadowColor":"#000000","toolTipBorderSize":1,"minHeight":50,"progressBarBackgroundColorDirection":"vertical","toolTipBorderColor":"#767676","minWidth":100,"borderRadius":0,"toolTipPaddingTop":4,"toolTipDisplayTime":600,"playbackBarHeadBorderSize":0,"progressBarBackgroundColorRatios":[0],"data":{"name":"Main Viewer"},"playbackBarHeadShadow":true,"progressBarBorderColor":"#000000","progressBackgroundColorDirection":"vertical","toolTipTextShadowBlurRadius":3,"playbackBarHeadOpacity":1,"toolTipPaddingRight":6,"borderSize":0,"playbackBarBackgroundOpacity":1,"displayTooltipInTouchScreens":true},{"label":trans('panorama_E0BB09D5_EA30_731A_41E9_02B7D2C08F91.label'),"id":"panorama_E0BB09D5_EA30_731A_41E9_02B7D2C08F91","partial":false,"pitch":0,"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_E0BB09D5_EA30_731A_41E9_02B7D2C08F91_t.jpg","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","width":6144,"tags":"ondemand","url":"media/panorama_E0BB09D5_EA30_731A_41E9_02B7D2C08F91_0/{face}/0/{row}_{column}.jpg","rowCount":2,"colCount":12,"height":1024},{"class":"TiledImageResourceLevel","width":3072,"tags":["ondemand","preload"],"url":"media/panorama_E0BB09D5_EA30_731A_41E9_02B7D2C08F91_0/{face}/1/{row}_{column}.jpg","rowCount":1,"colCount":6,"height":512},{"class":"TiledImageResourceLevel","width":6144,"tags":"mobilevr","url":"media/panorama_E0BB09D5_EA30_731A_41E9_02B7D2C08F91_0/{face}/vr/0.jpg","rowCount":1,"colCount":6,"height":1024}]}}],"adjacentPanoramas":[{"class":"AdjacentPanorama","backwardYaw":82.69,"panorama":"this.panorama_E36CD4AD_EA30_5105_41D2_C6E712E4B375","select":"this.mainPlayList.set('selectedIndex', 1)","yaw":-87.14,"distance":5.79}],"class":"Panorama","vfov":180,"data":{"label":"fix0000"},"hfovMin":"150%","hfov":360,"thumbnailUrl":"media/panorama_E0BB09D5_EA30_731A_41E9_02B7D2C08F91_t.jpg","overlays":["this.overlay_E19E1A23_EA30_713D_41D7_D8377CC07E96"],"hfovMax":130},{"class":"PanoramaCamera","automaticZoomSpeed":10,"id":"panorama_E36CD4AD_EA30_5105_41D2_C6E712E4B375_camera","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"initialSequence":"this.sequence_E3460A3D_EA30_5105_41E1_BD2F0F4FA0C9"},{"label":trans('panorama_E36CD4AD_EA30_5105_41D2_C6E712E4B375.label'),"id":"panorama_E36CD4AD_EA30_5105_41D2_C6E712E4B375","partial":false,"pitch":0,"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_E36CD4AD_EA30_5105_41D2_C6E712E4B375_t.jpg","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","width":6144,"tags":"ondemand","url":"media/panorama_E36CD4AD_EA30_5105_41D2_C6E712E4B375_0/{face}/0/{row}_{column}.jpg","rowCount":2,"colCount":12,"height":1024},{"class":"TiledImageResourceLevel","width":3072,"tags":["ondemand","preload"],"url":"media/panorama_E36CD4AD_EA30_5105_41D2_C6E712E4B375_0/{face}/1/{row}_{column}.jpg","rowCount":1,"colCount":6,"height":512},{"class":"TiledImageResourceLevel","width":6144,"tags":"mobilevr","url":"media/panorama_E36CD4AD_EA30_5105_41D2_C6E712E4B375_0/{face}/vr/0.jpg","rowCount":1,"colCount":6,"height":1024}]}}],"adjacentPanoramas":[{"class":"AdjacentPanorama","backwardYaw":-87.14,"panorama":"this.panorama_E0BB09D5_EA30_731A_41E9_02B7D2C08F91","select":"this.mainPlayList.set('selectedIndex', 0)","yaw":82.69,"distance":6.03}],"class":"Panorama","vfov":180,"data":{"label":"fix0001"},"hfovMin":"150%","hfov":360,"thumbnailUrl":"media/panorama_E36CD4AD_EA30_5105_41D2_C6E712E4B375_t.jpg","overlays":["this.overlay_E18F8A28_EA30_710B_41B3_C5FF6C3CADC8"],"hfovMax":130},{"class":"PanoramaPlayer","zoomEnabled":true,"viewerArea":"this.MainViewer","displayPlaybackBar":true,"arrowKeysAction":"translate","touchControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer","gyroscopeVerticalDraggingEnabled":true,"mouseControlMode":"drag_rotation"},{"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","easing":"linear","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5}],"id":"sequence_E3428A3B_EA30_510D_41E2_D88D8962E062"},{"class":"HotspotPanoramaOverlay","rollOverDisplay":false,"areas":["this.HotspotPanoramaOverlayArea_E62FAA60_EA30_713B_41CC_9A580EF3ECCE"],"enabledInCardboard":true,"useHandCursor":true,"items":[{"image":"this.AnimatedImageResource_E52B4F2D_EA31_EF05_41E0_CEDAA72BE515","pitch":-16.36,"yaw":-87.14,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","data":{"label":"GoToFix0001"},"vfov":9.21,"distance":100,"horizontalAlign":"center","verticalAlign":"middle","hfov":24.16}],"id":"overlay_E19E1A23_EA30_713D_41D7_D8377CC07E96","data":{"label":"GoToFix0001"},"maps":[]},{"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","easing":"linear","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5}],"id":"sequence_E3460A3D_EA30_5105_41E1_BD2F0F4FA0C9"},{"class":"HotspotPanoramaOverlay","rollOverDisplay":false,"areas":["this.HotspotPanoramaOverlayArea_E614D25D_EA31_B105_4193_1D424F8E47C7"],"enabledInCardboard":true,"useHandCursor":true,"items":[{"image":"this.AnimatedImageResource_E52B0F2D_EA31_EF05_41D1_83CE9CCB268E","pitch":-15.75,"yaw":82.69,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","data":{"label":"GoToFix0000"},"vfov":12.67,"distance":100,"horizontalAlign":"center","verticalAlign":"middle","hfov":31.1}],"id":"overlay_E18F8A28_EA30_710B_41B3_C5FF6C3CADC8","data":{"label":"GoToFix0000"},"maps":[]},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 1)","id":"HotspotPanoramaOverlayArea_E62FAA60_EA30_713B_41CC_9A580EF3ECCE"},{"class":"AnimatedImageResource","colCount":4,"rowCount":6,"frameDuration":41,"id":"AnimatedImageResource_E52B4F2D_EA31_EF05_41E0_CEDAA72BE515","frameCount":24,"levels":[{"class":"ImageResourceLevel","url":"media/res_E736234D_EA30_5705_41D7_B5D6850D0F30_0.png","width":1080,"height":660}]},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 0)","id":"HotspotPanoramaOverlayArea_E614D25D_EA31_B105_4193_1D424F8E47C7"},{"class":"AnimatedImageResource","colCount":4,"rowCount":6,"frameDuration":41,"id":"AnimatedImageResource_E52B0F2D_EA31_EF05_41D1_83CE9CCB268E","frameCount":24,"levels":[{"class":"ImageResourceLevel","url":"media/res_E736234D_EA30_5705_41D7_B5D6850D0F30_0.png","width":1080,"height":660}]}],"paddingTop":0,"mobileMipmappingEnabled":false,"layout":"absolute","paddingBottom":0,"minHeight":20,"class":"Player","minWidth":20,"borderRadius":0,"gap":10,"shadow":false,"contentOpaque":false,"scrollBarColor":"#000000","data":{"name":"Player508","defaultLocale":"en","textToSpeechConfig":{"pitch":1,"speechOnTooltip":false,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"volume":1,"rate":1},"locales":{"en":"locale/en.txt"}},"verticalAlign":"top","borderSize":0};
    if (b['data'] == undefined)
        b['data'] = {};
    b['data']['translateObjs'] = a;
    b['data']['history'] = {};
    b['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](b);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2020.4.19.js.map
//Generated with v2020.4.19, Tue Jun 8 2021
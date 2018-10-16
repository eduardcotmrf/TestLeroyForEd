/*
 * Copyright (c) 2016 by Marfeel Solutions (http://www.marfeel.com)
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Marfeel Solutions S.L and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Marfeel Solutions S.L and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Marfeel Solutions SL.
 */
import Mad from 'marfeel/touch/mad/Mad';
import TwisterFactory from 'marfeel/touch/adservers/TwisterFactory';
import HeaderBidding from 'marfeel/touch/adservers/HeaderBidding';
import {PulsePointBidder, SovrnBidder} from 'marfeel/touch/adservers/HeaderBidders';
import Metrics from 'marfeel/touch/metrics/Metrics';

export default {
    nativeInitializer() {},
    webInitializer() {
        //metrics
        const UGA = {
            trackCode : 'UGA-test',
            options: {
                name: 'UGA-test'
            }
        };
        Metrics.addUniversalAnalytics(UGA);
        // ads
        const HBsizes = {
            '300x250': {
                pulsePointId: '',
                sovrnId: ''
            },
            '300x600': {
                pulsePointId: '',
                sovrnId: ''
            },
            '320x50': {
                pulsePointId: ''
            },
            '160x600': {
                pulsePointId: '',
                sovrnId: ''
            },
            '728x90': {
                pulsePointId: '',
                sovrnId: ''
            }
        };
        const headerBidding = {
            generateBidders(size) {
                let bidders = [];
                const {pulsePointId, sovrnId} = HBsizes[size];
                if (pulsePointId) {
                    bidders.push(PulsePointBidder('pulseTestAccount', pulsePointId, size));
                }
                if (sovrnId) {
                    bidders.push(SovrnBidder(sovrnId, size));
                }
                return bidders;
            }
        };
        const twister = TwisterFactory
            .buildWithAdNetwork('adex')
            .and('headerBidding', [headerBidding], HeaderBidding)
            .and('facebook', [1715891948661649, '300x250', 'fbTestAccount'])
            .inThisOrder();
        Mad.registerAdServer(twister);
    }
};

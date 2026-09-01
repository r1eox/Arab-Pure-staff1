document.addEventListener('DOMContentLoaded', function () {
  const moduleContent = document.getElementById('moduleContent');
  const navButtons = document.querySelectorAll('.nav-item');
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileBackdrop = document.getElementById('mobileBackdrop');

  function applySidebarModuleColors() {
    navButtons.forEach((button) => {
      const def = moduleDefs[button.dataset.module];
      if (!def) return;
      button.style.setProperty('--nav-accent', def.accent);
      button.style.setProperty('--nav-accent-soft', def.accentSoft);
    });
  }

  const moduleDefs = {
    events: {
      title: 'نظام معالجة وتجهيز الجرد - قسم الإيفنت تيم',
      inputLabel: '1. المدخلات (النص الخام / الاستبيانات):',
      outputLabel: '2. المخرجات (نتيجة الجرد للبوت):',
      reportLabel: '3. التقرير الأسبوعي (جاهز للنسخ):',
      authorLabel: 'منشئ التقرير (اسمك):',
      authorPlaceholder: 'أدخل اسمك أو منشن الحساب...',
      inputPlaceholder: 'الصق بيانات الاستبيان هنا...',
      outRoleId: '1135000856278880330',
      outRoleMention: '<@&1135000856278880330>',
      splitRegex: /={3,}/,
      sourceKey: 'الايدي',
      roleKeyMatcher: /الرتبة/i,
      evalKeyMatcher: /التقيم|التقييم/i,
      useUserIdAsSource: true,
      reportOverride: null,
      accent: '#9b59b6',
      accentSoft: 'rgba(155, 89, 182, 0.15)'
    },
    interviews: {
      title: 'نظام معالجة وجرد قسم الانترفيو',
      inputLabel: '1. المدخلات (استبيانات الانترفيو):',
      outputLabel: '2. المخرجات (نتيجة الجرد المنسقة):',
      reportLabel: '3. نموذج التقرير الأسبوعي (جاهز للنسخ):',
      authorLabel: 'منشئ التقرير (اسمك/المنشن):',
      authorPlaceholder: 'أدخل اسمك...',
      inputPlaceholder: 'الصق استبيانات قسم الانترفيو هنا...',
      outRoleId: '1135000855872020513',
      outRoleMention: '<@&1135000855872020513>',
      splitRegex: /\r?\n\s*=+\s*\r?\n/g,
      sourceKey: 'الايدي',
      roleKeyMatcher: /الرتبة/i,
      evalKeyMatcher: /التقيم|التقييم/i,
      useUserIdAsSource: true,
      reportOverride: null,
      accent: '#3498db',
      accentSoft: 'rgba(52, 152, 219, 0.15)'
    },
    raqabh: {
      title: 'نظام معالجة وجرد قسم الرقابة',
      inputLabel: '1. المدخلات (استبيانات الرقابة):',
      outputLabel: '2. المخرجات (نتيجة الجرد المنسقة):',
      reportLabel: '3. نموذج التقرير الأسبوعي (جاهز للنسخ):',
      authorLabel: 'منشئ التقرير (اسمك/المنشن):',
      authorPlaceholder: 'أدخل اسمك...',
      inputPlaceholder: 'الصق استبيانات قسم الرقابة هنا...',
      outRoleId: '1135000856119496893',
      outRoleMention: '<@&1135000856119496893>',
      splitRegex: /(?=منشن الشخص\s*:)/g,
      sourceKey: 'منشن الشخص',
      roleKeyMatcher: /الرتبة/i,
      evalKeyMatcher: /التقيم|التقييم/i,
      useUserIdAsSource: false,
      reportOverride: null,
      accent: '#f1c40f',
      accentSoft: 'rgba(241, 196, 15, 0.15)'
    },
    roles: {
      title: 'نظام الجرد والتقارير الذكي',
      inputLabel: '1. المدخلات (بيانات الاستبيان):',
      outputLabel: '2. المخرجات (نتيجة الجرد):',
      reportLabel: '3. نموذج التقرير الأسبوعي (جاهز للنسخ):',
      authorLabel: 'منشئ التقرير (اسمك/المنشن):',
      authorPlaceholder: 'أدخل اسمك...',
      inputPlaceholder: 'الصق الاستبيانات هنا...',
      outRoleId: '1135000856043995233',
      outRoleMention: '<@&1135000856043995233>',
      splitRegex: /(?=الايدي\s*:)/g,
      sourceKey: 'الايدي',
      roleKeyMatcher: /الرتبة/i,
      evalKeyMatcher: /التقيم|التقييم/i,
      useUserIdAsSource: true,
      reportOverride: null,
      accent: '#34495e',
      accentSoft: 'rgba(52, 73, 94, 0.2)'
    },
    scenario: {
      title: 'نظام معالجة وجرد قسم السيناريو تيم',
      inputLabel: '1. المدخلات (استبيانات السيناريو):',
      outputLabel: '2. المخرجات (نتيجة الجرد المنسقة):',
      reportLabel: '3. نموذج التقرير الأسبوعي (جاهز للنسخ):',
      authorLabel: 'منشئ التقرير (اسمك/المنشن):',
      authorPlaceholder: 'أدخل اسمك...',
      inputPlaceholder: 'الصق استبيانات قسم السيناريو تيم هنا...',
      outRoleId: '1480638365937434808',
      outRoleMention: '<@&1480638365937434808>',
      splitRegex: /(?=منشن الشخص\s*:)/g,
      sourceKey: 'منشن الشخص',
      roleKeyMatcher: /الرتبة/i,
      evalKeyMatcher: /التقيم|التقييم/i,
      useUserIdAsSource: false,
      reportOverride: null,
      accent: '#2ecc71',
      accentSoft: 'rgba(46, 204, 113, 0.15)'
    },
    ban: {
      title: 'نظام معالجة وجرد قسم الباند تيم',
      inputLabel: '1. المدخلات (استبيانات الباند تيم):',
      outputLabel: '2. المخرجات (نتيجة الجرد المنسقة):',
      reportLabel: '3. نموذج التقرير الأسبوعي (جاهز للنسخ):',
      authorLabel: 'منشئ التقرير (اسمك/المنشن):',
      authorPlaceholder: 'أدخل اسمك...',
      inputPlaceholder: 'الصق استبيانات قسم الباند تيم هنا...',
      outRoleId: '1247180712038371369',
      outRoleMention: '<@&1247180712038371369>\u00A0',
      splitRegex: /(?=منشن الشخص\s*:)/g,
      sourceKey: 'منشن الشخص',
      roleKeyMatcher: /الرتبة/i,
      evalKeyMatcher: /التقيم|التقييم/i,
      useUserIdAsSource: false,
      reportOverride: null,
      accent: '#e74c3c',
      accentSoft: 'rgba(231, 76, 60, 0.15)'
    }
  };

  function showToast(message) {
    const toast = document.getElementById('globalToast');
    if (!toast) {
      const node = document.createElement('div');
      node.id = 'globalToast';
      node.className = 'toast';
      document.body.appendChild(node);
    }
    const activeToast = document.getElementById('globalToast');
    activeToast.textContent = message;
    activeToast.classList.add('show');
    window.clearTimeout(activeToast.timer);
    activeToast.timer = window.setTimeout(() => {
      activeToast.classList.remove('show');
    }, 1800);
  }

  function copyText(text) {
    if (!text) return;
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).catch(() => {
        fallbackCopy(text);
      });
      return;
    }
    fallbackCopy(text);
  }

  function fallbackCopy(text) {
    const temp = document.createElement('textarea');
    temp.value = text;
    temp.setAttribute('readonly', '');
    temp.style.position = 'fixed';
    temp.style.opacity = '0';
    document.body.appendChild(temp);
    temp.select();
    document.execCommand('copy');
    document.body.removeChild(temp);
  }

  function removeFancyFont(text) {
    if (!text) return '';
    let str = text.normalize('NFKD');
    let clean = '';
    for (let i = 0; i < str.length; i++) {
      let code = str.charCodeAt(i);
      if (code >= 0xD835) {
        let codePoint = str.codePointAt(i);
        if (codePoint >= 0x1D400 && codePoint <= 0x1D419) clean += String.fromCharCode(65 + (codePoint - 0x1D400));
        else if (codePoint >= 0x1D41A && codePoint <= 0x1D433) clean += String.fromCharCode(97 + (codePoint - 0x1D41A));
        else if (codePoint >= 0x1D434 && codePoint <= 0x1D44D) clean += String.fromCharCode(65 + (codePoint - 0x1D434));
        else if (codePoint >= 0x1D44E && codePoint <= 0x1D467) clean += String.fromCharCode(97 + (codePoint - 0x1D44E));
        else if (codePoint >= 0x1D468 && codePoint <= 0x1D481) clean += String.fromCharCode(65 + (codePoint - 0x1D468));
        else if (codePoint >= 0x1D482 && codePoint <= 0x1D49B) clean += String.fromCharCode(97 + (codePoint - 0x1D482));
        else if (codePoint >= 0x1D5D4 && codePoint <= 0x1D5ED) clean += String.fromCharCode(65 + (codePoint - 0x1D5D4));
        else if (codePoint >= 0x1D5EE && codePoint <= 0x1D607) clean += String.fromCharCode(97 + (codePoint - 0x1D5EE));
        else if (codePoint >= 0x1D608 && codePoint <= 0x1D621) clean += String.fromCharCode(65 + (codePoint - 0x1D608));
        else if (codePoint >= 0x1D622 && codePoint <= 0x1D63B) clean += String.fromCharCode(97 + (codePoint - 0x1D622));
        else if (codePoint >= 0x1D63C && codePoint <= 0x1D655) clean += String.fromCharCode(65 + (codePoint - 0x1D63C));
        else if (codePoint >= 0x1D656 && codePoint <= 0x1D66F) clean += String.fromCharCode(97 + (codePoint - 0x1D656));
        i++;
      } else {
        clean += str[i];
      }
    }
    return clean.replace(/[\u0300-\u036f]/g, '').trim();
  }

  function cleanAndStandardizeRank(rawRank) {
    if (!rawRank) return '';
    let clean = removeFancyFont(rawRank).trim();
    if (!clean) return '';

    const standardRanks = [
      'Super Admin', 'Head Admin', 'Big Boss', 'Co Founder', 'Founder',
      'Supervisor', 'Controller', 'Hand of the king', 'Pre Master', 'Master',
      'Advisor', 'Operator', 'Marshal', 'Manager', 'Director', 'Executive',
      'President', 'Commander', 'Mythical', 'Colonel', 'Boss', 'CEO',
      'Consultant', 'Admin', 'Mod', 'Trusted'
    ];

    const lowerClean = clean.toLowerCase();
    let bestMatch = '';

    for (let rank of standardRanks) {
      const rankLower = rank.toLowerCase();
      if (lowerClean.includes(rankLower) && rankLower.length > bestMatch.length) {
        bestMatch = rank;
      }
    }

    return bestMatch || clean;
  }

  function extractDiscordId(rawInput) {
    if (rawInput === null || rawInput === undefined) return '';
    const text = String(rawInput).trim();
    if (!text) return '';

    const directMention = text.match(/<@&?(\d{17,20})>/i);
    if (directMention) return directMention[1];

    const explicitDigits = text.match(/^(?:\d{17,20})$/);
    return explicitDigits ? explicitDigits[0] : '';
  }

  function formatUserMention(rawInput) {
    if (!rawInput) return '';
    const trimmed = String(rawInput).trim();
    const mentionMatch = trimmed.match(/<@&?(\d{17,20})>/i);
    if (mentionMatch) {
      return trimmed.includes('<@&') ? `<@&${mentionMatch[1]}>` : `<@${mentionMatch[1]}>`;
    }

    const clean = trimmed
      .replace(/[\u200B-\u200D\uFEFF\u200F]/g, '')
      .replace(/^@+/, '')
      .trim();

    if (!clean) return '';
    if (/^-?\d+$/.test(clean) && !/^\d{17,20}$/.test(clean.replace(/^-+/, ''))) {
      return '';
    }
    if (/^\d{17,20}$/.test(clean)) {
      return `<@${clean}>`;
    }

    if (/^.+#\d{4}$/.test(clean)) {
      return clean.split('#')[0];
    }

    return clean;
  }

  function formatEventUserMention(rawInputId) {
    const id = extractDiscordId(rawInputId);
    if (id) {
      return `<@${id}>\u00A0`;
    }

    const clean = String(rawInputId || '')
      .replace(/[\u200B-\u200D\uFEFF\u200F]/g, '')
      .replace(/^@+/, '')
      .trim();

    if (!clean) return '';
    if (/^.+#\d{4}$/.test(clean)) {
      return `@${clean.split('#')[0]}\u00A0`;
    }
    if (/^\d+$/.test(clean)) {
      return clean + '\u00A0';
    }
    return `@${clean}\u00A0`;
  }

  function getScenarioDisplayName(record) {
    if (!record) return '';

    const directSource = record.discordIdentifier || record.userMention || record.username || record.name || record.displayName || record.mention || '';
    const raw = directSource || record.userId || record.id || '';
    if (!raw) return '';

    const trimmed = String(raw).trim();
    if (!trimmed) return '';

    const directMention = trimmed.match(/<@!?\d{17,20}>/i) || trimmed.match(/<@&\d{17,20}>/i);
    if (directMention) {
      return directMention[0];
    }

    const discordId = record.discordIdentifier || record.userMention;
    if (discordId && /^\d{17,20}$/.test(String(discordId).trim())) {
      return `<@${String(discordId).trim()}>`;
    }

    const plain = trimmed
      .replace(/[\u200B-\u200D\uFEFF\u200F]/g, '')
      .replace(/^@+/, '')
      .trim();

    if (!plain) return '';
    if (/^-?\d+$/.test(plain) && !/^\d{17,20}$/.test(plain.replace(/^-+/, ''))) return '';
    if (/^\d{17,20}$/.test(plain)) return `<@${plain}>`;
    return plain.includes('#') ? plain.split('#')[0] : plain;
  }

  function checkIfHasResponsibilities(respText) {
    if (!respText) return false;
    const clean = String(respText).trim().toLowerCase();
    if (
      clean === '' ||
      clean === '|' ||
      clean === '-' ||
      clean.includes('لا يوجد') ||
      clean.includes('لايوجد') ||
      clean.includes('بدون') ||
      clean.includes('غير متوفر')
    ) {
      return false;
    }
    return true;
  }

  function getSectionScore(events, hasResp) {
    if (events >= 40) return { text: 'ممتاز جدا', points: hasResp ? 6 : 10 };
    if (events >= 21) return { text: 'ممتاز', points: hasResp ? 4 : 8 };
    if (events >= 11) return { text: 'جيد جدا', points: hasResp ? 3 : 5 };
    return { text: 'سيء', points: 0 };
  }

  function getRespScore(respText) {
    if (!respText) return 0;
    const clean = String(respText).trim();
    if (clean.includes('ممتاز جدا')) return 4;
    if (clean.includes('ممتاز')) return 2;
    if (clean.includes('جيد جدا')) return 1;
    return 0;
  }

  function normalizeEval(rawEval, totalPoints) {
    if (rawEval) {
      const cleanEval = String(rawEval).trim();
      if (cleanEval.includes('جديد')) return 'جديد';
      if (cleanEval.includes('خارج خدمة') || cleanEval.includes('خارج الخدمة')) return 'خارج خدمة';
      if (cleanEval.includes('ممتاز جدا')) return 'ممتاز جدا';
      if (cleanEval.includes('ممتاز')) return 'ممتاز';
      if (cleanEval.includes('جيد جدا')) return 'جيد جدا';
      if (cleanEval.includes('سيء') || cleanEval.includes('سئ')) return 'سيء';
    }

    if (totalPoints >= 9) return 'ممتاز جدا';
    if (totalPoints >= 7) return 'ممتاز';
    if (totalPoints >= 4) return 'جيد جدا';
    return 'سيء';
  }

  function extractRoleMention(text) {
    if (!text) return '';
    const match = String(text).match(/<@&(\d{17,20})>/);
    if (match) return `<@&${match[1]}>`;
    return '';
  }

  function hasOutOfServiceRoleMention(text, outRoleId, outRoleMention) {
    if (!text) return false;
    return String(text).includes(outRoleMention) || String(text).includes(outRoleId);
  }

  function isOutOfServiceText(text) {
    if (!text) return false;
    const normalized = String(text).replace(/\s+/g, '').toLowerCase();
    return normalized.includes('خارجالخدمة') || normalized.includes('خارجخدمة');
  }

  function buildWeeklyReport(processedCount, countNew, countOut, countBad, countActive, authorName) {
    return `** كم العدد حالي بالقسم: ${processedCount}\n\n` +
      `كم عدد ماخذين اجازة : ${countOut} ( ${countNew}جديد)\n\n` +
      `عدد غير متفاعلين : ${countBad}\n\n` +
      `عدد المتفاعلين بالقسم : ${countActive}\n` +
      `هل يوجد ملاحظة بالقسم او حاب تطور شي من جميع نواحي : لايوجد يعطيكم العافية   \n\n` +
      `تم انشاء التقرير من قبل : ( ${authorName} ) **`;
  }

  function parseEventBlocks(input, moduleKey = 'events') {
    if (!input || !input.trim()) return [];

    return input
      .split(/={3,}/)
      .map((block) => {
        if (!block || !block.trim()) return null;

        const data = {
          id: '',
          userMention: '',
          events: 0,
          respEval: '',
          rank: '',
          rawEval: '',
          finalEval: '',
          original: block.trim()
        };

        const lines = block.split(/\r?\n/);
        lines.forEach((line) => {
          if (!line.includes(':')) return;
          const parts = line.split(':');
          const key = parts[0].trim();
          const val = parts.slice(1).join(':').trim();

          if (key.includes('منشن الشخص') || key.includes('المنشن')) {
            data.userMention = val;
            data.id = val;
          } else if (key.includes('الايدي')) {
            if (!data.userMention) {
              data.id = val;
            }
          } else if (key.includes('عدد الفعاليات')) {
            data.events = parseInt(val) || 0;
          } else if (key.includes('التقييم بالمسؤوليات') || key.includes('التقيم بالمسؤوليات')) {
            data.respEval = val;
          } else if (key.includes('الرتبة الادارية') || key.includes('الرتبة')) {
            data.rank = val;
          } else if (key.includes('التقيم النهائي') || key.includes('التقييم النهائي')) {
            data.finalEval = val;
          } else if (key === 'التقييم' || key === 'التقيم') {
            data.rawEval = val;
          }
        });

        if (!data.id && moduleKey === 'scenario') {
          const fallback = String(block).match(/منشن الشخص\s*:\s*([^\n]+)/i);
          if (fallback) data.id = fallback[1].trim();
        }

        if (!data.id) return null;
        return data;
      })
      .filter(Boolean);
  }

  function buildEventPointsSurvey(records, authorName, moduleKey = 'events') {
    const groups = {
      one: [],
      two: [],
      three: []
    };

    records.forEach((entry) => {
      if (!entry.id) return;
      const text = `${entry.finalEval || ''} ${entry.rawEval || ''} ${entry.respEval || ''}`.trim();
      const hasExcluded = /1135000856417292360|1135000856379531336|1268974249901691051|1135000856304042008/.test(entry.id + ' ' + entry.rank + ' ' + text);
      const isOutOfService = /خارج\s*خدمة|خارج\s*الخدمة|1135000856278880330/.test(text + ' ' + entry.rank + ' ' + entry.id);
      if (hasExcluded || isOutOfService) return;

      if (moduleKey === 'scenario') {
        const normalized = String(`${entry.finalEval || ''} ${entry.rawEval || ''}`).trim();
        const hasExcellent = /ممتاز\s*جدا/.test(normalized);
        const hasGood = /جيد\s*جدا|ممتاز/.test(normalized);

        if (hasExcellent) groups.two.push(formatEventUserMention(entry.id));
        else if (hasGood) groups.one.push(formatEventUserMention(entry.id));
        return;
      }

      const points = Math.max(0, Math.min(3, Math.round((Number(entry.events) || 0) / 4)));
      if (points >= 3) groups.three.push(formatEventUserMention(entry.id));
      else if (points === 2) groups.two.push(formatEventUserMention(entry.id));
      else if (points === 1) groups.one.push(formatEventUserMention(entry.id));
    });

    return `**السلام عليكم ورحمة الله وبركاتة •\nوالصلاة والسلام على اشرف الانبياء والمرسلين سيدنا ونبينا محمد \nأسعد الله اوقاتكم بكل خير جميعًا \nتحيه طيبه وبعد • **\n\n` +
      `**يتم أعطاء المدعو : **\n` +
      `<@&1135000856236925014>\n${groups.one.join('\n') || 'لا يوجد'}\n\n` +
      `<@&1135000856278880326>\n${groups.two.join('\n') || 'لا يوجد'}\n\n` +
      `<@&1135000856236925016>\n${groups.three.join('\n') || 'لا يوجد'}\n\n` +
      '` السبب  : جرداسبوعي استمروووو `\n\n' +
      `**\`توقيع:\`**\n` +
      `  <@&1135000856417292360> \n<@&1135000856379531336> \n\n` +
      `||<@&1135000856278880335>||`;
  }

  function buildScenarioPointsSurvey(records) {
    const onePoint = [];
    const twoPoint = [];

    records.forEach((entry) => {
      const recordId = entry.discordIdentifier || entry.userMention || entry.username || entry.name || entry.id || entry.userId || '';
      if (!recordId) return;
      const text = `${entry.finalEval || ''} ${entry.rawEval || ''} ${entry.respEval || ''}`.trim();
      const hasExcluded = /1135000856417292360|1135000856379531336|1268974249901691051|1135000856304042008/.test((recordId || '') + ' ' + (entry.rank || '') + ' ' + text);
      const isOutOfService = /خارج\s*خدمة|خارج\s*الخدمة|1480638365937434808/.test(text + ' ' + (entry.rank || '') + ' ' + (recordId || ''));
      if (hasExcluded || isOutOfService) return;

      const normalized = String((entry.finalEval && entry.finalEval.trim()) || (entry.rawEval && entry.rawEval.trim()) || '').trim();
      const hasExcellent = /ممتاز\s*جدا/.test(normalized);
      const hasGood = /جيد\s*جدا|ممتاز/.test(normalized);

      const displayName = getScenarioDisplayName(entry);
      if (hasExcellent) twoPoint.push(displayName || formatUserMention(recordId));
      else if (hasGood) onePoint.push(displayName || formatUserMention(recordId));
    });

    return `**السلام عليكم ورحمة الله وبركاتة •\nوالصلاة والسلام على اشرف الانبياء والمرسلين سيدنا ونبينا محمد \nأسعد الله اوقاتكم بكل خير جميعًا \nتحيه طيبه وبعد • **\n\n` +
      `**يتم أعطاء المدعو : **\n` +
      `<@&1480630670245236787>\n${onePoint.join('\n') || 'لا يوجد'}\n\n` +
      `<@&1480631057580560486>\n${twoPoint.join('\n') || 'لا يوجد'}\n\n` +
      '` السبب  : جرداسبوعي استمروووو `\n\n' +
      `**\`توقيع:\`**\n` +
      `<@&1480626996445712415> \n<@&1480624032121618604> \n\n` +
      `|| <@&1480356635355512963> ||`;
  }

  function buildScenarioDemoteSurvey(records) {
    const names = records
      .filter((entry) => {
        const primaryEval = (entry.finalEval && entry.finalEval.trim()) || (entry.rawEval && entry.rawEval.trim()) || '';
        const text = `${primaryEval} ${entry.rank || ''} ${entry.respEval || ''}`;
        return /سيء|سئ|عدم تفاعل/.test(text) && !/1480626996445712415|1480624032121618604|1480356635355512963/.test(`${entry.discordIdentifier || entry.userMention || entry.userId || entry.username || entry.name || entry.id || ''} ${entry.rank}`);
      })
      .map((entry) => getScenarioDisplayName(entry) || formatUserMention(entry.discordIdentifier || entry.userMention || entry.username || entry.name || entry.id || entry.userId || ''));

    return `**═════════ ﷽ ═══════════**\n\n` +
      `**باسمي <@&1480626996445712415> **\n\n` +
      `**\`يتم محاسبة المدعو :\`**\n\n` +
      `${names.join('\n') || 'لا يوجد'}\n\n` +
      `**بـ : كسر**\n\n` +
      '`السبب : عدم تفاعل `\n\n' +
      '--------------------\n\n' +
      '**اسأل الله التوفيق لي ولكم التوفيق والسداد **\n\n' +
      '**توقيع   **\n' +
      '- <@&1480626996445712415>\n' +
      '- <@&1480624032121618604>\n\n' +
      '||<@&1480356635355512963>||';
  }

  function buildScenarioDismissSurvey(records) {
    const names = records
      .filter((entry) => {
        const primaryEval = (entry.finalEval && entry.finalEval.trim()) || (entry.rawEval && entry.rawEval.trim()) || '';
        const text = `${primaryEval} ${entry.rank || ''} ${entry.respEval || ''}`;
        return /سيء|سئ|عدم تفاعل/.test(text) && !/1480626996445712415|1480624032121618604|1480356635355512963/.test(`${entry.discordIdentifier || entry.userMention || entry.userId || entry.username || entry.name || entry.id || ''} ${entry.rank}`);
      })
      .map((entry) => getScenarioDisplayName(entry) || formatUserMention(entry.discordIdentifier || entry.userMention || entry.username || entry.name || entry.id || entry.userId || ''));

    return `**═════════ ﷽ ═══════════**\n\n` +
      `**باسمي <@&1480626996445712415> **\n\n` +
      `**\`يتم محاسبة المدعو :\`**\n\n` +
      `${names.join('\n') || 'لا يوجد'}\n\n` +
      `**بـ : إعفاء**\n\n` +
      '`السبب : عدم تفاعل `\n\n' +
      '--------------------\n\n' +
      '**اسأل الله التوفيق لي ولكم التوفيق والسداد **\n\n' +
      '**توقيع   **\n' +
      '- <@&1480626996445712415>\n' +
      '- <@&1480624032121618604>\n\n' +
      '||<@&1480356635355512963>||';
  }

  function buildRaqabhPointsSurvey(records) {
    const onePoint = [];
    const twoPoint = [];

    records.forEach((entry) => {
      const recordId = entry.discordIdentifier || entry.userMention || entry.username || entry.name || entry.id || entry.userId || '';
      if (!recordId) return;

      const primaryEval = (entry.finalEval && entry.finalEval.trim()) || (entry.rawEval && entry.rawEval.trim()) || '';
      const hasExcellent = /ممتاز\s*جدا/.test(primaryEval);
      const hasGood = /جيد\s*جدا|ممتاز/.test(primaryEval);

      const displayName = getScenarioDisplayName(entry);
      if (hasExcellent) twoPoint.push(displayName || formatUserMention(recordId));
      else if (hasGood) onePoint.push(displayName || formatUserMention(recordId));
    });

    return `**السلام عليكم ورحمة الله وبركاتة •\nوالصلاة والسلام على اشرف الانبياء والمرسلين سيدنا ونبينا محمد \nأسعد الله اوقاتكم بكل خير جميعًا \nتحيه طيبه وبعد • **\n\n` +
      `**يتم أعطاء المدعو : **\n` +
      `<@&1135000856119496885>\n${onePoint.join('\n') || 'لايوجد'}\n\n` +
      `<@&1135000856064958510>\n${twoPoint.join('\n') || 'لايوجد'}\n\n` +
      '` السبب  : جرداسبوعي استمروووو `\n\n' +
      `**\`توقيع:\`**\n\n` +
      '- <@&1135000856379531344> \n' +
      '- <@&1135000856304042013>\n\n' +
      '|| <@&1135000856144658444> ||';
  }

  function buildRaqabhDemoteSurvey(records) {
    const names = records
      .filter((entry) => {
        const primaryEval = (entry.finalEval && entry.finalEval.trim()) || (entry.rawEval && entry.rawEval.trim()) || '';
        const text = `${primaryEval} ${entry.rank || ''} ${entry.respEval || ''}`;
        return /سيء|سئ|عدم تفاعل/.test(text) && !/1135000856379531344|1135000856304042013|1135000856144658444/.test(`${entry.discordIdentifier || entry.userMention || entry.userId || entry.username || entry.name || entry.id || ''} ${entry.rank}`);
      })
      .map((entry) => getScenarioDisplayName(entry) || formatUserMention(entry.discordIdentifier || entry.userMention || entry.username || entry.name || entry.id || entry.userId || ''));

    return `**═════════ ﷽ ═══════════**\n\n` +
      `**باسمي  <@&1135000856379531344>   **\n\n` +
      `**\`يتم محاسبة المدعو :\`**\n\n` +
      `${names.join('\n') || ''}\n\n` +
      `**بـ  : كسر**\n\n` +
      '`السبب :عدم تفاعل `\n\n' +
      '**اسأل الله التوفيق لي ولكم التوفيق والسداد **\n\n' +
      '**توقيع   **\n' +
      '- <@&1135000856379531344> \n' +
      '- <@&1135000856304042013>\n\n' +
      '|| <@&1135000856144658444> ||';
  }

  function buildRaqabhDismissSurvey(records) {
    const names = records
      .filter((entry) => {
        const primaryEval = (entry.finalEval && entry.finalEval.trim()) || (entry.rawEval && entry.rawEval.trim()) || '';
        const text = `${primaryEval} ${entry.rank || ''} ${entry.respEval || ''}`;
        return /سيء|سئ|عدم تفاعل/.test(text) && !/1135000856379531344|1135000856304042013|1135000856144658444/.test(`${entry.discordIdentifier || entry.userMention || entry.userId || entry.username || entry.name || entry.id || ''} ${entry.rank}`);
      })
      .map((entry) => getScenarioDisplayName(entry) || formatUserMention(entry.discordIdentifier || entry.userMention || entry.username || entry.name || entry.id || entry.userId || ''));

    return `**═════════ ﷽ ═══════════**\n\n` +
      `**باسمي  <@&1135000856379531344>   **\n\n` +
      `**\`يتم محاسبة المدعو :\`**\n\n` +
      `${names.join('\n') || ''}\n\n` +
      `**بـ  : اعفاء**\n\n` +
      '`السبب :عدم تفاعل `\n\n' +
      '**اسأل الله التوفيق لي ولكم التوفيق والسداد **\n\n' +
      '**توقيع   **\n' +
      '- <@&1135000856379531344> \n' +
      '- <@&1135000856304042013>\n\n' +
      '|| <@&1135000856144658444> ||';
  }

  function buildInterviewsPointsSurvey(records) {
    const onePoint = [];
    const twoPoint = [];

    records.forEach((entry) => {
      const recordId = entry.discordIdentifier || entry.userMention || entry.username || entry.name || entry.id || entry.userId || '';
      if (!recordId) return;

      const primaryEval = (entry.finalEval && entry.finalEval.trim()) || (entry.rawEval && entry.rawEval.trim()) || '';
      const hasExcellent = /ممتاز\s*جدا/.test(primaryEval);
      const hasGood = /جيد\s*جدا|ممتاز/.test(primaryEval);

      const displayName = getScenarioDisplayName(entry);
      if (hasExcellent) twoPoint.push(displayName || formatUserMention(recordId));
      else if (hasGood) onePoint.push(displayName || formatUserMention(recordId));
    });

    return `**السلام عليكم ورحمة الله وبركاتة •\nوالصلاة والسلام على اشرف الانبياء والمرسلين سيدنا ونبينا محمد \nأسعد الله اوقاتكم بكل خير جميعًا \nتحيه طيبه وبعد • **\n\n` +
      `**يتم أعطاء المدعو : **\n` +
      `<@&1135000855872020511>\n${onePoint.join('\n') || 'لا يوجد'}\n\n` +
      `<@&1135000855767175286>\n${twoPoint.join('\n') || 'لا يوجد'}\n\n` +
      '` السبب  : جرداسبوعي استمروووو `\n\n' +
      `**\`توقيع:\`**\n\n` +
      '- <@&1135000856379531343> \n' +
      '- <@&1135000856304042012> \n\n' +
      '|| <@&1135000855872020515> ||';
  }

  function buildInterviewsDemoteSurvey(records) {
    const names = records
      .filter((entry) => {
        const primaryEval = (entry.finalEval && entry.finalEval.trim()) || (entry.rawEval && entry.rawEval.trim()) || '';
        const text = `${primaryEval} ${entry.rank || ''} ${entry.respEval || ''}`;
        return /سيء|سئ|عدم تفاعل/.test(text) && !/1135000856379531343|1135000856304042012|1135000855872020515/.test(`${entry.discordIdentifier || entry.userMention || entry.userId || entry.username || entry.name || entry.id || ''} ${entry.rank}`);
      })
      .map((entry) => getScenarioDisplayName(entry) || formatUserMention(entry.discordIdentifier || entry.userMention || entry.username || entry.name || entry.id || entry.userId || ''));

    return `**═════════ ﷽ ═══════════**\n\n` +
      `**باسمي : <@&1135000856379531343>  **\n\n` +
      `**\`يتم محاسبة المدعو :\`**\n\n` +
      `${names.join('\n') || ''}\n\n` +
      `**بـ  : كسر**\n\n` +
      '`السبب :عدم تفاعل `\n\n' +
      '**اسأل الله التوفيق لي ولكم التوفيق والسداد **\n\n' +
      '**توقيع   **\n' +
      '- <@&1135000856379531343> \n' +
      '- <@&1135000856304042012> \n\n' +
      '|| <@&1135000855872020515> ||';
  }

  function buildInterviewsDismissSurvey(records) {
    const names = records
      .filter((entry) => {
        const primaryEval = (entry.finalEval && entry.finalEval.trim()) || (entry.rawEval && entry.rawEval.trim()) || '';
        const text = `${primaryEval} ${entry.rank || ''} ${entry.respEval || ''}`;
        return /سيء|سئ|عدم تفاعل/.test(text) && !/1135000856379531343|1135000856304042012|1135000855872020515/.test(`${entry.discordIdentifier || entry.userMention || entry.userId || entry.username || entry.name || entry.id || ''} ${entry.rank}`);
      })
      .map((entry) => getScenarioDisplayName(entry) || formatUserMention(entry.discordIdentifier || entry.userMention || entry.username || entry.name || entry.id || entry.userId || ''));

    return `**═════════ ﷽ ═══════════**\n\n` +
      `**باسمي : <@&1135000856379531343>  **\n\n` +
      `**\`يتم محاسبة المدعو :\`**\n\n` +
      `${names.join('\n') || ''}\n\n` +
      `**بـ  : اعفاء**\n\n` +
      '`السبب :عدم تفاعل `\n\n' +
      '**اسأل الله التوفيق لي ولكم التوفيق والسداد **\n\n' +
      '**توقيع   **\n' +
      '- <@&1135000856379531343> \n' +
      '- <@&1135000856304042012> \n\n' +
      '|| <@&1135000855872020515> ||';
  }

  function buildBanPointsSurvey(records) {
    const onePoint = [];
    const twoPoint = [];

    records.forEach((entry) => {
      const recordId = entry.discordIdentifier || entry.userMention || entry.username || entry.name || entry.id || entry.userId || '';
      if (!recordId) return;

      const primaryEval = (entry.finalEval && entry.finalEval.trim()) || (entry.rawEval && entry.rawEval.trim()) || '';
      const hasExcellent = /ممتاز\s*جدا/.test(primaryEval);
      const hasGood = /جيد\s*جدا|ممتاز/.test(primaryEval);

      const displayName = getScenarioDisplayName(entry);
      if (hasExcellent) twoPoint.push(displayName || formatUserMention(recordId));
      else if (hasGood) onePoint.push(displayName || formatUserMention(recordId));
    });

    return `**السلام عليكم ورحمة الله وبركاتة •\nوالصلاة والسلام على اشرف الانبياء والمرسلين سيدنا ونبينا محمد \nأسعد الله اوقاتكم بكل خير جميعًا \nتحيه طيبه وبعد • **\n\n` +
      `**يتم أعطاء المدعو : **\n` +
      `<@&1135000856157233245>\n${onePoint.join('\n') || 'لا يوجد'}\n\n` +
      `<@&1135000856157233248>\n${twoPoint.join('\n') || 'لا يوجد'}\n\n` +
      '` السبب  : جرداسبوعي استمروووو `\n\n' +
      `**\`توقيع:\`**\n\n` +
      '- <@&1135000856417292359> \n' +
      '- <@&1135000856379531335> \n\n' +
      '|| <@&1135000856199188518> ||';
  }

  function buildBanDemoteSurvey(records) {
    const names = records
      .filter((entry) => {
        const primaryEval = (entry.finalEval && entry.finalEval.trim()) || (entry.rawEval && entry.rawEval.trim()) || '';
        const text = `${primaryEval} ${entry.rank || ''} ${entry.respEval || ''}`;
        return /سيء|سئ|عدم تفاعل/.test(text) && !/1135000856417292359|1135000856379531335|1135000856199188518/.test(`${entry.discordIdentifier || entry.userMention || entry.userId || entry.username || entry.name || entry.id || ''} ${entry.rank}`);
      })
      .map((entry) => getScenarioDisplayName(entry) || formatUserMention(entry.discordIdentifier || entry.userMention || entry.username || entry.name || entry.id || entry.userId || ''));

    return `**═════════ ﷽ ═══════════**\n\n` +
      `**باسمي : <@&1135000856417292359>   **\n\n` +
      `**\`يتم محاسبة المدعو :\`**\n\n` +
      `${names.join('\n') || ''}\n\n` +
      `**بـ  : كسر**\n\n` +
      '`السبب :عدم تفاعل `\n\n' +
      '**اسأل الله التوفيق لي ولكم التوفيق والسداد **\n\n' +
      '**توقيع   **\n' +
      '- <@&1135000856417292359> \n' +
      '- <@&1135000856379531335> \n\n' +
      '|| <@&1135000856199188518> ||';
  }

  function buildBanDismissSurvey(records) {
    const names = records
      .filter((entry) => {
        const primaryEval = (entry.finalEval && entry.finalEval.trim()) || (entry.rawEval && entry.rawEval.trim()) || '';
        const text = `${primaryEval} ${entry.rank || ''} ${entry.respEval || ''}`;
        return /سيء|سئ|عدم تفاعل/.test(text) && !/1135000856417292359|1135000856379531335|1135000856199188518/.test(`${entry.discordIdentifier || entry.userMention || entry.userId || entry.username || entry.name || entry.id || ''} ${entry.rank}`);
      })
      .map((entry) => getScenarioDisplayName(entry) || formatUserMention(entry.discordIdentifier || entry.userMention || entry.username || entry.name || entry.id || entry.userId || ''));

    return `**═════════ ﷽ ═══════════**\n\n` +
      `**باسمي : <@&1135000856417292359>   **\n\n` +
      `**\`يتم محاسبة المدعو :\`**\n\n` +
      `${names.join('\n') || ''}\n\n` +
      `**بـ  : اعفاء**\n\n` +
      '`السبب :عدم تفاعل `\n\n' +
      '**اسأل الله التوفيق لي ولكم التوفيق والسداد **\n\n' +
      '**توقيع   **\n' +
      '- <@&1135000856417292359> \n' +
      '- <@&1135000856379531335> \n\n' +
      '|| <@&1135000856199188518> ||';
  }

  function buildRolesPointsSurvey(records) {
    const onePoint = [];
    const twoPoint = [];

    records.forEach((entry) => {
      const recordId = entry.discordIdentifier || entry.userMention || entry.username || entry.name || entry.id || entry.userId || '';
      if (!recordId) return;

      const primaryEval = (entry.finalEval && entry.finalEval.trim()) || (entry.rawEval && entry.rawEval.trim()) || '';
      const hasExcellent = /ممتاز\s*جدا/.test(primaryEval);
      const hasGood = /جيد\s*جدا|ممتاز/.test(primaryEval);

      const displayName = getScenarioDisplayName(entry);
      if (hasExcellent) twoPoint.push(displayName || formatUserMention(recordId));
      else if (hasGood) onePoint.push(displayName || formatUserMention(recordId));
    });

    return `**السلام عليكم ورحمة الله وبركاتة •\nوالصلاة والسلام على اشرف الانبياء والمرسلين سيدنا ونبينا محمد \nأسعد الله اوقاتكم بكل خير جميعًا \nتحيه طيبه وبعد • **\n\n` +
      `**يتم أعطاء المدعو : **\n` +
      `<@&1135000856018833509>\n${onePoint.join('\n') || 'لا يوجد'}\n\n` +
      `<@&1135000856018833512>\n${twoPoint.join('\n') || 'لا يوجد'}\n\n` +
      '` السبب  : جرداسبوعي استمروووو `\n\n' +
      `**\`توقيع:\`**\n\n` +
      '- <@&1135000856379531342>\n' +
      '- <@&1135000856304042011> \n\n' +
      '|| <@&1135000856043995234> ||';
  }

  function buildRolesDemoteSurvey(records) {
    const names = records
      .filter((entry) => {
        const primaryEval = (entry.finalEval && entry.finalEval.trim()) || (entry.rawEval && entry.rawEval.trim()) || '';
        const text = `${primaryEval} ${entry.rank || ''} ${entry.respEval || ''}`;
        return /سيء|سئ|عدم تفاعل/.test(text) && !/1135000856379531342|1135000856304042011|1135000856043995234/.test(`${entry.discordIdentifier || entry.userMention || entry.userId || entry.username || entry.name || entry.id || ''} ${entry.rank}`);
      })
      .map((entry) => getScenarioDisplayName(entry) || formatUserMention(entry.discordIdentifier || entry.userMention || entry.username || entry.name || entry.id || entry.userId || ''));

    return `**═════════ ﷽ ═══════════**\n\n` +
      `**باسمي  <@&1135000856379531342>  **\n\n` +
      `**\`يتم محاسبة المدعو :\`**\n\n` +
      `${names.join('\n') || ''}\n\n` +
      `**بـ  : كسر**\n\n` +
      '`السبب :عدم تفاعل `\n\n' +
      '**اسأل الله التوفيق لي ولكم التوفيق والسداد **\n\n' +
      '**توقيع   **\n\n' +
      '- <@&1135000856379531342>\n' +
      '- <@&1135000856304042011> \n\n' +
      '|| <@&1135000856043995234> ||';
  }

  function buildRolesDismissSurvey(records) {
    const names = records
      .filter((entry) => {
        const primaryEval = (entry.finalEval && entry.finalEval.trim()) || (entry.rawEval && entry.rawEval.trim()) || '';
        const text = `${primaryEval} ${entry.rank || ''} ${entry.respEval || ''}`;
        return /سيء|سئ|عدم تفاعل/.test(text) && !/1135000856379531342|1135000856304042011|1135000856043995234/.test(`${entry.discordIdentifier || entry.userMention || entry.userId || entry.username || entry.name || entry.id || ''} ${entry.rank}`);
      })
      .map((entry) => getScenarioDisplayName(entry) || formatUserMention(entry.discordIdentifier || entry.userMention || entry.username || entry.name || entry.id || entry.userId || ''));

    return `**═════════ ﷽ ═══════════**\n\n` +
      `**باسمي  <@&1135000856379531342>  **\n\n` +
      `**\`يتم محاسبة المدعو :\`**\n\n` +
      `${names.join('\n') || ''}\n\n` +
      `**بـ  : اعفاء**\n\n` +
      '`السبب :عدم تفاعل `\n\n' +
      '**اسأل الله التوفيق لي ولكم التوفيق والسداد **\n\n' +
      '**توقيع   **\n\n' +
      '- <@&1135000856379531342>\n' +
      '- <@&1135000856304042011> \n\n' +
      '|| <@&1135000856043995234> ||';
  }

  function buildEventDemoteSurvey(records) {
    const names = records
      .filter((entry) => {
        const text = `${entry.finalEval || ''} ${entry.rawEval || ''} ${entry.rank || ''} ${entry.respEval || ''}`;
        return /سيء|سئ|عدم تفاعل|عدم تفاعل/.test(text) && !/1135000856417292360|1135000856379531336|1268974249901691051|1135000856304042008/.test(`${entry.id} ${entry.rank}`);
      })
      .map((entry) => formatEventUserMention(entry.id));

    return `**═════════ ﷽ ═══════════**\n\n` +
      `**باسمي <@&1135000856417292360> **    \n\n` +
      `**\`يتم محاسبة المدعو :\`**\n\n` +
      `${names.join('\n') || 'لا يوجد'}\n\n` +
      `** بـ  : كسر**\n\n` +
      '`السبب :عدم تفاعل `\n\n' +
      '--------------------\n\n' +
      '**اسأل الله التوفيق لي ولكم التوفيق والسداد **\n\n' +
      '**توقيع   **\n' +
      '- <@&1135000856417292360> \n' +
      '- <@&1135000856379531336> \n\n' +
      '||<@&1135000856278880335>||';
  }

  function buildEventDismissSurvey(records) {
    const names = records
      .filter((entry) => {
        const text = `${entry.finalEval || ''} ${entry.rawEval || ''} ${entry.rank || ''} ${entry.respEval || ''}`;
        return /سيء|سئ|عدم تفاعل|عدم تفاعل/.test(text) && !/1135000856417292360|1135000856379531336|1268974249901691051|1135000856304042008/.test(`${entry.id} ${entry.rank}`);
      })
      .map((entry) => formatEventUserMention(entry.id));

    return `**═════════ ﷽ ═══════════**\n\n` +
      `**باسمي <@&1135000856417292360> **    \n\n` +
      `**\`يتم محاسبة المدعو :\`**\n\n` +
      `${names.join('\n') || 'لا يوجد'}\n\n` +
      `** بـ  : اعفاء**\n\n` +
      '`السبب :عدم تفاعل `\n\n' +
      '--------------------\n\n' +
      '**اسأل الله التوفيق لي ولكم التوفيق والسداد **\n\n' +
      '**توقيع   **\n' +
      '- <@&1135000856417292360> \n' +
      '- <@&1135000856379531336> \n\n' +
      '||<@&1135000856278880335>||';
  }

  function buildEventWeeklyReport(records, authorName) {
    let countNew = 0;
    let countOut = 0;
    let countBad = 0;
    let countActive = 0;

    records.forEach((entry) => {
      const text = `${entry.finalEval || ''} ${entry.rawEval || ''} ${entry.rank || ''} ${entry.respEval || ''}`;
      const isExcluded = /1135000856417292360|1135000856379531336|1268974249901691051|1135000856304042008/.test(`${entry.id} ${entry.rank} ${text}`);
      if (isExcluded) return;

      const evalText = (entry.finalEval || entry.rawEval || '').trim();
      if (/خارج\s*خدمة|خارج\s*الخدمة|1135000856278880330/.test(text)) {
        countOut++;
      } else if (/جديد/.test(evalText)) {
        countNew++;
      } else if (/سيء|سئ/.test(evalText)) {
        countBad++;
      } else if (/(جيد جدا|ممتاز|ممتاز جدا)/.test(evalText)) {
        countActive++;
      }
    });

    return `**\` نموذج التقرير الاسبوعي : @🎉・𝐄𝐕𝐄𝐍𝐓𝐒 𝐓𝐄𝐀𝐌   \`**\n\n` +
      `**كم العدد حالي بالقسم : ${records.length}**\n\n` +
      `**كم عدد ماخذين اجازه : ${countOut} خارج خدمة ( (${countNew}) جديد)**\n\n` +
      `**عدد غير متفاعلين ${countBad} سيء**\n\n` +
      `**عدد المتفاعلين بالقسم : ${countActive}  تقييم جيد جدا + ممتاز + ممتاز جدا   **\n\n` +
      `**هل يوجد ملاحظة بالقسم او حاب تطور شي من جميع نواحي :  لايوجد يعطيكم العافيية    **\n\n` +
      `**تم انشاء التقرير من قبل :{ ${authorName} }**`;
  }

  function buildEventSectionResult(input, authorName, cfg) {
    const lineSeparator = '`-----------------------------------------------------`';
    const blocks = input.split(/={3,}/);
    let result = `${lineSeparator}\n`;
    let processedCount = 0;
    let idTracker = {};
    let countNew = 0;
    let countOut = 0;
    let countBad = 0;
    let countActive = 0;

    blocks.forEach((block) => {
      if (!block.trim()) return;

      let data = {
        id: '',
        events: 0,
        respEval: '',
        rank: '',
        rawEval: '',
        finalEval: ''
      };

      const lines = block.split(/\r?\n/);
      lines.forEach((line) => {
        if (!line.includes(':')) return;
        const parts = line.split(':');
        const key = parts[0].trim();
        const val = parts.slice(1).join(':').trim();

        if (key.includes('الايدي')) data.id = val;
        else if (key.includes('عدد الفعاليات')) data.events = parseInt(val) || 0;
        else if (key.includes('التقييم بالمسؤوليات') || key.includes('التقيم بالمسؤوليات')) data.respEval = val;
        else if (key.includes('الرتبة الادارية') || key.includes('الرتبة')) data.rank = val;
        else if (key.includes('التقيم النهائي') || key.includes('التقييم النهائي')) data.finalEval = val;
        else if (key === 'التقييم' || key === 'التقيم') data.rawEval = val;
      });

      if (!data.id) return;

      processedCount++;

      const rawKey = String(data.id).replace(/[^a-zA-Z0-9_.-]/g, '').toLowerCase().trim();
      if (rawKey) {
        idTracker[rawKey] = (idTracker[rawKey] || 0) + 1;
      }

      const cleanRank = cleanAndStandardizeRank(data.rank);
      const hasResponsibilities = checkIfHasResponsibilities(data.respEval);
      const sectionRes = getSectionScore(data.events, hasResponsibilities);
      const respPoints = hasResponsibilities ? getRespScore(data.respEval) : 0;
      const totalPoints = sectionRes.points + respPoints;
      const chosenEval = data.finalEval || data.rawEval;
      const detectedRoleMention =
        extractRoleMention(data.finalEval) ||
        extractRoleMention(data.rawEval) ||
        extractRoleMention(data.respEval) ||
        extractRoleMention(data.id);
      const isOutOfServiceRole =
        hasOutOfServiceRoleMention(data.id, cfg.outRoleId, cfg.outRoleMention) ||
        hasOutOfServiceRoleMention(data.finalEval, cfg.outRoleId, cfg.outRoleMention) ||
        hasOutOfServiceRoleMention(data.rawEval, cfg.outRoleId, cfg.outRoleMention) ||
        hasOutOfServiceRoleMention(data.respEval, cfg.outRoleId, cfg.outRoleMention);
      let finalRating = normalizeEval(chosenEval, totalPoints);
      const hasOutOfServiceInText =
        isOutOfServiceText(data.finalEval) ||
        isOutOfServiceText(data.rawEval) ||
        isOutOfServiceText(data.respEval);

      if (isOutOfServiceRole || hasOutOfServiceInText) {
        finalRating = 'خارج خدمة';
      }

      if (finalRating === 'جديد') {
        countNew++;
      } else if (finalRating === 'خارج خدمة') {
        countOut++;
      } else if (finalRating === 'سيء') {
        countBad++;
      } else if (['جيد جدا', 'ممتاز', 'ممتاز جدا'].includes(finalRating)) {
        countActive++;
      }

      const shouldMentionOutOfServiceRole = finalRating === 'خارج خدمة' || isOutOfServiceRole || hasOutOfServiceInText;
      const roleMentionForOutput = detectedRoleMention || cfg.outRoleMention;
      const formattedMention = formatEventUserMention(data.id);
      const evaluationOutput = shouldMentionOutOfServiceRole ? roleMentionForOutput : finalRating;
      result += `${formattedMention}\nالتقييم : ${evaluationOutput}\nالرتبة الادارية : ${cleanRank}\n${lineSeparator}\n`;
    });

    const duplicateEntries = Object.keys(idTracker)
      .filter((key) => idTracker[key] > 1)
      .map((key) => ({ id: key, count: idTracker[key] }));
    const report = `**\` نموذج التقرير الاسبوعي : @🎉・𝐄𝐕𝐄𝐍𝐓𝐒 𝐓𝐄𝐀𝐌   \`**\n\n` +
      `**كم العدد حالي بالقسم : ${processedCount}**\n\n` +
      `**كم عدد ماخذين اجازه : ${countOut} خارج خدمة ( (${countNew}) جديد)**\n\n` +
      `**عدد غير متفاعلين ${countBad} سيء**\n\n` +
      `**عدد المتفاعلين بالقسم : ${countActive}  تقييم جيد جدا + ممتاز + ممتاز جدا   **\n\n` +
      `**هل يوجد ملاحظة بالقسم او حاب تطور شي من جميع نواحي :  لايوجد يعطيكم العافيية    **\n\n` +
      `**تم انشاء التقرير من قبل :{ ${authorName} }**`;

    return {
      output: result,
      report,
      total: processedCount,
      duplicates: duplicateEntries
    };
  }

  function buildScenarioSectionResult(input, authorName, cfg) {
    const lineSeparator = '`-----------------------------------------------------`';
    let result = `${lineSeparator}\n`;
    let processedCount = 0;
    let idTracker = {};
    let countNew = 0;
    let countOut = 0;
    let countBad = 0;
    let countActive = 0;

    const entries = input.split(cfg.splitRegex);

    entries.forEach((entry) => {
      if (!entry || !entry.trim()) return;
      if (!entry.includes('منشن الشخص')) return;

      let data = { userMention: '', userId: '', rank: '', finalEval: '', rawEval: '' };
      const lines = entry.split(/\r?\n/);

      lines.forEach((line) => {
        if (!line.includes(':')) return;
        const parts = line.split(':');
        const key = parts[0].trim();
        const val = parts.slice(1).join(':').trim();

        if (key === 'منشن الشخص') data.userMention = val;
        else if (key === 'الايدي') data.userId = val;
        else if (key === 'الرتبة ادارية' || key === 'الرتبة الادارية' || key === 'الرتبة  الادارية' || key.includes('الرتبة')) {
          data.rank = val;
        } else if (key === 'التقيم النهائي' || key === 'التقييم النهائي') {
          data.finalEval = val;
        } else if (key === 'التقييم' || key === 'التقيم') {
          data.rawEval = val;
        }
      });

      const source = data.userMention || data.discordIdentifier || data.username || data.userId || '';
      if (!source) return;

      processedCount++;

      const rawKey = String(source).replace(/[^0-9]/g, '');
      if (rawKey && rawKey.length >= 17) {
        idTracker[rawKey] = (idTracker[rawKey] || 0) + 1;
      }

      const cleanRank = cleanAndStandardizeRank(data.rank);
      const evalText = String(data.finalEval || data.rawEval || 'سيء');
      const compactEval = evalText.replace(/\s+/g, '');
      const roleMentionInEval = evalText.match(/<@&\d{17,20}>/);
      const roleMentionValue = roleMentionInEval ? roleMentionInEval[0] : '';
      const isOutOfService =
        /خارج\s*الخدمة|خارج\s*خدمة|إجازة/i.test(evalText) ||
        /<@&\d{17,20}>/.test(evalText) ||
        compactEval.includes(cfg.outRoleId) ||
        compactEval.includes(cfg.outRoleMention.replace(/\s+/g, ''));

      let finalRating = data.finalEval || data.rawEval || 'سيء';

      if (finalRating.includes('جديد')) {
        countNew++;
      } else if (isOutOfService || finalRating.includes('إجازة')) {
        countOut++;
        finalRating = roleMentionValue || cfg.outRoleMention;
      } else if (finalRating.includes('سيء') || finalRating.includes('سئ')) {
        countBad++;
      } else if (['جيد جدا', 'ممتاز', 'ممتاز جدا'].some((r) => finalRating.includes(r))) {
        countActive++;
      }

      const formattedMention = formatUserMention(source);
      result += `${formattedMention || (data.username || 'غير متاح')}\nالتقييم : ${finalRating}\nالرتبة الادارية : ${cleanRank}\n${lineSeparator}\n`;
    });

    const duplicateEntries = Object.keys(idTracker)
      .filter((key) => idTracker[key] > 1)
      .map((key) => ({ id: key, count: idTracker[key] }));
    const weeklyReport = buildWeeklyReport(processedCount, countNew, countOut, countBad, countActive, authorName);

    return {
      output: result,
      report: weeklyReport,
      total: processedCount,
      duplicates: duplicateEntries
    };
  }

  function processModuleData(input, authorName, moduleKey) {
    const cfg = moduleDefs[moduleKey] || moduleDefs.events;
    if (!input.trim()) {
      return { output: '', report: '', total: 0, duplicates: [] };
    }

    if (moduleKey === 'events') {
      return buildEventSectionResult(input, authorName, cfg);
    }

    if (moduleKey === 'scenario') {
      return buildScenarioSectionResult(input, authorName, cfg);
    }

    if (moduleKey === 'interviews') {
      const lineSeparator = '`-----------------------------------------------------`';
      let result = `${lineSeparator}\n`;
      let processedCount = 0;
      let idTracker = {};
      let countNew = 0;
      let countOut = 0;
      let countBad = 0;
      let countActive = 0;

      const entries = input.split(cfg.splitRegex);
      entries.forEach((entry) => {
        if (!entry || !entry.trim()) return;
        if (!entry.includes('الايدي')) return;

        let data = { userMention: '', userId: '', rank: '', finalEval: '', rawEval: '' };
        const lines = entry.split(/\r?\n/);
        lines.forEach((line) => {
          if (!line.includes(':')) return;
          const parts = line.split(':');
          const key = parts[0].trim();
          const val = parts.slice(1).join(':').trim();
          if (key === 'منشن الشخص') data.userMention = val;
          else if (key === 'الايدي') data.userId = val;
          else if (key === 'الرتبة ادارية' || key === 'الرتبة الادارية' || key === 'الرتبة  الادارية' || key.includes('الرتبة')) data.rank = val;
          else if (key === 'التقيم النهائي' || key === 'التقييم النهائي') data.finalEval = val;
          else if (key === 'التقييم' || key === 'التقيم') data.rawEval = val;
        });

        const source = data.userMention || data.userId || '';
        if (!source) return;

        processedCount++;
        const rawKey = String(source).replace(/[^0-9]/g, '');
        if (rawKey && rawKey.length >= 17) {
          idTracker[rawKey] = (idTracker[rawKey] || 0) + 1;
        }

        const cleanRank = cleanAndStandardizeRank(data.rank);
        const primaryEval = (data.finalEval && data.finalEval.trim()) || (data.rawEval && data.rawEval.trim()) || 'سيء';
        const hasExcellent = /ممتاز\s*جدا/.test(primaryEval);
        const hasGood = /جيد\s*جدا|ممتاز/.test(primaryEval);
        const isBad = /سيء|سئ|عدم تفاعل/.test(primaryEval);
        const isOutOfService = /خارج\s*الخدمة|خارج\s*خدمة|إجازة/i.test(primaryEval) || primaryEval.includes(cfg.outRoleId) || primaryEval.includes(cfg.outRoleMention.replace(/\s+/g, ''));

        if (isOutOfService) countOut++;
        else if (hasExcellent || hasGood) countActive++;
        else if (isBad) countBad++;

        const displayEval = isOutOfService ? cfg.outRoleMention : primaryEval;
        const formattedMention = formatUserMention(source);
        result += `${formattedMention || 'غير متاح'}\nالتقييم : ${displayEval}\nالرتبة الادارية : ${cleanRank}\n${lineSeparator}\n`;
      });

      const weeklyReport = buildWeeklyReport(processedCount, countNew, countOut, countBad, countActive, authorName);
      return {
        output: result,
        report: weeklyReport,
        total: processedCount,
        duplicates: Object.keys(idTracker).filter((key) => idTracker[key] > 1).map((key) => ({ id: key, count: idTracker[key] }))
      };
    }

    if (moduleKey === 'raqabh') {
      const lineSeparator = '`-----------------------------------------------------`';
      let result = `${lineSeparator}\n`;
      let processedCount = 0;
      let idTracker = {};
      let countNew = 0;
      let countOut = 0;
      let countBad = 0;
      let countActive = 0;

      const entries = input.split(cfg.splitRegex);
      entries.forEach((entry) => {
        if (!entry || !entry.trim()) return;
        if (!entry.includes('منشن الشخص')) return;

        let data = { userMention: '', userId: '', rank: '', finalEval: '', rawEval: '' };
        const lines = entry.split(/\r?\n/);
        lines.forEach((line) => {
          if (!line.includes(':')) return;
          const parts = line.split(':');
          const key = parts[0].trim();
          const val = parts.slice(1).join(':').trim();
          if (key === 'منشن الشخص') data.userMention = val;
          else if (key === 'الايدي') data.userId = val;
          else if (key === 'الرتبة ادارية' || key === 'الرتبة الادارية' || key === 'الرتبة  الادارية' || key.includes('الرتبة')) data.rank = val;
          else if (key === 'التقيم النهائي' || key === 'التقييم النهائي') data.finalEval = val;
          else if (key === 'التقييم' || key === 'التقيم') data.rawEval = val;
        });

        const source = data.userMention || data.userId || '';
        if (!source) return;

        processedCount++;
        const rawKey = String(source).replace(/[^0-9]/g, '');
        if (rawKey && rawKey.length >= 17) {
          idTracker[rawKey] = (idTracker[rawKey] || 0) + 1;
        }

        const cleanRank = cleanAndStandardizeRank(data.rank);
        const primaryEval = (data.finalEval && data.finalEval.trim()) || (data.rawEval && data.rawEval.trim()) || 'سيء';
        const hasExcellent = /ممتاز\s*جدا/.test(primaryEval);
        const hasGood = /جيد\s*جدا|ممتاز/.test(primaryEval);
        const isBad = /سيء|سئ|عدم تفاعل/.test(primaryEval);
        const isOutOfService = /خارج\s*الخدمة|خارج\s*خدمة|إجازة/i.test(primaryEval) || primaryEval.includes(cfg.outRoleId) || primaryEval.includes(cfg.outRoleMention.replace(/\s+/g, ''));

        if (isOutOfService) {
          countOut++;
        } else if (hasExcellent || hasGood) {
          countActive++;
        } else if (isBad) {
          countBad++;
        }

        const displayEval = isOutOfService ? cfg.outRoleMention : primaryEval;
        const formattedMention = formatUserMention(source);
        result += `${formattedMention || 'غير متاح'}\nالتقييم : ${displayEval}\nالرتبة الادارية : ${cleanRank}\n${lineSeparator}\n`;
      });

      const weeklyReport = buildWeeklyReport(processedCount, countNew, countOut, countBad, countActive, authorName);
      return {
        output: result,
        report: weeklyReport,
        total: processedCount,
        duplicates: Object.keys(idTracker).filter((key) => idTracker[key] > 1).map((key) => ({ id: key, count: idTracker[key] }))
      };
    }

    if (moduleKey === 'interviews' || moduleKey === 'roles' || moduleKey === 'ban') {
      const lineSeparator = '`-----------------------------------------------------`';
      let result = `${lineSeparator}\n`;
      let processedCount = 0;
      let idTracker = {};
      let countNew = 0;
      let countOut = 0;
      let countBad = 0;
      let countActive = 0;

      const entries = input.split(cfg.splitRegex);

      entries.forEach((entry) => {
        if (!entry || !entry.trim()) return;
        if (moduleKey === 'raqabh' || moduleKey === 'scenario' || moduleKey === 'ban') {
          if (!entry.includes('منشن الشخص')) return;
        }
        if (moduleKey === 'interviews' || moduleKey === 'roles') {
          if (!entry.includes('الايدي')) return;
        }

        let data = { userMention: '', userId: '', rank: '', finalEval: '', rawEval: '' };
        const lines = entry.split(/\r?\n/);

        lines.forEach((line) => {
          if (!line.includes(':')) return;
          const parts = line.split(':');
          const key = parts[0].trim();
          const val = parts.slice(1).join(':').trim();

          if (key === 'منشن الشخص') data.userMention = val;
          else if (key === 'الايدي') data.userId = val;
          else if (key === 'الرتبة ادارية' || key === 'الرتبة الادارية' || key === 'الرتبة  الادارية' || key.includes('الرتبة')) {
            data.rank = val;
          } else if (key === 'التقيم النهائي' || key === 'التقييم النهائي') {
            data.finalEval = val;
          } else if (key === 'التقييم' || key === 'التقيم') {
            data.rawEval = val;
          }
        });

const source = data.userMention || data.userId || data.username || data.discordIdentifier || '';
      if (!source || (data.inGameId && !data.userMention && !data.userId && !data.username && !data.discordIdentifier)) {
        return;
      }

      processedCount++;

      let rawKey = String(source).replace(/[^0-9]/g, '');
        if (rawKey && rawKey.length >= 17) {
          idTracker[rawKey] = (idTracker[rawKey] || 0) + 1;
        }

        const cleanRank = cleanAndStandardizeRank(data.rank);
        const evalText = String(data.finalEval || data.rawEval || 'سيء');
        const compactEval = evalText.replace(/\s+/g, '');
        const roleMentionInEval = evalText.match(/<@&\d{17,20}>/);
        const roleMentionValue = roleMentionInEval ? roleMentionInEval[0] : '';
        const isOutOfService =
          /خارج\s*الخدمة|خارج\s*خدمة|إجازة/i.test(evalText) ||
          /<@&\d{17,20}>/.test(evalText) ||
          compactEval.includes(cfg.outRoleId) ||
          compactEval.includes(cfg.outRoleMention.replace(/\s+/g, ''));

        let finalRating = data.finalEval || data.rawEval || 'سيء';

        if (moduleKey === 'interviews') {
          const finalEvalText = data.finalEval || '';
          const rawEvalText = data.rawEval || '';
          const importantEvalText = `${finalEvalText} ${rawEvalText}`;
          const hasOutKeyword = /خارج خدمة|خارج الخدمة|إجازة/.test(importantEvalText);
          const hasRoleMention = /<@&\d{17,20}>/.test(importantEvalText);
          const hasConfiguredOutRole = importantEvalText.includes(cfg.outRoleId) || importantEvalText.includes(cfg.outRoleMention);
          const isOut = hasOutKeyword || hasRoleMention || hasConfiguredOutRole;

          if (isOut || finalRating.includes('إجازة')) {
            countOut++;
            finalRating = roleMentionValue || cfg.outRoleMention;
          } else if (finalRating.includes('جديد')) {
            countNew++;
          } else if (finalRating.includes('سيء') || finalRating.includes('سئ')) {
            countBad++;
          } else if (['جيد جدا', 'ممتاز', 'ممتاز جدا'].some((r) => finalRating.includes(r))) {
            countActive++;
          }
        } else if (moduleKey === 'raqabh') {
          if (finalRating.includes('جديد')) {
            countNew++;
          } else if (isOutOfService || finalRating.includes('إجازة')) {
            countOut++;
            finalRating = roleMentionValue || cfg.outRoleMention;
          } else if (finalRating.includes('سيء') || finalRating.includes('سئ')) {
            countBad++;
          } else if (['جيد جدا', 'ممتاز', 'ممتاز جدا'].some((r) => finalRating.includes(r))) {
            countActive++;
          }
        } else if (moduleKey === 'roles') {
          if (finalRating.includes('جديد')) {
            countNew++;
          } else if (finalRating.includes('خارج خدمة') || finalRating.includes('خارج الخدمة') || finalRating.includes('إجازة')) {
            countOut++;
            finalRating = cfg.outRoleMention;
          } else if (finalRating.includes('سيء') || finalRating.includes('سئ')) {
            countBad++;
          } else if (['جيد جدا', 'ممتاز', 'ممتاز جدا'].some((r) => finalRating.includes(r))) {
            countActive++;
          }
        } else if (moduleKey === 'ban') {
          if (finalRating.includes('جديد')) {
            countNew++;
          } else if (finalRating.includes('خارج خدمة') || finalRating.includes('خارج الخدمة') || finalRating.includes('إجازة')) {
            countOut++;
            finalRating = cfg.outRoleMention;
          } else if (finalRating.includes('سيء') || finalRating.includes('سئ')) {
            countBad++;
          } else if (['جيد جدا', 'ممتاز', 'ممتاز جدا'].some((r) => finalRating.includes(r))) {
            countActive++;
          }
        }

        const formattedMention = formatUserMention(source);
        result += `${formattedMention}\nالتقييم : ${finalRating}\nالرتبة الادارية : ${cleanRank}\n${lineSeparator}\n`;
      });

      const duplicateEntries = Object.keys(idTracker)
        .filter((key) => idTracker[key] > 1)
        .map((key) => ({ id: key, count: idTracker[key] }));
      const weeklyReport = buildWeeklyReport(processedCount, countNew, countOut, countBad, countActive, authorName);

      return {
        output: result,
        report: weeklyReport,
        total: processedCount,
        duplicates: duplicateEntries
      };
    }

    return { output: '', report: '', total: 0, duplicates: [] };
  }

  function syncInput(sourceInput, moduleKey) {
    const groupName = `${moduleKey}-shared`;
    const allInputs = moduleContent.querySelectorAll(`[data-sync-group="${groupName}"]`);
    allInputs.forEach((input) => {
      if (input !== sourceInput) {
        input.value = sourceInput.value;
      }
    });
  }

  function bindModuleActions(moduleKey) {
    const inventoryPanel = moduleContent.querySelector('.subtab-panel[data-panel="inventory"]');
    const input = inventoryPanel ? inventoryPanel.querySelector('.module-input') : moduleContent.querySelector('.module-input');
    const output = inventoryPanel ? inventoryPanel.querySelector('.module-output') : moduleContent.querySelector('.module-output');
    const report = inventoryPanel ? inventoryPanel.querySelector('.module-report') : moduleContent.querySelector('.module-report');
    const authorInput = inventoryPanel ? inventoryPanel.querySelector('.module-author') : moduleContent.querySelector('.module-author');
    const totalCount = inventoryPanel ? inventoryPanel.querySelector('.stats-count') : moduleContent.querySelector('.stats-count');
    const duplicateAlert = inventoryPanel ? inventoryPanel.querySelector('.stats-duplicates') : moduleContent.querySelector('.stats-duplicates');

    if (!input || !output || !report || !authorInput || !totalCount || !duplicateAlert) {
      return;
    }

    const processCurrentModule = () => {
      const result = processModuleData(input.value, authorInput.value.trim(), moduleKey);
      output.value = result.output;
      report.value = result.report;
      totalCount.textContent = `إجمالي العدد: ${result.total}`;

      if (moduleKey === 'events' || moduleKey === 'scenario' || moduleKey === 'raqabh' || moduleKey === 'interviews' || moduleKey === 'ban' || moduleKey === 'roles') {
        const records = parseEventBlocks(input.value, moduleKey);
        const pointsOutput = moduleContent.querySelector('.points-output');
        const demoteOutput = moduleContent.querySelector('.demote-output');
        const dismissOutput = moduleContent.querySelector('.dismiss-output');

        if (pointsOutput) {
          if (moduleKey === 'scenario') {
            pointsOutput.value = buildScenarioPointsSurvey(records);
          } else if (moduleKey === 'raqabh') {
            pointsOutput.value = buildRaqabhPointsSurvey(records);
          } else if (moduleKey === 'interviews') {
            pointsOutput.value = buildInterviewsPointsSurvey(records);
          } else if (moduleKey === 'ban') {
            pointsOutput.value = buildBanPointsSurvey(records);
          } else if (moduleKey === 'roles') {
            pointsOutput.value = buildRolesPointsSurvey(records);
          } else {
            pointsOutput.value = buildEventPointsSurvey(records, authorInput.value.trim());
          }
        }
        if (demoteOutput) {
          if (moduleKey === 'scenario') {
            demoteOutput.value = buildScenarioDemoteSurvey(records);
          } else if (moduleKey === 'raqabh') {
            demoteOutput.value = buildRaqabhDemoteSurvey(records);
          } else if (moduleKey === 'interviews') {
            demoteOutput.value = buildInterviewsDemoteSurvey(records);
          } else if (moduleKey === 'ban') {
            demoteOutput.value = buildBanDemoteSurvey(records);
          } else if (moduleKey === 'roles') {
            demoteOutput.value = buildRolesDemoteSurvey(records);
          } else {
            demoteOutput.value = buildEventDemoteSurvey(records);
          }
        }
        if (dismissOutput) {
          if (moduleKey === 'scenario') {
            dismissOutput.value = buildScenarioDismissSurvey(records);
          } else if (moduleKey === 'raqabh') {
            dismissOutput.value = buildRaqabhDismissSurvey(records);
          } else if (moduleKey === 'interviews') {
            dismissOutput.value = buildInterviewsDismissSurvey(records);
          } else if (moduleKey === 'ban') {
            dismissOutput.value = buildBanDismissSurvey(records);
          } else if (moduleKey === 'roles') {
            dismissOutput.value = buildRolesDismissSurvey(records);
          } else {
            dismissOutput.value = buildEventDismissSurvey(records);
          }
        }

        const transferOutput = moduleContent.querySelector('.transfer-output');
        if (transferOutput) {
          transferOutput.value = result.output;
        }
      }

      if (result.duplicates.length > 0) {
        duplicateAlert.innerHTML = `⚠️ تنبيه: يوجد IDs مكررة: <br>${result.duplicates.map((d) => `- ${d.id} (تكرر ${d.count} مرات)`).join('<br>')}`;
        duplicateAlert.style.display = 'block';
      } else {
        duplicateAlert.textContent = '';
        duplicateAlert.style.display = 'none';
      }
    };

    const sharedFields = moduleContent.querySelectorAll(`[data-sync-group="${moduleKey}-shared"]`);

    sharedFields.forEach((field) => {
      field.addEventListener('input', () => {
        sharedFields.forEach((otherField) => {
          if (otherField !== field) {
            otherField.value = field.value;
          }
        });
        processCurrentModule();
      });
    });

    authorInput.addEventListener('input', processCurrentModule);

    const processBtn = moduleContent.querySelector('.action-process');
    const copyOutputBtn = moduleContent.querySelector('.action-copy-output');
    const copyReportBtn = moduleContent.querySelector('.action-copy-report');
    const clearBtn = moduleContent.querySelector('.action-clear');
    const copyPointsBtn = moduleContent.querySelector('.action-copy-points');
    const copyDemoteBtn = moduleContent.querySelector('.action-copy-demote');
    const copyDismissBtn = moduleContent.querySelector('.action-copy-dismiss');
    const copyTransferBtn = moduleContent.querySelector('.action-copy-transfer');

    processBtn?.addEventListener('click', processCurrentModule);
    copyOutputBtn?.addEventListener('click', () => {
      copyText(output.value);
      showToast('تم نسخ الجرد');
    });
    copyReportBtn?.addEventListener('click', () => {
      copyText(report.value);
      showToast('تم نسخ التقرير');
    });
    copyPointsBtn?.addEventListener('click', () => {
      const pointsOutput = moduleContent.querySelector('.points-output');
      copyText(pointsOutput?.value || '');
      showToast('تم نسخ استبيان البوينتات');
    });
    copyDemoteBtn?.addEventListener('click', () => {
      const demoteOutput = moduleContent.querySelector('.demote-output');
      copyText(demoteOutput?.value || '');
      showToast('تم نسخ استبيان الكسر');
    });
    copyDismissBtn?.addEventListener('click', () => {
      const dismissOutput = moduleContent.querySelector('.dismiss-output');
      copyText(dismissOutput?.value || '');
      showToast('تم نسخ استبيان الإعفاء');
    });
    copyTransferBtn?.addEventListener('click', () => {
      const transferOutput = moduleContent.querySelector('.transfer-output');
      copyText(transferOutput?.value || '');
      showToast('تم نسخ نقل الجرد');
    });
    clearBtn?.addEventListener('click', () => {
      input.value = '';
      output.value = '';
      report.value = '';
      authorInput.value = '';
      totalCount.textContent = 'إجمالي العدد: 0';
      duplicateAlert.style.display = 'none';
      duplicateAlert.textContent = '';

      moduleContent.querySelectorAll(`[data-sync-group="${moduleKey}-shared"]`).forEach((field) => {
        field.value = '';
      });
    });

    processCurrentModule();
  }

  function renderModule(key) {
    const safeKey = Object.prototype.hasOwnProperty.call(moduleDefs, key) ? key : 'events';
    const activeDef = moduleDefs[safeKey];

    document.body.style.setProperty('--module-accent', activeDef.accent);
    document.body.style.setProperty('--module-accent-soft', activeDef.accentSoft);
    document.body.dataset.activeModule = safeKey;
    navButtons.forEach((button) => {
      const isActive = button.dataset.module === safeKey;
      button.classList.toggle('active', isActive);
      button.style.setProperty('--nav-accent', moduleDefs[button.dataset.module]?.accent || '#60a5fa');
      button.style.setProperty('--nav-accent-soft', moduleDefs[button.dataset.module]?.accentSoft || 'rgba(96,165,250,0.15)');
    });

    moduleContent.innerHTML = `
      <div class="module-shell">
        <header class="module-header">
          <h1>${activeDef.title}</h1>
        </header>

        <nav class="module-subtabs" aria-label="التبويبات الفرعية">
          <button class="subtab-btn active" type="button" data-subtab="inventory">📊 تجهيز الجرد</button>
          <button class="subtab-btn" type="button" data-subtab="points">🎁 البوينتات</button>
          <button class="subtab-btn" type="button" data-subtab="accounting">⚠️ المحاسبة</button>
          <button class="subtab-btn" type="button" data-subtab="transfer">🔄 نقل الجرد</button>
        </nav>

        <div class="subtab-panel active" data-panel="inventory">
          <div class="module-grid">
            <div class="module-card">
              <label>${activeDef.inputLabel}</label>
              <textarea class="module-input" data-sync-group="${safeKey}-shared" placeholder="${activeDef.inputPlaceholder}"></textarea>
            </div>

            <div class="module-card">
              <label>${activeDef.outputLabel}</label>
              <textarea class="module-output" readonly placeholder="ستظهر النتيجة هنا..."></textarea>
              <div class="stats-bar">
                <div class="stats-count">إجمالي العدد: 0</div>
                <div class="stats-duplicates" style="display: none;"></div>
              </div>
            </div>
          </div>

          <div class="module-card full-width">
            <div class="row-input">
              <label>${activeDef.authorLabel}</label>
              <input class="module-author" type="text" placeholder="${activeDef.authorPlaceholder}" />
            </div>
            <label>${activeDef.reportLabel}</label>
            <textarea class="module-report" readonly></textarea>
          </div>

          <div class="module-actions">
            <button class="primary action-process" type="button">معالجة وتحديث</button>
            <button class="secondary action-copy-output" type="button">نسخ الجرد</button>
            <button class="secondary action-copy-report" type="button">نسخ التقرير الأسبوعي</button>
            <button class="secondary action-clear" type="button">مسح الكل</button>
          </div>
        </div>

        <div class="subtab-panel" data-panel="points">
          <div class="mini-form-card">
            <h3>🎁 استبيان البوينتات</h3>
            <div class="points-layout">
              <textarea class="points-input" data-sync-group="${safeKey}-shared" placeholder="ادخل أسماء الأعضاء + نقاطهم (1، 2، 3) مع استبعاد الإدارة..."></textarea>
              <textarea class="points-output" readonly placeholder="سوف تظهر نتيجة استبيان البوينتات هنا..."></textarea>
            </div>
            <div class="mini-form-actions">
              <button class="primary action-copy-points" type="button">نسخ استبيان البوينتات</button>
            </div>
          </div>
        </div>

        <div class="subtab-panel" data-panel="accounting">
          <div class="mini-form-card">
            <h3>⚠️ المحاسبة - الكسر والإعفاء</h3>
            <textarea class="accounting-input" data-sync-group="${safeKey}-shared" placeholder="أدخل تقييمات المشرفين والمساعد المسؤول / الأعضاء المعفون..."></textarea>
            <div class="accounting-grid">
              <div class="accounting-box">
                <label>استبيان الكسر</label>
                <textarea class="demote-output" readonly placeholder="سيظهر استبيان الكسر هنا..."></textarea>
                <button class="primary action-copy-demote" type="button">نسخ الكسر</button>
              </div>
              <div class="accounting-box">
                <label>استبيان الإعفاء</label>
                <textarea class="dismiss-output" readonly placeholder="سيظهر استبيان الإعفاء هنا..."></textarea>
                <button class="primary action-copy-dismiss" type="button">نسخ الإعفاء</button>
              </div>
            </div>
          </div>
        </div>

        <div class="subtab-panel" data-panel="transfer">
          <div class="mini-form-card">
            <h3>🔄 نقل الجرد</h3>
            <textarea class="transfer-output" readonly placeholder="سيظهر نص نقل الجرد النهائي هنا..."></textarea>
            <div class="mini-form-actions">
              <button class="primary action-copy-transfer" type="button">نسخ نقل الجرد</button>
            </div>
          </div>
        </div>
      </div>
    `;

    const subtabButtons = moduleContent.querySelectorAll('.subtab-btn');
    subtabButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const target = button.dataset.subtab;
        moduleContent.querySelectorAll('.subtab-btn').forEach((btn) => btn.classList.toggle('active', btn === button));
        moduleContent.querySelectorAll('.subtab-panel').forEach((panel) => {
          panel.classList.toggle('active', panel.dataset.panel === target);
        });
      });
    });

    bindModuleActions(safeKey);
  }

  function closeMobileMenu() {
    document.body.classList.remove('menu-open');
    if (mobileMenuToggle) {
      mobileMenuToggle.setAttribute('aria-expanded', 'false');
    }
  }

  function openMobileMenu() {
    document.body.classList.add('menu-open');
    if (mobileMenuToggle) {
      mobileMenuToggle.setAttribute('aria-expanded', 'true');
    }
  }

  navButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const key = button.dataset.module;
      navButtons.forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      closeMobileMenu();
      renderModule(key);
    });
  });

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function () {
      if (document.body.classList.contains('menu-open')) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (mobileBackdrop) {
    mobileBackdrop.addEventListener('click', closeMobileMenu);
  }

  const initial = document.querySelector('.nav-item.active');
  if (initial && initial.dataset.module) {
    renderModule(initial.dataset.module);
  }

  window.addEventListener('resize', function () {
    if (window.innerWidth > 980) {
      closeMobileMenu();
    }
  });
});

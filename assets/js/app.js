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

  function buildFinalInventoryOutput(inventoryOutput) {
    const separator = '`-----------------------------------------------------`';
    const entries = String(inventoryOutput || '').split(/\*\*==============\*\*|`-+`/g);
    let result = `${separator}\n`;

    entries.forEach((entry) => {
      const lines = entry.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
      if (!lines.length) return;

      const mentionLine = lines.find((line) => /^منشن الشخص\s*:/.test(line));
      const evaluationLine = lines.find((line) => /^التقييم\s*:|^التقيم\s+النهائي\s*:|^التقييم\s+النهائي\s*:/.test(line));
      const rankLine = lines.find((line) => /^الرتبة\s+الادارية\s*:|^الرتبة\s+إدارية\s*:/.test(line));
      const plainMention = lines.find((line) => !line.includes(':') && (/<@!?\d{17,20}>/.test(line) || line.startsWith('@')));
      const mention = mentionLine ? mentionLine.replace(/^منشن الشخص\s*:\s*/, '') : plainMention;
      const evaluation = evaluationLine ? evaluationLine.replace(/^.*?:\s*/, '') : '';
      const rank = rankLine ? rankLine.replace(/^.*?:\s*/, '') : '';

      if (mention) result += `${mention}\nالتقييم : ${evaluation}\nالرتبة الادارية : ${rank}\n${separator}\n`;
    });

    return result;
  }

  function buildDepartmentReasons(inventoryOutput, moduleKey) {
    const labels = {
      events: 'الفعاليات',
      interviews: 'استبيان الانترفيو',
      raqabh: 'استبيان الرقابة',
      roles: 'استبيان الرولز',
      ban: 'استبيان الباند'
    };
    const entries = String(inventoryOutput || '').split(/\*\*==============\*\*|`-+`/g);
    const reasons = [];

    entries.forEach((entry) => {
      const lines = entry.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
      const evaluationLine = lines.find((line) => /^التقييم\s*:|^التقيم\s+النهائي\s*:|^التقييم\s+النهائي\s*:/.test(line));
      const evaluation = evaluationLine ? evaluationLine.replace(/^.*?:\s*/, '') : '';
      const identity = lines.find((line) => /^منشن الشخص\s*:/.test(line))?.replace(/^منشن الشخص\s*:\s*/, '') ||
        lines.find((line) => !line.includes(':') && (/<@!?\d{17,20}>/.test(line) || line.startsWith('@'))) ||
        formatUserMention(lines.find((line) => /^الايدي\s*:/.test(line))?.replace(/^الايدي\s*:\s*/, ''));
      if (!identity || !evaluation) return;

      let reason = `${labels[moduleKey] || 'التقييم'}: ${evaluation}`;
      if (moduleKey === 'events') {
        const events = lines.find((line) => /^عدد الفعاليات\s*:/.test(line))?.replace(/^عدد الفعاليات\s*:\s*/, '') || '0';
        const responsibility = lines.find((line) => /^التقييم بالمسؤوليات\s*:|^التقيم بالمسؤوليات\s*:/.test(line))?.replace(/^.*?:\s*/, '') || 'لايوجد مسؤوليات';
        const finalEvaluation = lines.find((line) => /^التقيم\s+النهائي\s*:|^التقييم\s+النهائي\s*:/.test(line))?.replace(/^.*?:\s*/, '') || evaluation;
        const sectionEvaluation = lines.find((line) => /^التقييم\s*:/.test(line))?.replace(/^.*?:\s*/, '') || 'غير متاح';
        reason = `التقييم النهائي ${finalEvaluation} لأن تقييم الفعاليات ${sectionEvaluation} من ${events} فعالية، وتقييم المسؤوليات ${responsibility}`;
      }
      if (/خارج\s*خدمة|إجازة|<@&\d{17,20}>/.test(evaluation)) reason = 'التقييم خارج الخدمة لأن الاستبيان يحتوي إجازة أو خارج الخدمة';
      else if (/سيء|سئ|عدم تفاعل/.test(evaluation)) reason = 'التقييم سيء لأن التقييم النهائي أو التقييم في الاستبيان مسجل سيء أو عدم تفاعل';
      else if (moduleKey !== 'events' && /جيد\s*جدا|ممتاز/.test(evaluation)) reason = `التقييم ${evaluation} لأنه مأخوذ من التقييم النهائي في الاستبيان، أو من التقييم عند عدم وجود نهائي`;
      reasons.push(`${identity}\n${reason}`);
    });

    return reasons.join('\n\n');
  }

  const eventDepartmentRoles = {
    boss: '<@&1135000856417292360>',
    deputyBoss: '<@&1135000856379531336>',
    supervisorA: '<@&1268974249901691051>',
    deputySupervisorA: '<@&1135000856304042008>',
    assistantSupervisor: '<@&1135000856304042007>',
    supervisor: '<@&1135000856304042006>',
    deputySupervisor: '<@&1135000856304042005>',
    member: '<@&1135000856278880335>'
  };

  const scenarioDepartmentRoles = {
    boss: '<@&1480626996445712415>',
    deputyBoss: '<@&1480624032121618604>',
    supervisorA: '<@&1480630452409860146>',
    deputySupervisorA: '<@&1480631532048748865>',
    assistantSupervisor: '<@&1480631792267690197>',
    supervisor: '<@&1480631999566843914>',
    deputySupervisor: '<@&1480410144474009723>',
    member: '<@&1480356635355512963>'
  };

  const raqabhDepartmentRoles = {
    boss: '<@&1135000856379531344>',
    deputyBoss: '<@&1135000856304042013>',
    supervisorA: '<@&1135000856144658450>',
    deputySupervisorA: '<@&1135000856144658449>',
    assistantSupervisor: '<@&1267293821687955617>',
    supervisor: '<@&1135000856144658448>',
    deputySupervisor: '<@&1135000856144658447>',
    member: '<@&1135000856144658444>'
  };

  function raqabhRankInfo(rankText) {
    const text = String(rankText || '');
    if (/1135000856379531344|1135000856304042013|1135000856144658450|1135000856144658449/.test(text)) return { role: raqabhDepartmentRoles.boss, points: false, punish: 'none', kind: 'leader' };
    if (/1267293821687955617|مساعد/.test(text)) return { role: raqabhDepartmentRoles.assistantSupervisor, points: false, punish: 'demote', kind: 'assistant' };
    if (/1135000856144658448|1135000856144658447|مشرف/.test(text)) return { role: raqabhDepartmentRoles.supervisor, points: true, punish: 'demote', kind: 'supervisor' };
    return { role: raqabhDepartmentRoles.member, points: true, punish: 'dismiss', kind: 'member' };
  }

  function scenarioRankInfo(rankText) {
    const text = String(rankText || '').trim();
    if (/1480626996445712415|1480624032121618604|1480630452409860146|1480631532048748865/.test(text)) {
      let role = scenarioDepartmentRoles.boss;
      if (text.includes('1480624032121618604')) role = scenarioDepartmentRoles.deputyBoss;
      if (text.includes('1480630452409860146')) role = scenarioDepartmentRoles.supervisorA;
      if (text.includes('1480631532048748865')) role = scenarioDepartmentRoles.deputySupervisorA;
      return { role, points: false, punish: 'none' };
    }
    if (text.includes('1480631792267690197') || text.includes('مساعد')) return { role: scenarioDepartmentRoles.assistantSupervisor, points: false, punish: 'demote' };
    if (/1480631999566843914|1480410144474009723|مشرف/.test(text)) {
      const role = text.includes('1480410144474009723') ? scenarioDepartmentRoles.deputySupervisor : scenarioDepartmentRoles.supervisor;
      return { role, points: true, punish: 'demote' };
    }
    return { role: scenarioDepartmentRoles.member, points: true, punish: 'dismiss' };
  }

  function eventRankInfo(rankText) {
    const text = String(rankText || '').trim();
    if (!text) return { role: eventDepartmentRoles.member, points: true, punish: 'dismiss' };

    const rankOrder = [
      'supervisor', 'mod', 'admin', 'super admin', 'head admin', 'controller',
      'hand of the king', 'pre master', 'master', 'advisor', 'operator', 'marshal',
      'manager', 'director', 'executive', 'president', 'commander', 'mythical',
      'colonel', 'boss', 'big boss', 'ceo', 'co founder', 'founder', 'consultant'
    ];
    const normalizedText = text.toLowerCase().replace(/[_-]+/g, ' ').replace(/\s+/g, ' ');
    const matchedRank = [...rankOrder].sort((left, right) => right.length - left.length).find((rank) => normalizedText.includes(rank));
    if (matchedRank && rankOrder.indexOf(matchedRank) >= rankOrder.indexOf('controller')) {
      return { role: text.match(/<@&\d{17,20}>/)?.[0] || eventDepartmentRoles.member, points: false, punish: 'none' };
    }

    if (/1135000856417292360|1135000856379531336|1268974249901691051|1135000856304042008/.test(text)) {
      let role = eventDepartmentRoles.boss;
      if (text.includes('1135000856379531336')) role = eventDepartmentRoles.deputyBoss;
      if (text.includes('1268974249901691051')) role = eventDepartmentRoles.supervisorA;
      if (text.includes('1135000856304042008')) role = eventDepartmentRoles.deputySupervisorA;
      return { role, points: false, punish: 'none' };
    }

    if (text.includes('1135000856304042007') || text.includes('مساعد')) {
      return { role: eventDepartmentRoles.assistantSupervisor, points: false, punish: 'demote' };
    }

    if (/1135000856304042006|1135000856304042005|مشرف/.test(text)) {
      const role = text.includes('1135000856304042005') ? eventDepartmentRoles.deputySupervisor : eventDepartmentRoles.supervisor;
      return { role, points: true, punish: 'demote' };
    }

    return { role: eventDepartmentRoles.member, points: true, punish: 'dismiss' };
  }

  function getEventMemberRanks() {
    const field = moduleContent.querySelector('.module-members');
    const map = {};
    if (!field || !field.value.trim()) return map;

    let currentRole = eventDepartmentRoles.member;
    field.value.split(/\r?\n/).forEach((line) => {
      const text = line.trim();
      if (!text) return;

      const roles = text.match(/<@&\d{17,20}>/g);
      if (roles && (text.includes('➜') || text.includes('<@&'))) {
        currentRole = roles[roles.length - 1];
        return;
      }

      const userId = extractDiscordId(text);
      if (userId) map[userId] = currentRole;
    });
    return map;
  }

  function getScenarioMemberRanks() {
    const field = moduleContent.querySelector('.module-members');
    const map = {};
    if (!field || !field.value.trim()) return map;
    let currentRole = scenarioDepartmentRoles.member;
    field.value.split(/\r?\n/).forEach((line) => {
      const text = line.trim();
      if (!text) return;
      const roles = text.match(/<@&\d{17,20}>/g);
      if (roles && (text.includes('➜') || text.includes('<@&'))) {
        currentRole = roles[roles.length - 1];
        return;
      }
      const userId = extractDiscordId(text);
      if (userId) map[userId] = currentRole;
    });
    return map;
  }

  function getRaqabhMemberRanks() {
    const field = moduleContent.querySelector('.module-members');
    const map = {};
    if (!field || !field.value.trim()) return map;
    let currentRole = raqabhDepartmentRoles.member;
    field.value.split(/\r?\n/).forEach((line) => {
      const roles = line.match(/<@&\d{17,20}>/g);
      if (roles && (line.includes('➜') || line.includes('<@&'))) currentRole = roles[roles.length - 1];
      else {
        const userId = extractDiscordId(line);
        if (userId) map[userId] = currentRole;
      }
    });
    return map;
  }

  function getResponsibilityEvaluations() {
    const field = moduleContent.querySelector('.module-responsibilities');
    const evaluations = {};
    if (!field || !field.value.trim()) return evaluations;

    field.value.split(/={3,}/).forEach((block) => {
      const lines = block.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
      let identity = '';
      let evaluation = '';

      lines.forEach((line) => {
        const separatorIndex = line.indexOf(':');
        if (separatorIndex < 0) {
          if (!identity) identity = extractDiscordId(line);
          return;
        }

        const key = line.slice(0, separatorIndex).trim();
        const value = line.slice(separatorIndex + 1).trim();
        identity = extractDiscordId(key) || extractDiscordId(value) || identity;
        if (/منشن الشخص|المنشن|الايدي|id/i.test(key)) identity = extractDiscordId(value) || identity;
        if (/التقييم بالمسؤوليات|التقيم بالمسؤوليات|المسؤوليات|المسوليات/i.test(key)) evaluation = value;
        if (!/منشن الشخص|المنشن|الايدي|id|التقييم بالمسؤوليات|التقيم بالمسؤوليات|المسؤوليات|المسوليات/i.test(key) && identity) evaluation = value;
      });

      if (!identity && lines[0]) identity = extractDiscordId(lines[0]);
      if (!evaluation && lines.length >= 2) evaluation = lines[lines.length - 1].replace(/^.*?:\s*/, '').trim();
      if (identity && evaluation) evaluations[identity] = evaluation;
    });

    return evaluations;
  }

  function formattedMentionForEvent(value) {
    return formatEventUserMention(value) || formatUserMention(value) || 'غير متاح';
  }

  function preserveScenarioMention(mention, identity) {
    const source = String(mention || '').trim();
    const mentionMatch = source.match(/<@!?(\d{17,20})>/i);
    if (mentionMatch) return `<@${mentionMatch[1]}>`;
    return formattedMentionForEvent(source || identity);
  }

  function buildEventPointsText(categories) {
    return `**السلام عليكم ورحمة الله وبركاتة •\nوالصلاة والسلام على اشرف الانبياء والمرسلين سيدنا ونبينا محمد\nأسعد الله اوقاتكم بكل خير جميعًا\nتحيه طيبه وبعد • **\n\n` +
      `**يتم أعطاء المدعو : **\n<@&1135000856236925014>\n${categories[1].join('\n') || 'لا يوجد'}\n\n` +
      `<@&1135000856278880326>\n${categories[2].join('\n') || 'لا يوجد'}\n\n` +
      `<@&1135000856236925016>\n${categories[3].join('\n') || 'لا يوجد'}\n\n` +
      "` السبب  : جرداسبوعي استمروووو `\n\n**`توقيع:`**\n  <@&1135000856417292360>\n<@&1135000856379531336>\n\n||<@&1135000856278880335>||";
  }

  function buildEventPenaltyText(users, action) {
    return `**═════════ ﷽ ═══════════**\n\n**باسمي <@&1135000856417292360> **\n\n**\`يتم محاسبة المدعو :\`**\n\n` +
      `${users.join('\n') || 'لا يوجد'}\n\n** بـ  : ${action}**\n\n\`السبب :عدم تفاعل \`\n\n--------------------\n\n` +
      `**اسأل الله التوفيق لي ولكم التوفيق والسداد **\n\n**توقيع   **\n- <@&1135000856417292360> \n- <@&1135000856379531336> \n\n||<@&1135000856278880335>||`;
  }

  function buildScenarioPointsText(categories) {
    return `**السلام عليكم ورحمة الله وبركاتة •\nوالصلاة والسلام على اشرف الانبياء والمرسلين سيدنا ونبينا محمد\nأسعد الله اوقاتكم بكل خير جميعًا\nتحيه طيبه وبعد • **\n\n**يتم أعطاء المدعو : **\n<@&1480630670245236787>\n${categories[1].join('\n') || 'لا يوجد'}\n\n` +
      `<@&1480631057580560486>\n${categories[2].join('\n') || 'لا يوجد'}\n\n\` السبب  : جرداسبوعي استمروووو \`\n\n**\`توقيع:\`**\n<@&1480626996445712415>\n<@&1480624032121618604>\n\n||<@&1480356635355512963>||`;
  }

  function buildScenarioPenaltyText(users, action) {
    return `**═════════ ﷽ ═══════════**\n\n**باسمي <@&1480626996445712415> **\n\n**\`يتم محاسبة المدعو :\`**\n\n${users.join('\n') || 'لا يوجد'}\n\n**بـ : ${action}**\n\n\`السبب : عدم تفاعل \`\n\n--------------------\n\n**اسأل الله التوفيق لي ولكم التوفيق والسداد **\n\n**توقيع   **\n- <@&1480626996445712415>\n- <@&1480624032121618604>\n\n||<@&1480356635355512963>||`;
  }

  function parseScenarioNumber(value) {
    const match = String(value || '').replace(/,/g, '').match(/-?\d+(?:\.\d+)?/);
    return match ? Number(match[0]) : 0;
  }

  function parseScenarioHours(value) {
    const text = String(value || '').trim();
    if (!text) return 0;
    const hours = text.match(/(\d+(?:\.\d+)?)\s*(?:س|ساعة|ساعات|h)/i);
    const minutes = text.match(/(\d+(?:\.\d+)?)\s*(?:د|دقيقة|دقائق|m)/i);
    if (hours || minutes) return (hours ? Number(hours[1]) * 60 : 0) + (minutes ? Number(minutes[1]) : 0);
    const clock = text.match(/^(\d+)\s*[:.]\s*(\d{1,2})$/);
    if (clock) return Number(clock[1]) * 60 + Number(clock[2]);
    return parseScenarioNumber(text) * 60;
  }

  function parseScenarioTriple(value) {
    const numbers = String(value || '').match(/\d+(?:\.\d+)?/g) || [];
    return [0, 1, 2].map((index) => Number(numbers[index] || 0));
  }

  function scenarioIdentityKey(value) {
    const discordId = extractDiscordId(value);
    if (discordId) return discordId;
    return String(value || '').replace(/^@+/, '').trim().toLowerCase();
  }

  function scenarioGradeFromPoints(points) {
    if (points >= 450) return 'ممتاز جدا';
    if (points >= 251) return 'ممتاز';
    if (points >= 151) return 'جيد جدا';
    return 'سيء';
  }

  function scenarioLowerGrade(grade) {
    if (grade.includes('ممتاز جدا')) return 'ممتاز';
    if (grade.includes('ممتاز')) return 'جيد جدا';
    if (grade.includes('جيد جدا')) return 'سيء';
    return 'سيء';
  }

  function lowerScenarioGradeByCount(grade, count) {
    let result = grade;
    for (let index = 0; index < count; index++) {
      result = scenarioLowerGrade(result);
    }
    return result;
  }

  function scenarioGradeRank(grade) {
    if (grade.includes('ممتاز جدا')) return 3;
    if (grade.includes('ممتاز')) return 2;
    if (grade.includes('جيد جدا')) return 1;
    return 0;
  }

  function calculateScenarioFinalGrade(baseGrade, responsibilityGrade, badResponsibilityCount = 0) {
    if (!responsibilityGrade || responsibilityGrade === 'لايوجد مسؤوليات') return baseGrade;
    if (responsibilityGrade === 'سيء' && badResponsibilityCount > 0) return scenarioLowerGrade(baseGrade);
    return baseGrade;
  }

  function scenarioResponsibilityGrade(value) {
    const text = String(value || '').trim();
    if (/ممتاز\s*جدا/.test(text)) return 'ممتاز جدا';
    if (/جيد\s*جدا/.test(text)) return 'جيد جدا';
    if (/ممتاز/.test(text)) return 'ممتاز';
    if (/سيء|سئ|سيئ|ضعيف|عدم تفاعل/.test(text)) return 'سيء';
    return '';
  }

  function scenarioResponsibilityPoints(value, points) {
    const grade = scenarioResponsibilityGrade(value);
    return grade === 'ممتاز' || grade === 'ممتاز جدا' ? points : 0;
  }

  function getScenarioResponsibilityMap(rawText) {
    const map = {};
    String(rawText || '').split(/={3,}/).forEach((block) => {
      const values = {};
      let userId = '';
      block.split(/\r?\n/).forEach((line) => {
        const separator = line.indexOf(':');
        if (separator < 0) return;
        const key = line.slice(0, separator).trim();
        const value = line.slice(separator + 1).trim();
        userId = userId || scenarioIdentityKey(value) || scenarioIdentityKey(key);
        if (/مراقبة اللوقات/.test(key)) values.logs = value;
        else if (/تدقيق الصور/.test(key)) values.images = value;
        else if (/الملاحظات/.test(key)) values.notes = value;
        else if (/الاجازات/.test(key)) values.leaves = value;
        else if (/التحذيرات/.test(key)) values.warnings = value;
        else if (/دفتر الحضور/.test(key)) values.attendance = value;
        else if (/مسؤول الجرد/.test(key)) values.inventory = value;
        else if (/مشرف المسؤوليات/.test(key)) values.responsibilitySupervisor = value;
        else if (/تقييم المسؤوليات النهائي|تقيم المسؤوليات النهائي|تقييم المسؤوليات|تقيم المسؤوليات|التقييم النهائي|التقيم النهائي/.test(key)) values.final = value;
      });
      if (userId) map[userId] = values;
    });
    return map;
  }

  function parseScenarioRecords(input) {
    const records = [];
    const cleanInput = String(input || '').replace(/[\u200B-\u200D\uFEFF\u200F]/g, '');
    cleanInput.split(/(?=منشن\s*الشخص\s*:)|\*\*==============\*\*/g).forEach((block) => {
      if (!/منشن\s*الشخص/.test(block)) return;
      const record = { mention: '', id: '', adminRank: '', thiefHours: '', scenarioHours: '', generalHours: '', totalHours: '', completedRooms: '', common: 0, jewelry: '', central: '', home: '', scenarioPoints: 0, photos: '', stolenPhotos: 0, rawGrade: '' };
      block.split(/\r?\n/).forEach((line) => {
        const separator = line.indexOf(':');
        if (separator < 0) return;
        const key = line.slice(0, separator).replace(/[\u200B-\u200D\uFEFF\u200F]/g, '').trim();
        const value = line.slice(separator + 1).trim();
        if (/منشن\s*الشخص/.test(key)) record.mention = value;
        else if (/^الايدي/.test(key)) record.id = value;
        else if (/الرتبة\s*الادارية/.test(key)) record.adminRank = value;
        else if (/ساعات مراقب سرقات/.test(key)) record.thiefHours = value;
        else if (/ساعات مراقب سيناريوهات/.test(key)) record.scenarioHours = value;
        else if (/ساعات مراقب عام/.test(key)) record.generalHours = value;
        else if (/مجموع الساعات/.test(key)) record.totalHours = value;
        else if (/هل أكمل 4 ساعات/.test(key)) record.completedRooms = value;
        else if (/مراقبة السيناريو المشترك/.test(key)) record.common = parseScenarioNumber(value);
        else if (/مراقبة المجوهرات/.test(key)) record.jewelry = value;
        else if (/مراقبة سيناريوهات البنك المركزي/.test(key)) record.central = value;
        else if (/مراقبة سرقة المنزل/.test(key)) record.home = value;
        else if (/اجمالي نقاط السيناريوهات/.test(key)) record.scenarioPoints = parseScenarioNumber(value);
        else if (/مراقبة\s*(?:300|400)\s*صورة/.test(key)) record.photos = value;
        else if (/مجموع الصور للسرقات/.test(key)) record.stolenPhotos = parseScenarioNumber(value);
        else if (/التقييم النهائي|التقيم النهائي/.test(key)) record.rawGrade = value;
      });
      record.identity = extractDiscordId(record.mention) || scenarioIdentityKey(record.mention) || scenarioIdentityKey(record.id);
      if (record.identity) records.push(record);
    });
    return records;
  }

  function getRaqabhResponsibilityMap(rawText) {
    const map = {};
    String(rawText || '').split(/={3,}/).forEach((block) => {
      const values = {};
      let userId = '';
      block.split(/\r?\n/).forEach((line) => {
        const separator = line.indexOf(':');
        if (separator < 0) return;
        const key = line.slice(0, separator).trim();
        const value = line.slice(separator + 1).trim();
        userId = userId || extractDiscordId(value) || extractDiscordId(key);
        if (/مسؤول الاجازات|مسوؤل الاجازات/.test(key)) values.leaves = value;
        else if (/مراقبه الرقابين|مراقبة الرقابين/.test(key)) values.monitors = value;
        else if (/مراقبة اللوقات/.test(key)) values.logs = value;
        else if (/دفتر الحضور/.test(key)) values.attendance = value;
        else if (/مسؤول الجرد/.test(key)) values.inventory = value;
        else if (/مشرف المسؤوليات/.test(key)) values.supervisor = value;
        else if (/تدقيق السجون/.test(key)) values.prisons = value;
      });
      if (userId) map[userId] = values;
    });
    return map;
  }

  function buildRaqabhSectionResult(input, authorName, cfg, memberRanks = {}) {
    const separator = '**==============**';
    const finalSeparator = '`-----------------------------------------------------`';
    let output = `${separator}\n`;
    let finalInventory = `${finalSeparator}\n`;
    const points = { 1: [], 2: [] };
    const demote = [];
    const dismiss = [];
    let reasonsOutput = '';
    let total = 0;
    let bad = 0;
    let active = 0;
    const responsibilityMap = getRaqabhResponsibilityMap(document.querySelector('.module-responsibilities')?.value || '');

    String(input || '').split(/(?=منشن\s*الشخص\s*:|الايدي\s*:)/).forEach((block) => {
      if (!block.trim()) return;
      const data = { mention: '', id: '', rank: '', ownership: '', private: '', general: '', totalHours: '', completedRooms: '', rawEval: '', finalEval: '' };
      block.split(/\r?\n/).forEach((line) => {
        const index = line.indexOf(':');
        if (index < 0) return;
        const key = line.slice(0, index).trim();
        const value = line.slice(index + 1).trim();
        if (/منشن\s*الشخص/.test(key)) data.mention = value;
        else if (/^الايدي/.test(key)) data.id = value;
        else if (/الرتبة\s*الادارية/.test(key)) data.rank = value;
        else if (/مراقب الملكية|ساعات الملكية/.test(key)) data.ownership = value;
        else if (/مراقب خصوصي/.test(key)) data.private = value;
        else if (/مراقب عام/.test(key)) data.general = value;
        else if (/مجموع الساعات/.test(key)) data.totalHours = value;
        else if (/أكمل 4 ساعات/.test(key)) data.completedRooms = value;
        else if (/التقييم النهائي|التقيم النهائي/.test(key)) data.finalEval = value;
        else if (/^التقييم|^التقيم/.test(key)) data.rawEval = value;
      });
      const identity = extractDiscordId(data.mention) || extractDiscordId(data.id);
      if (!identity) return;
      const mention = preserveScenarioMention(data.mention, identity);
      const rankInfo = raqabhRankInfo(memberRanks[identity] || '');
      const totalMinutes = [data.ownership, data.private, data.general].reduce((sum, value) => sum + parseScenarioHours(value), 0) || parseScenarioHours(data.totalHours);
      const hourlyRate = rankInfo.kind === 'member' ? 20 : 30;
      const hoursPoints = (Math.floor(totalMinutes / 60) + (totalMinutes % 60 > 30 ? 1 : 0)) * hourlyRate;
      const requiredRooms = rankInfo.kind === 'assistant'
        ? [{ name: 'الملكية', value: data.ownership }, { name: 'خصوصي', value: data.private }, { name: 'عام', value: data.general }]
        : [];
      const completedEveryRequiredRoom = requiredRooms.length > 0 && requiredRooms.every((room) => parseScenarioHours(room.value) >= 4 * 60);
      const roomsBonus = completedEveryRequiredRoom ? 50 : 0;
      const responsibilities = responsibilityMap[identity] || {};
      const responsibilityValues = Object.values(responsibilities).map(scenarioResponsibilityGrade).filter(Boolean);
      const highestResponsibility = responsibilityValues.slice().sort((left, right) => scenarioGradeRank(right) - scenarioGradeRank(left))[0] || 'لايوجد مسؤوليات';
      const badResponsibilityCount = responsibilityValues.filter((value) => value === 'سيء').length;
      const responsibilityGrade = badResponsibilityCount > 0 ? lowerScenarioGradeByCount(highestResponsibility, badResponsibilityCount) : highestResponsibility;
      const responsibilityPoints = scenarioResponsibilityPoints(responsibilities.leaves, 50) +
        scenarioResponsibilityPoints(responsibilities.monitors, 75) +
        scenarioResponsibilityPoints(responsibilities.logs, 75) +
        scenarioResponsibilityPoints(responsibilities.attendance, 100) +
        scenarioResponsibilityPoints(responsibilities.inventory, 150) +
        scenarioResponsibilityPoints(responsibilities.supervisor, 200);
      const totalPoints = hoursPoints + roomsBonus + responsibilityPoints;
      const evaluation = data.finalEval || data.rawEval || scenarioGradeFromPoints(totalPoints);
      const isOut = /خارج\s*الخدمة|إجازة|اجازة/.test(evaluation);
      const finalEvaluation = isOut ? cfg.outRoleMention : calculateScenarioFinalGrade(evaluation, responsibilityGrade, badResponsibilityCount);
      total++;
      if (/سيء|سئ|عدم تفاعل/.test(evaluation)) bad++;
      else if (!isOut) active++;
      const pointValue = /ممتاز\s*جدا/.test(evaluation) ? 2 : /ممتاز|جيد\s*جدا/.test(evaluation) ? 1 : 0;
      if (rankInfo.points && !isOut && pointValue) points[pointValue].push(mention);
      if (!isOut && /سيء|سئ|عدم تفاعل/.test(evaluation) && rankInfo.punish === 'demote') demote.push(mention);
      if (!isOut && /سيء|سئ|عدم تفاعل/.test(evaluation) && rankInfo.punish === 'dismiss') dismiss.push(mention);
      const cleanRank = cleanAndStandardizeRank(data.rank);
      const requiredRoomsText = requiredRooms.length ? requiredRooms.map((room) => room.name).join('، ') : 'لا توجد رومز مطلوبة لهذه الرتبة';
      reasonsOutput += `${mention}\nنقاط الساعات: ${hoursPoints}\nرومات هذه الرتبة: ${requiredRoomsText}\nبونص إكمال 4 ساعات بالرومات المطلوبة: ${roomsBonus}\nنقاط المسؤوليات: ${responsibilityPoints}\nالتقييم: ${evaluation}\nتقييم المسؤوليات: ${responsibilityGrade}\nالتقييم النهائي: ${finalEvaluation}\n\n`;
      if (rankInfo.kind === 'assistant') output += `الايدي : ${data.id}\nالرتبة الادارية : ${cleanRank}\nعدد ساعات مراقب الملكية : ${data.ownership}\nعدد ساعات مراقب خصوصي : ${data.private}\nعدد ساعات مراقب عام : ${data.general}\nمجموع البوينتات : ${totalPoints}\nالتقييم : ${evaluation}\nتقييم المسؤوليات : ${responsibilityGrade}\nالتقيم النهائي : ${finalEvaluation}\n${separator}\n`;
      else if (rankInfo.kind === 'supervisor') output += `الايدي : ${data.id}\nالرتبة الادارية : ${cleanRank}\nعدد ساعات مراقب الملكية : ${data.ownership}\nعدد ساعات مراقب خصوصي : ${data.private}\nمجموع البوينتات : ${totalPoints}\nالتقييم : ${evaluation}\nتقييم المسؤوليات : ${responsibilityGrade}\nالتقيم النهائي : ${finalEvaluation}\n${separator}\n`;
      else if (rankInfo.kind === 'leader') output += `الايدي : ${data.id}\nالرتبة الادارية : ${cleanRank}\nعدد ساعات الملكية : ${data.ownership}\nاجمالي البوينتات : ${totalPoints}\nتقييم المسؤوليات : ${responsibilityGrade}\nالتقيم النهائي : ${finalEvaluation}\n${separator}\n`;
      else output += `الايدي : ${data.id}\nالرتبة الادارية : ${cleanRank}\nعدد ساعات الملكية : ${data.ownership}\nاجمالي البوينتات : ${totalPoints}\nالتقيم النهائي : ${finalEvaluation}\n${separator}\n`;
      finalInventory += `${mention}\nالتقييم : ${finalEvaluation}\nالرتبة الادارية : ${cleanRank}\n${finalSeparator}\n`;
    });

    return {
      output,
      report: buildWeeklyReport(total, 0, 0, bad, active, authorName),
      total,
      duplicates: [],
      pointsOutput: buildRaqabhPointsText(points),
      demoteOutput: buildRaqabhPenaltyText(demote, 'كسر'),
      dismissOutput: buildRaqabhPenaltyText(dismiss, 'اعفاء'),
      reasonsOutput,
      finalInventory
    };
  }

  function buildRaqabhPointsText(points) {
    return `**السلام عليكم ورحمة الله وبركاتة •\nوالصلاة والسلام على اشرف الانبياء والمرسلين سيدنا ونبينا محمد\nأسعد الله اوقاتكم بكل خير جميعًا\nتحيه طيبه وبعد • **\n\n` +
      `**يتم أعطاء المدعو : **\n<@&1135000856119496885>\n${points[1].join('\n') || 'لا يوجد'}\n\n` +
      `<@&1135000856064958510>\n${points[2].join('\n') || 'لا يوجد'}\n\n` +
      '` السبب : جرد أسبوعي استمروا `\n\n' +
      `**\`توقيع:\`**\n- <@&1135000856379531344>\n- <@&1135000856304042013>\n\n|| <@&1135000856144658444> ||`;
  }

  function buildRaqabhPenaltyText(users, action) {
    return `**═════════ ﷽ ═══════════**\n\n**باسمي <@&1135000856379531344> **\n\n` +
      `**\`يتم محاسبة المدعو :\`**\n\n${users.join('\n') || 'لا يوجد'}\n\n` +
      `**بـ : ${action}**\n\n\`السبب : عدم تفاعل\`\n\n--------------------\n\n` +
      `**اسأل الله التوفيق لي ولكم التوفيق والسداد **\n\n**توقيع**\n- <@&1135000856379531344>\n- <@&1135000856304042013>\n\n|| <@&1135000856144658444> ||`;
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

  function buildEventSectionResult(input, authorName, cfg, memberRanks = {}, responsibilityEvaluations = {}) {
    const lineSeparator = '**==============**';
    const finalInventorySeparator = '`-----------------------------------------------------`';
    const blocks = input.split(/={3,}/);
    let result = `${lineSeparator}\n`;
    let finalInventory = `${finalInventorySeparator}\n`;
    let processedCount = 0;
    let idTracker = {};
    let countNew = 0;
    let countOut = 0;
    let countBad = 0;
    let countActive = 0;
    const pointCategories = { 1: [], 2: [], 3: [] };
    const demoteUsers = [];
    const dismissUsers = [];

    blocks.forEach((block) => {
      if (!block.trim()) return;

      let data = {
        id: '',
        events: 0,
        deptRank: '',
        sectionPoints: '',
        memberPoints: '',
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
        else if (key.includes('رتبة القسم')) data.deptRank = val;
        else if (key.includes('بوينتات القسم')) data.sectionPoints = val;
        else if (key === 'البوينتات' || key.includes('البوينتات')) data.memberPoints = val;
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
      const userId = extractDiscordId(data.id);
      if (Object.keys(responsibilityEvaluations).length > 0) {
        data.respEval = responsibilityEvaluations[userId] || 'لايوجد مسؤوليات';
      } else if (!data.respEval) {
        data.respEval = 'لايوجد مسؤوليات';
      }
      const departmentRankInfo = eventRankInfo((userId && memberRanks[userId]) || data.deptRank);
      const administrativeRankInfo = eventRankInfo(data.rank);
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

      const calculatedSectionPoints = finalRating.includes('ممتاز جدا') ? 3 : finalRating.includes('ممتاز') ? 2 : finalRating.includes('جيد جدا') ? 1 : 0;
      const sectionPoints = data.sectionPoints && data.sectionPoints !== '0' ? data.sectionPoints : String(calculatedSectionPoints);
      const calculatedMemberPoints = !administrativeRankInfo.points ? '0' : data.events >= 100 ? 'ترقيتين' : data.events >= 50 ? 'ترقية' : data.events >= 25 ? '2' : data.events >= 15 ? '1' : '0';
      const memberPoints = calculatedMemberPoints;
      if (finalRating === 'سيء' && departmentRankInfo.punish === 'demote') demoteUsers.push(formattedMentionForEvent(data.id));
      if (finalRating === 'سيء' && departmentRankInfo.punish === 'dismiss') dismissUsers.push(formattedMentionForEvent(data.id));
      const sectionPointValue = parseInt(sectionPoints, 10) || 0;
      if (departmentRankInfo.points && finalRating !== 'خارج خدمة' && sectionPointValue > 0) {
        pointCategories[Math.min(sectionPointValue, 3)].push(formattedMentionForEvent(data.id));
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
      result += `الايدي : ${data.id.trim()}\nعدد الفعاليات : ${data.events}\nرتبة القسم : ${departmentRankInfo.role}\nبوينتات القسم : ${sectionPoints}\nالبوينتات : ${memberPoints}\nالتقييم : ${sectionRes.text}\nالتقييم بالمسؤوليات : ${data.respEval}\nالرتبة الادارية : ${cleanRank}\nالتقيم النهائي : ${evaluationOutput}\n${lineSeparator}\n`;
      finalInventory += `${formattedMention}\nالتقييم : ${evaluationOutput}\nالرتبة الادارية : ${cleanRank}\n${finalInventorySeparator}\n`;
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

    const pointsOutput = buildEventPointsText(pointCategories);
    const demoteOutput = buildEventPenaltyText(demoteUsers, 'كسر');
    const dismissOutput = buildEventPenaltyText(dismissUsers, 'اعفاء');

    return {
      output: result,
      report,
      total: processedCount,
      duplicates: duplicateEntries,
      pointsOutput,
      demoteOutput,
      dismissOutput,
      finalInventory
    };
  }

  function buildScenarioSectionResult(input, authorName, cfg, memberRanks = {}, responsibilityEvaluations = {}) {
    const lineSeparator = '**==============**';
    const finalInventorySeparator = '`-----------------------------------------------------`';
    let result = `${lineSeparator}\n`;
    let finalInventory = `${finalInventorySeparator}\n`;
    let processedCount = 0;
    const idTracker = {};
    let countNew = 0;
    let countOut = 0;
    let countBad = 0;
    let countActive = 0;
    const pointCategories = { 1: [], 2: [], 3: [] };
    const demoteUsers = [];
    const dismissUsers = [];
    let reasonsOutput = '';
    const records = parseScenarioRecords(input);
    const responsibilityMap = getScenarioResponsibilityMap(document.querySelector('.module-responsibilities')?.value || '');

    records.forEach((data) => {
      const userId = data.identity;
      const mention = preserveScenarioMention(data.mention, data.identity);
      const departmentRankInfo = scenarioRankInfo(memberRanks[userId] || '');
      const administrativeRankInfo = eventRankInfo(data.adminRank);
      const responsibilities = responsibilityMap[userId] || {};
      const hoursMinutes = [data.thiefHours, data.scenarioHours, data.generalHours].reduce((sum, value) => sum + parseScenarioHours(value), 0);
      const totalMinutes = hoursMinutes || parseScenarioHours(data.totalHours);
      const creditedHours = Math.floor(totalMinutes / 60) + (totalMinutes % 60 > 30 ? 1 : 0);
      const hoursPoints = creditedHours * 30;
      const scenarioPoints = parseScenarioTriple(data.jewelry).reduce((sum, value) => sum + value, 0) * 5 + parseScenarioTriple(data.central).reduce((sum, value) => sum + value, 0) * 6 + parseScenarioTriple(data.home).reduce((sum, value) => sum + value, 0) * 3 + parseScenarioNumber(data.common) * 8;
      const hoursBonus = totalMinutes >= 16 * 60 ? 50 : 0;
      const monitoredScenarios = parseScenarioNumber(data.common) + parseScenarioTriple(data.jewelry).reduce((sum, value) => sum + value, 0) + parseScenarioTriple(data.central).reduce((sum, value) => sum + value, 0) + parseScenarioTriple(data.home).reduce((sum, value) => sum + value, 0);
      const photosBonus = monitoredScenarios >= 400 ? 50 : 0;
      const responsibilityPoints = scenarioResponsibilityPoints(responsibilities.leaves, 50) +
        scenarioResponsibilityPoints(responsibilities.logs, 75) +
        scenarioResponsibilityPoints(responsibilities.images, 75) +
        scenarioResponsibilityPoints(responsibilities.notes, 75) +
        scenarioResponsibilityPoints(responsibilities.attendance, 100) +
        scenarioResponsibilityPoints(responsibilities.inventory, 150) +
        scenarioResponsibilityPoints(responsibilities.responsibilitySupervisor, 200);
      const extraPoints = hoursBonus + photosBonus + responsibilityPoints;
      const totalPoints = hoursPoints + scenarioPoints + extraPoints;
      const baseGrade = scenarioGradeFromPoints(totalPoints);
      const individualResponsibilityValues = [responsibilities.images, responsibilities.notes, responsibilities.leaves, responsibilities.warnings]
        .map(scenarioResponsibilityGrade)
        .filter(Boolean);
      const responsibilityValues = individualResponsibilityValues;
      const highestResponsibility = responsibilityValues.slice().sort((left, right) => scenarioGradeRank(right) - scenarioGradeRank(left))[0] || 'لايوجد مسؤوليات';
      const badResponsibilityCount = individualResponsibilityValues.filter((value) => value === 'سيء').length;
      const responsibilityGrade = badResponsibilityCount > 0
        ? lowerScenarioGradeByCount(highestResponsibility, badResponsibilityCount)
        : highestResponsibility;
      const sourceText = [data.rawGrade, data.adminRank, data.mention, data.id].join(' ');
      const isOutOfService = /خارج\s*الخدمة|خارج\s*خدمة|إجازة|اجازة/i.test(sourceText) || sourceText.includes(cfg.outRoleId) || sourceText.includes(cfg.outRoleMention);
      let finalRating = isOutOfService ? cfg.outRoleMention : calculateScenarioFinalGrade(baseGrade, responsibilityGrade, badResponsibilityCount);
      const rawKey = userId || data.mention;
      idTracker[rawKey] = (idTracker[rawKey] || 0) + 1;
      processedCount++;

      if (isOutOfService) countOut++;
      else if (finalRating === 'سيء') countBad++;
      else if (finalRating === 'جيد جدا' || finalRating === 'ممتاز' || finalRating === 'ممتاز جدا') countActive++;
      const pointValue = finalRating.includes('ممتاز جدا') ? 2 : finalRating.includes('ممتاز') || finalRating.includes('جيد جدا') ? 1 : 0;
      if (departmentRankInfo.points && !isOutOfService && pointValue) pointCategories[pointValue].push(mention);
      if (!isOutOfService && finalRating === 'سيء' && departmentRankInfo.punish === 'demote') demoteUsers.push(mention);
      if (!isOutOfService && finalRating === 'سيء' && departmentRankInfo.punish === 'dismiss') dismissUsers.push(mention);

      const cleanRank = cleanAndStandardizeRank(data.adminRank);
      const jewelryTotal = parseScenarioTriple(data.jewelry).reduce((sum, value) => sum + value, 0);
      const centralTotal = parseScenarioTriple(data.central).reduce((sum, value) => sum + value, 0);
      const homeTotal = parseScenarioTriple(data.home).reduce((sum, value) => sum + value, 0);
      const reasons = [];
      if (hoursPoints) reasons.push(`الساعات: ${hoursPoints} نقطة`);
      if (data.common) reasons.push(`مراقبة السيناريو المشترك: ${data.common} × 8 = ${data.common * 8}`);
      if (jewelryTotal) reasons.push(`مراقبة المجوهرات والبنوك واليخت: ${jewelryTotal} × 5 = ${jewelryTotal * 5}`);
      if (centralTotal) reasons.push(`مراقبة البنك المركزي والمترو والاستوديو: ${centralTotal} × 6 = ${centralTotal * 6}`);
      if (homeTotal) reasons.push(`مراقبة المنزل والبقالة والمصرف: ${homeTotal} × 3 = ${homeTotal * 3}`);
      if (hoursBonus) reasons.push('بونص إتمام 16 ساعة: 50 نقطة');
      if (photosBonus) reasons.push('بونص إتمام 400 مراقبة: 50 نقطة');
      if (responsibilityPoints) reasons.push(`نقاط المسؤوليات: ${responsibilityPoints}`);
      reasons.push(`التقييم ${baseGrade} لأن إجمالي البوينتات ${totalPoints}`);
      if (responsibilityGrade !== 'لايوجد مسؤوليات') reasons.push(`تقييم المسؤوليات ${responsibilityGrade}`);
      if (finalRating !== baseGrade && !isOutOfService) reasons.push(`التقييم النهائي ${finalRating} بسبب تقييم المسؤوليات`);
      if (isOutOfService) reasons.push('التقييم النهائي خارج الخدمة بسبب الإجازة أو خارج الخدمة');
      reasonsOutput += `${mention}\n${reasons.join('\n') || 'لا توجد نقاط مستحقة'}\nإجمالي البوينتات: ${totalPoints}\n\n`;
      const isMember = departmentRankInfo.role === scenarioDepartmentRoles.member;
      const displayId = data.id || '';
      if (isMember) {
        result += `منشن الشخص : ${mention}\nالايدي : ${displayId}\nالرتبة الادارية : ${cleanRank}\nعدد مراقبة المجوهرات + البنوك + اليخت : ${data.jewelry || '0-0-0'}\nعدد مراقبة سيناريوهات البنك المركزي + الميترو + الاستوديو : ${data.central || '0-0-0'}\nعدد مراقبة سرقة المنزل + بقالة + مصرف : ${data.home || '0-0-0'}\nمجموع الصور للسرقات : ${data.stolenPhotos}\nمجموع البوينتات : ${totalPoints}\nالتقييم : ${baseGrade}\nالتقيم النهائي : ${finalRating}\n${lineSeparator}\n`;
      } else {
        result += `منشن الشخص : ${mention}\nالايدي : ${displayId}\nساعات مراقب سرقات : ${data.thiefHours}\nساعات مراقب سيناريوهات : ${data.scenarioHours}\nساعات مراقب عام : ${data.generalHours}\nمجموع الساعات : ${Math.floor(totalMinutes / 60)}س ${totalMinutes % 60}د\nهل أكمل 4 ساعات بـ كل روم ؟ : ${data.completedRooms}\nعدد مراقبة السيناريو المشترك : ${data.common}\nعدد مراقبة المجوهرات + البنوك + اليخت : ${data.jewelry || '0-0-0'}\nعدد مراقبة سيناريوهات البنك المركزي + الميترو + الاستوديو : ${data.central || '0-0-0'}\nعدد مراقبة سرقة المنزل + بقالة + مصرف : ${data.home || '0-0-0'}\nاجمالي نقاط السيناريوهات : ${scenarioPoints}\nنقاط إضافية للساعات : ${hoursBonus}\nنقاط إضافية للصور : ${photosBonus}\nنقاط المسؤوليات : ${responsibilityPoints}\nاجمالي البوينتات : ${totalPoints}\nالرتبة الادارية : ${cleanRank}\nالتقييم : ${baseGrade}\nتقيم المسؤوليات : ${responsibilityGrade}\nالتقيم النهائي : ${finalRating}\n${lineSeparator}\n`;
      }
      finalInventory += `${mention}\nالتقييم : ${finalRating}\nالرتبة الادارية : ${cleanRank}\n${finalInventorySeparator}\n`;
    });

    return {
      output: result,
      report: buildWeeklyReport(processedCount, countNew, countOut, countBad, countActive, authorName),
      total: processedCount,
      duplicates: Object.keys(idTracker).filter((key) => idTracker[key] > 1).map((key) => ({ id: key, count: idTracker[key] })),
      pointsOutput: buildScenarioPointsText(pointCategories),
      demoteOutput: buildScenarioPenaltyText(demoteUsers, 'كسر'),
      dismissOutput: buildScenarioPenaltyText(dismissUsers, 'اعفاء'),
      reasonsOutput,
      finalInventory
    };
  }

  function processModuleData(input, authorName, moduleKey, responsibilityEvaluations = {}) {
    const cfg = moduleDefs[moduleKey] || moduleDefs.events;
    if (!input.trim()) {
      return { output: '', report: '', total: 0, duplicates: [] };
    }

    if (moduleKey === 'events') {
      return buildEventSectionResult(input, authorName, cfg, getEventMemberRanks(), responsibilityEvaluations);
    }

    if (moduleKey === 'scenario') {
      return buildScenarioSectionResult(input, authorName, cfg, getScenarioMemberRanks(), responsibilityEvaluations);
    }

    if (moduleKey === 'raqabh') {
      return buildRaqabhSectionResult(input, authorName, cfg, getRaqabhMemberRanks());
    }

    if (moduleKey === 'interviews') {
      const lineSeparator = '**==============**';
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
      const lineSeparator = '**==============**';
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
      const lineSeparator = '**==============**';
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
    const reasonsOutput = inventoryPanel ? inventoryPanel.querySelector('.module-reasons-output') : moduleContent.querySelector('.module-reasons-output');
    const finalOutput = inventoryPanel ? inventoryPanel.querySelector('.module-final-output') : moduleContent.querySelector('.module-final-output');
    const report = inventoryPanel ? inventoryPanel.querySelector('.module-report') : moduleContent.querySelector('.module-report');
    const authorInput = inventoryPanel ? inventoryPanel.querySelector('.module-author') : moduleContent.querySelector('.module-author');
    const totalCount = inventoryPanel ? inventoryPanel.querySelector('.stats-count') : moduleContent.querySelector('.stats-count');
    const duplicateAlert = inventoryPanel ? inventoryPanel.querySelector('.stats-duplicates') : moduleContent.querySelector('.stats-duplicates');
    const membersField = moduleContent.querySelector('.module-members');
    const responsibilitiesField = moduleContent.querySelector('.module-responsibilities');

    if (!input || !output || !report || !authorInput || !totalCount || !duplicateAlert) {
      return;
    }

    const processCurrentModule = () => {
      let result;
      try {
        result = processModuleData(input.value, authorInput.value.trim(), moduleKey, getResponsibilityEvaluations());
      } catch (error) {
        console.error('Module processing failed:', error);
        output.value = `تعذر تجهيز المخرجات: ${error.message || 'خطأ غير معروف'}`;
        if (finalOutput) finalOutput.value = '';
        report.value = '';
        totalCount.textContent = 'إجمالي العدد: 0';
        return;
      }
      output.value = result.output;
      if (reasonsOutput) reasonsOutput.value = moduleKey === 'scenario' || moduleKey === 'raqabh'
        ? (result.reasonsOutput || '')
        : buildDepartmentReasons(result.output, moduleKey);
      if (finalOutput) finalOutput.value = result.finalInventory || buildFinalInventoryOutput(result.output);
      report.value = result.report;
      totalCount.textContent = `إجمالي العدد: ${result.total}`;

      if (moduleKey === 'events' || moduleKey === 'scenario' || moduleKey === 'raqabh' || moduleKey === 'interviews' || moduleKey === 'ban' || moduleKey === 'roles') {
        if ((moduleKey === 'events' || moduleKey === 'scenario' || moduleKey === 'raqabh') && result.pointsOutput) {
          moduleContent.querySelector('.points-output').value = result.pointsOutput;
          moduleContent.querySelector('.demote-output').value = result.demoteOutput;
          moduleContent.querySelector('.dismiss-output').value = result.dismissOutput;
        }
        const records = parseEventBlocks(input.value, moduleKey);
        const pointsOutput = moduleContent.querySelector('.points-output');
        const demoteOutput = moduleContent.querySelector('.demote-output');
        const dismissOutput = moduleContent.querySelector('.dismiss-output');

        if (pointsOutput && moduleKey !== 'events' && moduleKey !== 'scenario' && moduleKey !== 'raqabh') {
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
        if (demoteOutput && moduleKey !== 'events' && moduleKey !== 'scenario' && moduleKey !== 'raqabh') {
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
        if (dismissOutput && moduleKey !== 'events' && moduleKey !== 'scenario' && moduleKey !== 'raqabh') {
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
    membersField?.addEventListener('input', processCurrentModule);
    responsibilitiesField?.addEventListener('input', processCurrentModule);

    const processBtn = moduleContent.querySelector('.action-process');
    const copyOutputBtn = moduleContent.querySelector('.action-copy-output');
    const copyFinalBtn = moduleContent.querySelector('.action-copy-final');
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
    copyFinalBtn?.addEventListener('click', () => {
      copyText(finalOutput?.value || '');
      showToast('تم نسخ الجرد النهائي');
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
      if (reasonsOutput) reasonsOutput.value = '';
      if (finalOutput) finalOutput.value = '';
      report.value = '';
      authorInput.value = '';
      totalCount.textContent = 'إجمالي العدد: 0';
      duplicateAlert.style.display = 'none';
      duplicateAlert.textContent = '';

      moduleContent.querySelectorAll(`[data-sync-group="${moduleKey}-shared"]`).forEach((field) => {
        field.value = '';
      });
      if (membersField) membersField.value = '';
      if (responsibilitiesField) responsibilitiesField.value = '';
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
              <label>تقييم المسؤوليات</label>
              <textarea class="module-responsibilities" placeholder="منشن العضو : تقييم المسؤوليات\n\nأو\n\nالايدي : 123...\nالتقييم بالمسؤوليات : ممتاز"></textarea>
            </div>

            <div class="module-card">
              <label>${activeDef.outputLabel}</label>
              <textarea class="module-output" readonly placeholder="ستظهر النتيجة هنا..."></textarea>
              <div class="stats-bar">
                <div class="stats-count">إجمالي العدد: 0</div>
                <div class="stats-duplicates" style="display: none;"></div>
              </div>
            </div>

            <div class="module-card">
              <label>السبب</label>
              <textarea class="module-reasons-output" readonly placeholder="سيظهر سبب احتساب البوينتات هنا..."></textarea>
            </div>
          </div>

          <div class="module-card full-width">
            <label>الجرد النهائي</label>
            <textarea class="module-final-output" readonly placeholder="سيظهر الجرد النهائي هنا..."></textarea>
          </div>

          <div class="module-card full-width">
            <label>أعضاء القسم ورتبهم من الهيدرات</label>
            <textarea class="module-members" placeholder="➜ <@&ROLE_ID>\n- <@USER_ID>"></textarea>
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
            <button class="secondary action-copy-final" type="button">نسخ الجرد النهائي</button>
            <button class="secondary action-copy-report" type="button">نسخ التقرير الأسبوعي</button>
            <button class="secondary action-clear" type="button">مسح الكل</button>
          </div>
        </div>

        <div class="subtab-panel" data-panel="points">
          <div class="mini-form-card">
            <h3>🎁 استبيان البوينتات</h3>
            <div class="points-layout">
              <textarea class="points-input" placeholder="تظهر هنا نتيجة البوينتات المحسوبة تلقائيًا..."></textarea>
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
            <textarea class="accounting-input" placeholder="تظهر هنا نتائج المحاسبة المحسوبة تلقائيًا..."></textarea>
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

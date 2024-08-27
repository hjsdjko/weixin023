package com.cl.controller;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Map;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Date;
import java.util.List;
import javax.servlet.http.HttpServletRequest;

import com.cl.utils.ValidatorUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.cl.annotation.IgnoreAuth;

import com.cl.entity.BaoxiuchuliEntity;
import com.cl.entity.view.BaoxiuchuliView;

import com.cl.service.BaoxiuchuliService;
import com.cl.service.TokenService;
import com.cl.utils.PageUtils;
import com.cl.utils.R;
import com.cl.utils.MPUtil;
import com.cl.utils.CommonUtil;
import java.io.IOException;

/**
 * 报修处理
 * 后端接口
 * @author 
 * @email 
 * @date 2024-03-29 14:15:48
 */
@RestController
@RequestMapping("/baoxiuchuli")
public class BaoxiuchuliController {
    @Autowired
    private BaoxiuchuliService baoxiuchuliService;



    


    /**
     * 后端列表
     */
    @RequestMapping("/page")
    public R page(@RequestParam Map<String, Object> params,BaoxiuchuliEntity baoxiuchuli,
		HttpServletRequest request){
		String tableName = request.getSession().getAttribute("tableName").toString();
		if(tableName.equals("yonghu")) {
			baoxiuchuli.setYonghuzhanghao((String)request.getSession().getAttribute("username"));
		}
        EntityWrapper<BaoxiuchuliEntity> ew = new EntityWrapper<BaoxiuchuliEntity>();

		PageUtils page = baoxiuchuliService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, baoxiuchuli), params), params));

        return R.ok().put("data", page);
    }
    
    /**
     * 前端列表
     */
	@IgnoreAuth
    @RequestMapping("/list")
    public R list(@RequestParam Map<String, Object> params,BaoxiuchuliEntity baoxiuchuli, 
		HttpServletRequest request){
        EntityWrapper<BaoxiuchuliEntity> ew = new EntityWrapper<BaoxiuchuliEntity>();

		PageUtils page = baoxiuchuliService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, baoxiuchuli), params), params));
        return R.ok().put("data", page);
    }

	/**
     * 列表
     */
    @RequestMapping("/lists")
    public R list( BaoxiuchuliEntity baoxiuchuli){
       	EntityWrapper<BaoxiuchuliEntity> ew = new EntityWrapper<BaoxiuchuliEntity>();
      	ew.allEq(MPUtil.allEQMapPre( baoxiuchuli, "baoxiuchuli")); 
        return R.ok().put("data", baoxiuchuliService.selectListView(ew));
    }

	 /**
     * 查询
     */
    @RequestMapping("/query")
    public R query(BaoxiuchuliEntity baoxiuchuli){
        EntityWrapper< BaoxiuchuliEntity> ew = new EntityWrapper< BaoxiuchuliEntity>();
 		ew.allEq(MPUtil.allEQMapPre( baoxiuchuli, "baoxiuchuli")); 
		BaoxiuchuliView baoxiuchuliView =  baoxiuchuliService.selectView(ew);
		return R.ok("查询报修处理成功").put("data", baoxiuchuliView);
    }
	
    /**
     * 后端详情
     */
    @RequestMapping("/info/{id}")
    public R info(@PathVariable("id") Long id){
        BaoxiuchuliEntity baoxiuchuli = baoxiuchuliService.selectById(id);
		baoxiuchuli = baoxiuchuliService.selectView(new EntityWrapper<BaoxiuchuliEntity>().eq("id", id));
        return R.ok().put("data", baoxiuchuli);
    }

    /**
     * 前端详情
     */
	@IgnoreAuth
    @RequestMapping("/detail/{id}")
    public R detail(@PathVariable("id") Long id){
        BaoxiuchuliEntity baoxiuchuli = baoxiuchuliService.selectById(id);
		baoxiuchuli = baoxiuchuliService.selectView(new EntityWrapper<BaoxiuchuliEntity>().eq("id", id));
        return R.ok().put("data", baoxiuchuli);
    }
    



    /**
     * 后端保存
     */
    @RequestMapping("/save")
    public R save(@RequestBody BaoxiuchuliEntity baoxiuchuli, HttpServletRequest request){
    	baoxiuchuli.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(baoxiuchuli);
        baoxiuchuliService.insert(baoxiuchuli);
        return R.ok();
    }
    
    /**
     * 前端保存
     */
    @RequestMapping("/add")
    public R add(@RequestBody BaoxiuchuliEntity baoxiuchuli, HttpServletRequest request){
    	baoxiuchuli.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(baoxiuchuli);
        baoxiuchuliService.insert(baoxiuchuli);
        return R.ok();
    }



    /**
     * 修改
     */
    @RequestMapping("/update")
    @Transactional
    public R update(@RequestBody BaoxiuchuliEntity baoxiuchuli, HttpServletRequest request){
        //ValidatorUtils.validateEntity(baoxiuchuli);
        baoxiuchuliService.updateById(baoxiuchuli);//全部更新
        return R.ok();
    }



    

    /**
     * 删除
     */
    @RequestMapping("/delete")
    public R delete(@RequestBody Long[] ids){
        baoxiuchuliService.deleteBatchIds(Arrays.asList(ids));
        return R.ok();
    }
    
	








}
